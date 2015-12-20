import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import App from './components/App';

const routes = <Route component={App}>

</Route>;

ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
);


/**
	<Route path="/results" component={Results} />
  <Route path="/" component={Voting} />
  **/