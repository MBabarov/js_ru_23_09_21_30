import React, { Component } from 'react';

export default function accordionItems(Component) {
    return class WrapperComponent extends React.Component{

        state = {
            openArticleId: null
        };
        openArticle = id => ev => {
            (this.state.openArticleId==id) ? this.setState({openArticleId: null}) : this.setState({openArticleId: id})
        };
        isOpen  = id  => this.state.openArticleId === id;

        render() {
            return <Component {...this.props}  openArticle={this.openArticle} isOpen={this.isOpen}/>
        }
    }
};