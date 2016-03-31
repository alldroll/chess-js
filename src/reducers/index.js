import { combineReducers } from 'redux';
import figuresReducer from './figures';
import turnReducer from './turn';

const rootReducer = combineReducers({
    figures: figuresReducer,
    turn: turnReducer
});

export default rootReducer;
