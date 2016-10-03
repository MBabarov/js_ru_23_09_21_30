import React, { Component } from 'react';

export default function accordionItems(Component) {
    return class WrapperComponent extends React.Component{

        state = {
            //Не привязывайся к названию сущности, декоратор будет использоваться везде. Назови, скажем, openItemId
            openArticleId: null
        };
        openArticle = id => ev => {
            //Но проще this.setState({openArticleId: this.state.openArticleId==id ? null : id})
            (this.state.openArticleId==id) ? this.setState({openArticleId: null}) : this.setState({openArticleId: id})
        };
        isOpen  = id  => this.state.openArticleId === id;

        render() {
            return <Component {...this.props}  openArticle={this.openArticle} isOpen={this.isOpen}/>
        }
    }
};
