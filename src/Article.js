import React, { Component } from 'react';
import Comments from './Comments';

export default class Article extends Component {



    state = {
        isOpen: false
    };

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render() {
        const { article } = this.props;
        const { isOpen } = this.state;


        return (
            <div>
                <h3  onClick = {this.toggleOpen}>{article.title}</h3>
                <section>
                    <div style = {{display: isOpen ? 'block' : 'none'}}>{article.text}<br /><br /></div>
                    {article.comments ? <Comments comments={article.comments}/> : ''}
                </section>
            </div>
        )
    }

}