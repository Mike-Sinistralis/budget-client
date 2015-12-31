/* App Components
  ---------------
  1. [Top] Header - Nav Bar
*/

import React from 'react';
import Nav from './Navigation';

var App = React.createClass({
  render: function() {
    return <div className="appMain"> <Nav /> {this.props.children} </div>;
  }
});

export default App;
