import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchBox from './components/SearchBox';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import reducer from './reducers';
import rootSaga from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

// then run the saga
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <SearchBox />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
