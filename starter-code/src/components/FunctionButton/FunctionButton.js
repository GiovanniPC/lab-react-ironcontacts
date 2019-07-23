import React, { Component } from 'react';

export default class FunctionButton extends Component{
    render(){
        return <button onClick={() => this.props.functionProp()}>{this.props.children}</button>
    };
};