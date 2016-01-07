// index.jsx

/* node imports */
import React from 'react';
import ReactDOM from 'react-dom';
import Router, { Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

/* budget-client Custom */
import { store } from './store';
import App from './containers/App';
import Login from './components/Login';
import Dashboard from './containers/Dashboard';
import Account from './containers/Account';

const routes = <Route component={App}>
    <Route path="/" component={Login} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/account" component={Account} />
</Route>;

ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes}/>
    </Provider>,
    document.getElementById('app')
);
