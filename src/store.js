/* store.js

state:
  user
  auth
  budget

*/

import * as reduxApi from 'redux';
import reducer from './reducers/reducer';
import { exampleStore } from './utils/ExampleDataSets';

const store = reduxApi.createStore(reducer);

/* To be replaced */

store.dispatch({
   type: 'SET_STATE',
   state: exampleStore
});

module.exports = {
  store: store,
  state: store.getState()
};
