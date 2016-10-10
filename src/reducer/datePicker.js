import { UPDATE_RANGE, RESET_RANGE } from '../constants'

const initialState = {from: null, to: null};

export default (range = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case UPDATE_RANGE:
            //присвоение здесь лишнее + лучше объеденить этот редюсер с selected
            return range=payload;
            break;
        case RESET_RANGE:
            return range=initialState;
            break;
    }
    return range
}
