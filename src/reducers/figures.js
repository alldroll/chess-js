import * as ActionT from '../constants/actions';

const figure = (state = {}, action) => {
    switch (action.type) {
        case ActionT.MOVE_FIGURE: {
            if (action.id !== state.id) {
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
            return Object.assign({}, state, {
                data: state.data.map(f => figure(f, action))
            });
        }
    }

    return state;
};


