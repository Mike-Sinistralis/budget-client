/* App Components
  ---------------
  1. [Top] Header - Nav Bar
*/

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Nav from './Navigation';

var App = React.createClass({
  render: function() {
    return <div className="appComponent"> <Nav /> {this.props.children} </div>;
  }
});

export default App