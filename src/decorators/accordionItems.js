import React, { Component } from 'react';

export default function accordionItems(Component) {
    return class WrapperComponent extends React.Component{

        state = {
            openItemId: null
        };
        openItem = id => ev => {
            this.setState({openItemId: this.state.openItemId==id ? null : id})
        };
        isOpen  = id  => this.state.openItemId === id;

        render() {
            return <Component {...this.props}  openItem={this.openItem} isOpen={this.isOpen}/>
        }
    }
};
