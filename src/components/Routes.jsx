import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

/* containers */
import App from '../containers/App';
import Landing from '../containers/Landing';
import Dashboard from '../containers/Dashboard';
import Account from '../containers/Account';
import Login from '../containers/Login';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

function Routes() {
  return (
    <Router history={appHistory}>
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
