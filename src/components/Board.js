import React, { Component, PropTypes } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backed from 'react-dnd-html5-backend';
import Square from './Square';
import Figure from './Figure';
import { getSymbolByFigureTeam } from '../game/base';

class Board extends Component {
    constructor(props) {
        super(props);
    }

    renderSquare(i) {
        const x = i % 8;
        const y = Math.floor(i / 8);


        return (
            <div key={i}>
                <Square x={x} y={y} onDrop={this.props.moveFigure}>
                    {this.renderPiece(x, y)}
                </Square>
            </div>
        );
    }

    renderPiece(x, y) {
        let piece = null;
        for (let figure of this.props.figures) {
            if (figure.x === x && figure.y === y) {
                piece = <Figure {...figure}/>;
                break;
            }
        }

        return piece;
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

export default DragDropContext(HTML5Backed)(Board);
