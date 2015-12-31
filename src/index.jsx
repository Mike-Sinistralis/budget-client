/* index.jsx
  ---------------
  Entry-point for client
*/

/* node_module imports */
import React from 'react';
import ReactDOM from 'react-dom';
import Router, { Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

/* budget-client Custom Components */
import reducer from './reducer';
import App from './components/App';
import Login from './components/common/Login';
import Dashboard from './components/Dashboard';

/* Create redux store using example data set */
/* Update once DB is built */
import { budget01 } from './components/common/utils/ExampleDataSets';
const store = createStore(reducer);
store.dispatch({
   type: 'SET_STATE',
   state: {budget01}
});

const routes = <Route component={App}>
    <Route path="/" component={Login} />
    <Route path="/dashboard" component={Dashboard} />
</Route>;

ReactDOM.render(
    <Provider store={store}>
        <Router>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);
