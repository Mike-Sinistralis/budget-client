/* store.js
  ---------------
  Create and manage store
*/

import { createStore } from 'redux';
import budgetReducer from './reducers/budgetReducer';
import { budget } from './utils/ExampleDataSets';

const store = createStore(reducer);
store.dispatch({
   type: 'SET_STATE',
   state: {budget}
});

module.exports = {
  store: store
};
