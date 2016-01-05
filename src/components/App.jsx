/* App Components
  ---------------
  1. [Top] Header - Nav Bar
*/

import React from 'react';
import Nav from './Navigation';

export default React.createClass({
  render: function() {
    return (
      <div className="app">
        <Nav />
        {this.props.children}
      </div>
    );
  }
});
