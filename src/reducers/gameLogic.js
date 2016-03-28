import { combineReducers } from 'redux';
import movement from './movement';

const gameLogic = combineReducers({
    movement
});

export default gameLogic;
