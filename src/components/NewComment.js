import React, {Component, PropTypes} from 'react';
import toggleOpen from '../decorators/toggleOpen'
import CSSTransition from 'react-addons-css-transition-group'
import './animate.css'

class NewComment extends Component{

    state={
        textComment:'',
        authorComment: '',
        invalidForm: true
    };

    defaultState(){
        this.setState({
            textComment:'',
            authorComment: '',
            invalidForm: true
        })
    };

    checkValid(textField, authorField){
        return (textField.length && authorField.length) ? false : true
    };

    checkTextFieldAndValid = (ev) =>{
        this.setState({
            textComment:  ev.target.value,
            invalidForm:  this.checkValid(ev.target.value, this.state.authorComment)
        });
    };

    checkAuthorFieldAndValid = (ev) =>{
        this.setState({
            authorComment: ev.target.value,
            invalidForm: this.checkValid(this.state.textComment, ev.target.value)
        });
    };

    AddNewComment = () => {
        const newComment = {
            id: new Date().getTime(),
            user: this.state.authorComment,
            text: this.state.textComment
        };
        console.log('New comment', newComment);
        this.defaultState();
    };


    render(){
        const {toggleOpen, isOpen} = this.props;
        const form = isOpen ? (
                    <div style={{padding: 10}}>
                        <input type="text"  placeholder="Enter author*"  value={this.state.authorComment} onChange={this.checkAuthorFieldAndValid} style={{margin: 10, display: 'block', width: 200}} />
                        <textarea placeholder="Enter comment*" value={this.state.textComment} onChange={this.checkTextFieldAndValid} rows="5" style={{margin: 10, display: 'block', width: 200}} />
                        <button disabled={this.state.invalidForm} onClick={this.AddNewComment} style={{margin: 10, display: 'block', width: 200}}>Add comment</button>
                    </div>
                ) : '';
        return (
            <div>
                <a href="#" onClick={toggleOpen}>{isOpen ?  'Hide form for new comment' : 'Add new comment'}</a>
                <CSSTransition
                    transitionName="new-comment-form"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                    {form}
                </CSSTransition>
            </div>
        )
    }
}
export default toggleOpen(NewComment)