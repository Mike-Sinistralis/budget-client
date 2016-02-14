import React, { Component } from 'react';
import { Provider } from 'react-redux';

import DevTools from './DevTools';
import Routes from '../components/routes';

class Root extends Component
{
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <div>
          <Routes />
          <DevTools />
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: React.PropTypes.object,
};

export default Root;
