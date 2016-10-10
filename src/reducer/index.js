import { combineReducers } from 'redux'
import count from './counter'
import articles from './articles'
import range from './datePicker'
import selectFilter from './selectFilter'

export default combineReducers({
    count, articles, range, selectFilter
})


/*
export default combineReducers({
    count: counterReducer,
    articles: articleReducer
})
*/
