import { DELETE_ARTICLE, FILTER_ARTICLE_BY_NAME, FILTER_ARTICLE_BY_PRIOD } from '../constants'

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function filterArticleByName(articles) {
    return {
        type: FILTER_ARTICLE_BY_NAME,
        payload: { articles }
    }
}

export function filterArticleByPeriod(period) {
    return {
        type: FILTER_ARTICLE_BY_PRIOD,
        payload: { period }
    }
}