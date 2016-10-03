import React, { PropTypes } from 'react';

function Comment(props) {

        const { text, user } = props.comment;
        return (
            <p style={{color: 'grey', paddingLeft: 20}}>{text}<br /><i>{user}</i></p>
        )

};
Comment.PropTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    })
};
export default Comment;