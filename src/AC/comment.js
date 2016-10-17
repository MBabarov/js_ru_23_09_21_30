import { ADD_NEW_COMMENT, SET_DATA_VALUE } from '../constants'

export function addNewComment(text, user, articleId) {
    return {
        type: ADD_NEW_COMMENT,
        payload: {text: text, user: user, articleId: articleId}
    }
}

export function setDataValue(field, value) {
    return {
        type: SET_DATA_VALUE,
        payload: {field: field, value: value}
    }
}
