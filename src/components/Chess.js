import React, { Component } from 'react';
import Board from './Board';

export default class Chess extends Component {
    render() {
        return (
            <Board {...this.props}/>
        );
    }
}
