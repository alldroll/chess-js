import { combineReducers } from 'redux';
import figuresReducer from './figures';

const rootReducer = combineReducers({
    figures: figuresReducer
});

export default rootReducer;
