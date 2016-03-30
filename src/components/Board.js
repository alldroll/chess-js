import React, { Component, PropTypes } from 'react';
import Square from './Square';
import Figure from './Figure';
import { getSymbolByFigureTeam } from '../base/constants';

export default class Board extends Component {
    constructor(props) {
        super(props);
    }

    renderSquare(i) {
        const x = i % 8;
        const y = Math.floor(i / 8);
        const figures = this.props.figures;
        let piece = '';

        for (let figure of figures) {
            if (figure.x === x && figure.y === y) {
                figure.symbol = getSymbolByFigureTeam(figure.type, figure.team);
                piece = <Figure {...figure}/>;
                break;
            }
        }

        return (
            <div key={i}>
                <Square x={x} y={y}>
                    {piece}
                </Square>
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
