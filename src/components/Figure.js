import React, { Component, PropTypes} from 'react';
import { DragSource } from 'react-dnd';
import { TeamT, FigureT } from '../game/base';

const TeamTEnum = Object.keys(TeamT).map((k) => TeamT[k]);
const FigureTEnum = Object.keys(FigureT).map((k) => FigureT[k]);

const figureSource = {
    beginDrag(props) {
        console.log('BEGIN DRAG');
        return {
            id: props.id
        };
    },

    endDrag(props, monitor, component) {
        if (!monitor.didDrop()) {
            return;
        }

        var item = monitor.getItem();
        console.log('END DRAG', item);
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    };
}

class Figure extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { connectDragSource, isDragging, symbol } = this.props;

        return connectDragSource(
            <span className="figure" style={{
                cursor: 'move',
                opacity: isDragging ? 0.5 : 1,
                fontSize: 50
            }}>
                {symbol}
            </span>
        );
    }
}

Figure.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    team: PropTypes.oneOf(TeamTEnum),
    type: PropTypes.oneOf(FigureTEnum),
    symbol: PropTypes.string.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
};


export default DragSource('FIGURE', figureSource, collect)(Figure);
