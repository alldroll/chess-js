import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import gameLogic from './reducers/gameLogic';

const store = createStore(gameLogic);
const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
