/* store.js

state:
  user
  auth
  budget

*/

import * as reduxApi from 'redux';
import reducer from './reducers/reducer';
import { budget1 as budget } from './utils/ExampleDataSets';

const store = reduxApi.createStore(reducer);

/* To be replaced */
store.dispatch({
   type: 'SET_STATE',
   state: budget
});

module.exports = {
  store: store,
  state: store.getState()
};
