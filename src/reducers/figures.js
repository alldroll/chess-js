import * as ActionT from '../constants/actions';
import * as movement from '../game/movement';

const figure = (state = {}, action) => {
    switch (action.type) {
        case ActionT.MOVE_FIGURE: {
            if (action.id !== state.id) {
                return state;
            }

            if (!movement.canMoveFigure(state, action.x, action.y)) {
                return state;
            }

            return Object.assign({}, state, {
                x: action.x,
                y: action.y
            });
        }
    }

    return state;
};

export default (state = {}, action) => {
    switch (action.type) {
        case ActionT.MOVE_FIGURE: {
            return state.map(f => figure(f, action));
        }
    }

    return state;
};
