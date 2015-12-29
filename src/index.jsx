import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {List,Map} from 'immutable';
import reducer from './reducer';
import App from './components/App';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const budget = Map({
    "user" : "barric.reed",
    "name" : "Barric's Budget",
    "description" : "This is Barric's test budget",
    "routine" : List.of(
        Map({
            "name": "Accenture Paycheck",
            "description": "2x month pay from Accenture",
            "type": "Salary",
            "timestamp": Date(),
            "amount": 4600.0,
            "frequency": 2,
            "frequencyDescription": "Twice a month -> 2*amount / # days in month",
            "accounting": "credit"
        }),
        Map({
            "name": "Rent",
            "description": "2x month pay from Accenture",
            "type": "Rent",
            "timestamp": Date(),
            "amount": -1350.0,
            "frequency": 1,
            "frequencyDescription": "Once a month -> amount / # days in month",
            "accounting": "debit"
        })
    ),
    "non-routine" : List.of(
        Map({
            "name": "Coffee",
            "description": "Starbucks",
            "type": "Coffee",
            "timestamp": Date(),
            "amount": -2.50,
            "accounting": "debit"
        }),
        Map({
            "name": "Lottery",
            "description": "Scratcher",
            "type": "Lottery",
            "timestamp": Date(),
            "amount": 5.0,
            "accounting": "credit"
        })
    )
});

const store = createStore(reducer);

store.dispatch({
   type: 'SET_STATE',
   state: {budget}
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
