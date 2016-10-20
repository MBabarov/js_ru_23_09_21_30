import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from './../decorators/toggleOpen'
import Loader from './Loader'
import NewCommentForm from './NewCommentForm'
import { connect } from 'react-redux'
import { getRelation } from '../store/helpers'
import { addComment, loadAllComments, loadCurrentComments } from '../AC/comments'

class CommentList extends Component{

    componentWillReceiveProps(nextProps) {
        const { isOpen, loading, loadCurrentComments, article: { id } } = this.props

        if (nextProps.isOpen && !isOpen  && !loading) loadCurrentComments(id)
    }

    render() {
        const { article, comments, loading, addComment, isOpen, toggleOpen } = this.props
        if (!article.comments || !article.comments.length) return <div>
            <p>No comments yet</p>
            <NewCommentForm articleId = {article.id} addComment = {addComment}/>
        </div>
        const commentView = !loading ? <ul>{comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}</ul> : <Loader />
        const text = isOpen ? 'hide comments' : `show ${article.comments.length} comments`
        const body = isOpen && <div>
                {commentView}
                <NewCommentForm articleId = {article.id} addComment = {addComment}/>
            </div>

        return (
            <div>
                <a href="#" onClick={toggleOpen}>{text}</a>
                {body}
            </div>
        )
    }
}

export default connect((state, props) => ({
    comments: state.comments.get('entities').toArray(),  //getRelation(props.article, 'comments', state.comments.get('entities').valueSeq().toArray())
    loading: state.comments.get('loading'),
    loaded: state.comments.get('loaded')
}), { addComment, loadAllComments, loadCurrentComments })(toggleOpen(CommentList))