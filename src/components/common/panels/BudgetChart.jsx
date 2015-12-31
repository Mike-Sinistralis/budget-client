/* BudgetChart Component
  ---------------

*/

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Panel } from 'react-bootstrap';

const budgetChartPanel = (
  <Panel>
    Budget Chart Panel
  </Panel>
);

var BudgetChart = React.createClass({
  render: function() {
    return budgetChartPanel;
  }
});

module.exports = {
  BudgetChart: BudgetChart
};
