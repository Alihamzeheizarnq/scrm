import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducer';
import rootSaga from './saga';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && process.env.NODE_ENV !== 'production' ?
        compose(
            applyMiddleware(sagaMiddleware),
            window.devToolsExtension(),
        ) :
        applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;