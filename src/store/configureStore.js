import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

export default function configureStore(initialState) {
    const finalCreateStore = compose(
        applyMiddleware(
            createSagaMiddleware(rootSaga)
        ),
        window.devToolsExtension ? window.devToolsExtension() : undefined
    )(createStore);

    const store = finalCreateStore(rootReducer, initialState);
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default;
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
