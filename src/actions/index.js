import * as constants from '../constants/actions';

export const changeTurn = () => {
    return {
        type: constants.CHANGE_TURN
    };
};

export const freezeOpponent = (team) => {
    return {
        type: constants.FREEZE_OPPONENT,
        opponent: team
    };
};
