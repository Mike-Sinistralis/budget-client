import { createStore, applyMiddleware } from 'redux';
import sagaMiddleware from 'redux-saga';

import reducer from '../reducers/reducer';
import sagas from '../sagas/index';

const createStoreWithSaga = applyMiddleware(
  sagaMiddleware(...sagas)
)(createStore);

const store = createStoreWithSaga(reducer);

export default store;
