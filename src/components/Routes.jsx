import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

/* containers */
import App from '../containers/App';
import Landing from '../containers/Landing';
import Dashboard from '../containers/Dashboard';
import Account from '../containers/Account';
import Login from '../containers/Login';


function Routes() {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Landing} />
        <Route path="dashboard" component={Dashboard}/>
        <Route path="account" component={Account}/>
        <Route path="login" component={Login}/>
      </Route>
    </Router>
  );
}

export default Routes;
