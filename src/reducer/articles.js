import { DELETE_ARTICLE, FILTER_ARTICLE_BY_NAME, FILTER_ARTICLE_BY_PRIOD } from '../constants'
import { articles as defaultArticles } from '../fixtures'
import moment from 'moment'

export default (articles = defaultArticles, action) => {
    const { type, payload } = action
    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id != payload.id)
            break;

        case FILTER_ARTICLE_BY_NAME:
            if(payload.articles.length){
                articles.forEach(article => {
                    article.isHideByFilterName = true;
                    payload.articles.some(filterArticle => {
                        if (filterArticle.value == article.id) {
                             article.isHideByFilterName = false;
                        }

                    })
                })
            }
            else {
                articles.forEach(article => (
                    article.isHideByFilterName = false
                ))
            }
            return articles  =  Object.assign([], articles);
            break;

        case FILTER_ARTICLE_BY_PRIOD:
            if(payload.period.from && payload.period.to){
                articles.forEach(article => {
                    moment(article.date).isBetween(payload.period.from, payload.period.to, null, '[]') ?  article.isHideByFilterPeriod = false : article.isHideByFilterPeriod = true;
                })
            }
            else{
                articles.forEach(article => (
                    article.isHideByFilterPeriod = false
                ))
            }
            return articles  =  Object.assign([], articles);
            break
    }
    return articles
}