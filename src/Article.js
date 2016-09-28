import React, { Component } from 'react';

export default class Article extends Component {



    state = {
        isOpen: false,
        foo: 'bar'
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
                <h3>{article.title}</h3>
                <section>
                    <div style = {{display: isOpen ? 'block' : 'none'}}>{article.text}<br /><br /></div>
                    <button onClick = {this.toggleOpen}>{isOpen ? 'Hide' : 'Show more'}</button>
                </section>
            </div>
        )
    }

}