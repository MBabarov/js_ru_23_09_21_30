import { ADD_NEW_COMMENT, ADD_COMMENT_TO_ARTICLE } from '../constants'
import { addCommentToArticle } from '../AC/articles'
import { normalizedComments} from '../fixtures'
import { arrayToMap } from '../store/helpers'

export default (comments = arrayToMap(normalizedComments), action) => {
    const { type, payload, response, error } = action
    switch (type) {
        case ADD_NEW_COMMENT:
            return Object.assign(comments, {[payload.id]: payload})
    }
    return comments
}