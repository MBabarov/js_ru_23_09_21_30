import { UPDATE_RANGE, RESET_RANGE } from '../constants'

export function updateRange(range) {
    return {
        type: UPDATE_RANGE,
        payload: range
    }
}

export function resetRange() {
    return {
        type: RESET_RANGE
    }
}
