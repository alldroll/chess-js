import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';

class Square extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { connectDropTarget, x, y, isOver } = this.props;
        const black = (x + y) % 2;
        return connectDropTarget(
            <div className={'square ' + (black ? 'black' : 'white')}
            >
                { this.props.children }
            </div>
        );
    }
}

const squareTarget = {
    drop(props, monitor) {
        const item = monitor.getItem();
        console.log('DROP ITEM', item);
        props.onDrop(item.id, props.x, props.y);
    }
}

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}

Square.propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    isOver: PropTypes.bool.isRequired,
    onDrop: PropTypes.func.isRequired
};

export default DropTarget('FIGURE', squareTarget, collect)(Square);
