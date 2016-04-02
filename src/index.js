import 'babel-polyfill';
import { render } from 'react-dom';
import React from 'react';
import App from './containers/App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { getSymbolByFigureTeam, stateSubscriber } from './game/base';

const initialState = ((state) => {
    let {figures} = state, id = 0;
    let nFigures = {
        data: [],
        figuresIdsByXY: {}
    }

    for (let figure of figures) {
        figure.id = id++;
        figure.symbol = getSymbolByFigureTeam(figure.type, figure.team)
        nFigures.data.push(figure);
        nFigures.figuresIdsByXY[figure.x + '_' + figure.y] = id;
    }

    return Object.assign({}, state, { figures: nFigures });
})(window.__CHESS__INITIAL_STATE__);

const store = configureStore(initialState);
store.subscribe(() => {
    stateSubscriber(store.getState());
});

const rootElement = document.getElementById('root');

render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
