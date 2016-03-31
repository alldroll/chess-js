import 'babel-polyfill';
import { render } from 'react-dom';
import React from 'react';
import App from './containers/App';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

const initialState = window.__CHESS__INITIAL_STATE__;
const store = configureStore(initialState);
const rootElement = document.getElementById('root');

render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
