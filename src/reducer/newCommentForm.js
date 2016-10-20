import { SET_DATA_VALUE } from '../constants'
import { normalizedComments} from '../fixtures'
import { Map } from 'immutable'

export default (newCommentForm = new Map({text: '', user: ''}), action) => {
    const { type, payload, response, error } = action;
    switch (type) {
        case SET_DATA_VALUE:
            return newCommentForm.set(payload.field, payload.value);
    }

    return newCommentForm
}