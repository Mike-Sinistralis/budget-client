import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {List} from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');

var App = React.createClass({
  render: function() {
    return React.cloneElement(this.props.children, {pair: pair})
  }
});

export default App