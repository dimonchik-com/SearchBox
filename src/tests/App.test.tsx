import React from 'react';
import { render } from '@testing-library/react';
import SearchBox from '../components/SearchBox';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import reducer from './../reducers';
import rootSaga from './../sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

// then run the saga
sagaMiddleware.run(rootSaga);

test('Check component exist', () => {
  const { getByText } = render(<Provider store={store}><SearchBox /></Provider>);
});
