import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import { canMoveFigure } from '../game/movement';

class Square extends Component {
    constructor(props) {
        super(props);
    }

    renderOverlay(color = 'green') {
        return (
            <div className={'overlay ' + color + '_overlay'}/>
        );
    }

    render() {
        const { connectDropTarget, x, y, isOver, canDrop } = this.props;
        const black = (x + y) % 2;
        return connectDropTarget(
            <div className={'square ' + (black ? 'black' : 'white')}
            >
                { this.props.children }
                { !isOver && canDrop && this.renderOverlay('yellow') }
                { isOver && canDrop && this.renderOverlay('green') }
                { isOver && !canDrop && this.renderOverlay('red') }
            </div>
        );
    }
}

const squareTarget = {
    drop(props, monitor) {
        const item = monitor.getItem();
        console.log('DROP ITEM');
        props.onDrop(item.id, props.x, props.y);
    },

    canDrop(props, monitor) {
        const item = monitor.getItem();
        return canMoveFigure(item, props.x, props.y);
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
}

Square.propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    isOver: PropTypes.bool.isRequired,
    onDrop: PropTypes.func.isRequired,
    canDrop: PropTypes.bool.isRequired
};

export default DropTarget('FIGURE', squareTarget, collect)(Square);
