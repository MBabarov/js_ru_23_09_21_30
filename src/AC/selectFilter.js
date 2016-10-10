import { UPDATE_SELECTED } from '../constants'

export function updateSelect(articles) {
    return {
        type: UPDATE_SELECTED,
        payload: articles
    }
}
