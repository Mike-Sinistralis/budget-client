/* store.js
  ---------------
  Create and manage store
*/

import * as reduxApi from 'redux';
import budgetReducer from './reducers/budgetReducer';
import { budget } from './utils/ExampleDataSets';

const store = reduxApi.createStore(budgetReducer);
store.dispatch({
   type: 'SET_STATE',
   state: {budget}
});

module.exports = {
  store: store
};
