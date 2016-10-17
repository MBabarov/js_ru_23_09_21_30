import { DELETE_ARTICLE, ADD_COMMENT_TO_ARTICLE } from '../constants'

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function addCommentToArticle(articleId, commentId) {
    return {
        type: ADD_COMMENT_TO_ARTICLE,
        payload: { articleId: articleId,  commentId: commentId}
    }
}
