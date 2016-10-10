import { UPDATE_SELECTED } from '../constants'

export default (selectFilter = null, action) => {
    const {type, payload} = action;
    switch (type) {
        case UPDATE_SELECTED:
            return selectFilter=payload
    }
    return selectFilter
}