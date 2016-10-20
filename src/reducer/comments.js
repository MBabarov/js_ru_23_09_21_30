import { normalizedComments } from '../fixtures'
import { arrayToMap } from '../store/helpers'
import { ADD_COMMENT, LOAD_ALL_COMMENT, LOAD_CURRENT_COMMENTS, START, SUCCESS } from '../constants'
import { Record, Map } from 'immutable'


const CommentModel = Record({
    id: null,
    user: '',
    text: ''
})

const defaultState = new Map({
    entities: new Map({}), //arrayToMap(normalizedComments, comment => new CommentModel(comment)),
    loading: false,
    loaded: false
})

export default (comments = defaultState, action) => {
    const { type, payload, response, error, generatedId } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.setIn(['entities', generatedId], new CommentModel({...payload.comment, id: generatedId}))

        case LOAD_ALL_COMMENT:
            return comments.set('loading', true)

        case LOAD_ALL_COMMENT + SUCCESS:
            return comments
                .set('entities', arrayToMap(response.records, comment => new CommentModel(comment)))
                .set('loading', false)
                .set('loaded', true)

        case LOAD_CURRENT_COMMENTS + START:
            return comments.setIn(['loading'], true)

        case LOAD_CURRENT_COMMENTS + SUCCESS:
            return comments
                .setIn(['loading'], false)
                .setIn(['entities'], arrayToMap(response, comment => new CommentModel(comment)))
    }
    return comments
}