import React, { Component } from 'react';

export default class Comments extends Component {

    state = {
        isOpen: false
    };

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render() {

        const { comments } = this.props;
        const { isOpen } = this.state;
        //лучше при isOpen == false вообще не показывать список, а не сами комменты внутри него прятать
        const commentsList = (comments) ? comments.map(comment => {
            return (
                <div key={comment.id}>
                    { isOpen ? (<p style={{color: 'grey', paddingLeft: 20}}>{comment.text}<br /><i>{comment.user}</i></p>) : ''}
                </div>
            )
        }) : '';

        return (
            <div>
                {commentsList}
                <button onClick={this.toggleOpen}> {isOpen ? 'Hide comments' : 'Show comments'}</button>
            </div>
        )
    }

}
