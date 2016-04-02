import * as constants from '../constants/actions';

export const changeTurn = () => {
    return {
        type: constants.CHANGE_TURN
    };
};

export const moveFigure = (id, x, y) => {
    return {
        type: constants.MOVE_FIGURE,
        id: id,
        x: x,
        y: y
    };
};

