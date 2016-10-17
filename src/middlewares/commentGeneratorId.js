import { ADD_NEW_COMMENT } from '../constants'

export default store => next => action => {
    const { type } = action;

    switch (type) {
        case ADD_NEW_COMMENT:
            const updatePayload = Object.assign({...action.payload, id: (new Date()).getTime()});
            const updateAction = Object.assign({type: action.type}, {payload: updatePayload})
            return next(updateAction)
    }
    next(action)
}