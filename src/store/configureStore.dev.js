import { createStore, applyMiddleware, compose } from 'redux';
import sagaMiddleware from 'redux-saga';
import DevTools from '../Containers/DevTools';
import createLogger from 'redux-logger';
import perf from 'react-addons-perf';

import reducer from '../reducers/reducer';
import sagas from '../sagas';

const createStoreWithSaga = compose(
  applyMiddleware(sagaMiddleware(...sagas)),
  applyMiddleware(createLogger({
    stateTransformer: (state) => state.toJS ? state.toJS() : state,
  })),
  DevTools.instrument()
)(createStore);

const store = createStoreWithSaga(reducer);

window.store = store;
window.perf = perf;

export default store;
