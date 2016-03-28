import React, { Component, PropTypes } from 'react';
import Square from './Square';

export default class Board extends Component {
    constructor(props) {
        super(props);
    }

    renderSquare(i) {
        const x = i % 8;
        const y = Math.floor(i / 8);

        return (
            <div key={i}>
                <Square x={x} y={y}/>
            </div>
        );
    }

    render() {
        const squares = [];
        for (let i = 0; i < 64; ++i) {
            squares.push(this.renderSquare(i));
        }

        return (
            <div className="chessboard">
                {squares}
            </div>
        );
    }
}
