import { put, take } from 'redux-saga/effects';
import * as actions from '../actions';

import * as Constants from '../constants/actions';

function* changeTurn() {
    yield put(action.freezeOpponent());
}
