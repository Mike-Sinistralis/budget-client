import React, { Component } from 'react';
import { Provider } from 'react-redux';

import AppContainer from './App';

class Root extends Component
{
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <div>
          <AppContainer />
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: React.PropTypes.object,
};

export default Root;
