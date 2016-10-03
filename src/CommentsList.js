import React, { PropTypes } from 'react';
import toggleOpen from './decorators/toggleOpen';
import RaisedButton from 'material-ui/RaisedButton';

import Comment from './Comment'

function CommentsList (props) {

        const { comments, isOpen, toggleOpen } = props;
        const commentsList = comments
                ? comments.map(comment => {
                    return (
                        <Comment key={comment.id} comment={comment} />
                    )
                })
                : '';
        const buttonForComment = comments
                ? <RaisedButton label={isOpen ? 'Hide comments' : 'Show comments'} primary={true} onClick={toggleOpen} />
                : <p style={{color: 'grey', paddingLeft: 5, fontSize: 12}}>Not comments yet</p>;
        return (
            <div>
                {isOpen ? commentsList : ''}
                {buttonForComment}
            </div>
        )

}
CommentsList.propTypes = {
    comments: PropTypes.array
};
export default toggleOpen(CommentsList);
