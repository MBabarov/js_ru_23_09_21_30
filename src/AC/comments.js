import { ADD_COMMENT, LOAD_CURRENT_COMMENTS, LOAD_ALL_COMMENT, START, SUCCESS } from '../constants'
import $ from 'jquery'

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {
            articleId, comment
        },
        generateId: true
    }
}

export function loadAllComments() {
    return {
        type: LOAD_ALL_COMMENT,
        callAPI: '/api/comment'
    }
}


export function loadCurrentComments(aricleId) {
    return {
        type: LOAD_CURRENT_COMMENTS,
        callAPI: `api/comment?article=${aricleId}`,
        payload: { aricleId }
    }
}

export function loadCurrentComments_2(aricleId) {
    return (dispatch) => {
        dispatch({
            type: LOAD_CURRENT_COMMENTS + START,
            payload: { aricleId }
        })

        setTimeout(() => {
            $.get( `api/comment?article=${aricleId}`)
                .done(response => dispatch({
                    type: LOAD_CURRENT_COMMENTS + SUCCESS,
                    payload: { aricleId },
                    response
                }))
        }, 1000)
    }
}