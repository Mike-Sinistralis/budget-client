/* Dashboard Components
  ---------------
  Note: [Location, Q = Quadrant]
  Note: May want to move each component to its own .jsx
  1. [Q2] Daily Spend Tile (using Papers as tiles)
  2. [Q1] Chart Tile (w/ 1D, 1W, 1M, 3M, 6M, 1Y, ALL)
  3. [Q3] Daily Transaction Tile
  4. [Q4] Routine Transaction Tile
*/

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Nav from './Navigation';

var Dashboard = React.createClass({
  render: function() {
    return <div className="dashboard"> Hello World! I'm a dashboard.</div>;
  }
});

export default Dashboard