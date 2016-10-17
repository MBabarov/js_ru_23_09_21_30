import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from './../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import { connect } from 'react-redux'

class CommentList extends Component{
    static propTypes = {
        //comments: PropTypes.array,
        //form toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }
    render (){
        const { articleId, comments, isOpen, toggleOpen } = this.props
        console.log('comments', comments);
        if (!comments || !comments.length) return <div><p>No comments yet</p><NewCommentForm articleId={articleId} /></div>
        const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)
        const text = isOpen ? 'hide comments' : `show ${comments.length} comments`
        const body = isOpen && <div><ul>{commentItems}</ul><NewCommentForm articleId={articleId}/></div>
        return (
            <div>
                <a href="#" onClick={toggleOpen}>{text}</a><br />
                {body}
            </div>
        )
    }
}


//export default toggleOpen(CommentList)
export default connect((state, props) => ({
    comments:  state.articles[props.articleId].comments.map(id => state.comments[id])
}), null)(toggleOpen(CommentList))