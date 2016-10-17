import { DELETE_ARTICLE, ADD_NEW_COMMENT } from '../constants'
import { normalizedArticles } from '../fixtures'
import { arrayToMap } from '../store/helpers'

export default (articles = arrayToMap(normalizedArticles), action) => {
    const { type, payload } = action
    switch (type) {
        case DELETE_ARTICLE:
            return Object.keys(articles)
                .filter(id => id != payload.id)
                .reduce((acc, id) => ({...acc, [id]: articles[id]}), {})
            break;
        case ADD_NEW_COMMENT:
            articles[payload.articleId].comments.push(payload.id)
            return Object.assign({}, articles)
            break;
    }
    return articles
}
