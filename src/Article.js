import React, { PropTypes } from 'react';
import CommentsList from './CommentsList';
import {List, ListItem} from 'material-ui/List';

function Article(props){
    const { article, isOpen, openArticle } = props;
    return (
        <ListItem onClick={openArticle}>
            <h3>{article.title}</h3>
            <section>
                <div style = {{display: isOpen ? 'block' : 'none'}}>{article.text}<br /><br /></div>
                <CommentsList comments={article.comments}/>
            </section>
        </ListItem>
    )
}

Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        comments: PropTypes.array
    }).isRequired
};

export default Article;