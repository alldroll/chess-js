import 'babel-polyfill';
import { render } from 'react-dom';
import React from 'react';
import App from './containers/App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { getSymbolByFigureTeam, stateSubscriber } from './game/base';

const initialState = ((state) => {
    const {figures} = state;
    let id = 0, nFigures = [];

    for (let figure of figures) {
        figure.id = id++;
        figure.symbol = getSymbolByFigureTeam(figure.type, figure.team)
        nFigures.push(figure);
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
