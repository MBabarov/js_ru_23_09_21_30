import React, { PropTypes } from 'react';
import Article from './Article';
import accordionItems from './decorators/accordionItems'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';

function ArticlesList(props){

        const { articles, openArticle,  isOpen} = props;
        const articleComponents = articles
            ? articles.map(article =>
                <div key={article.id}>
                    <Article article={article} openArticle={openArticle(article.id)} isOpen={isOpen(article.id)} />
                </div>)
            : '';

        return (
            <MuiThemeProvider>
                <Paper zDepth={1} >
                <List>
                    {articleComponents}
                </List>
                </Paper>
            </MuiThemeProvider>
        )
}

ArticlesList.propTypes = {
    articles: PropTypes.array
};
// Вопрос - насколько корректно использовать декоратор, если для его использования,
// например, в компненте Article необходимо использовать  обязательно определенные
// аттрибуты такие как openArticle и isOpen для передачи id, иначе весь декоратор не будет работать
export default accordionItems(ArticlesList);