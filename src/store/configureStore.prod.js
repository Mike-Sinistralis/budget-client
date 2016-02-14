import { createStore, applyMiddleware } from 'redux';
import sagaMiddleware from 'redux-saga';

import { reducer as appReducer } from '../reducers/app';
import sagas from '../sagas/index';

const createStoreWithSaga = applyMiddleware(
  sagaMiddleware(...sagas)
)(createStore);

const store = createStoreWithSaga(appReducer);

export default store;
