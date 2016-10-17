import React, { Component, PropTypes } from 'react'
import { addNewComment, setDataValue } from '../AC/comment'
import { connect } from 'react-redux'

class NewCommentForm extends Component {
    static propTypes = {
    };

    handleChange  = field => ev => {
        ev.preventDefault();
        this.props.setDataValue(field, ev.target.value)
    }

    resetToDefaultValue = () => {
        this.props.setDataValue('text', '')
        this.props.setDataValue('user', '')
    }

    handleSubmit = ev => {
        ev.preventDefault()
        this.resetToDefaultValue()
        this.props.addNewComment(this.props.text, this.props.user, this.props.articleId)
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                comment: <input type="text" value={this.props.text} onChange = {this.handleChange('text')}/>
                comment: <input type="text" value={this.props.user} onChange = {this.handleChange('user')}/>
                <input type = "submit"/>
            </form>
        )
    }
}

export default connect(state => ({
    text: state.newCommentForm.get('text'),
    user: state.newCommentForm.get('user')
}), { setDataValue, addNewComment })(NewCommentForm)