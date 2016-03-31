import * as Constants from '../constants/actions';
import { TeamT } from '../constants/base';

export default (state = TeamT.WHITE, action) => {
    let nstate = state;
    switch (action.type) {
        case Constants.CHANGE_TURN: {
            nstate = state === TeamT.WHITE ? TeamT.BLACK : TeamT.WHITE;
        }
    }

    return nstate;
};
