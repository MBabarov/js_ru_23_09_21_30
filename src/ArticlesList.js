import React, { PropTypes } from 'react';
import Article from './Article';
import accordionItems from './decorators/accordionItems'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';

function ArticlesList(props){

        const { articles, openItem,  isOpen} = props;
        const articleComponents = articles
            ? articles.map(article =>
                <div key={article.id}>
                    <Article article={article} openItem={openItem(article.id)} isOpen={isOpen(article.id)} />
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

export default accordionItems(ArticlesList);