// index.jsx

/* node imports */
import React from 'react';
import ReactDOM from 'react-dom';
import Router, { Route } from 'react-router';
import { Provider } from 'react-redux';

/* budget-client Custom */
import { store } from './store';

/* containers */
import App from './containers/App';
import Landing from './containers/Landing';
import Dashboard from './containers/Dashboard';
import Account from './containers/Account';
import Login from './containers/Login';

const routes = <Route component={App}>
    <Route path="/" component={Landing} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/account" component={Account} />
    <Route path="/login" component={Login} />
</Route>;

ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes}/>
    </Provider>,
    document.getElementById('app')
);
