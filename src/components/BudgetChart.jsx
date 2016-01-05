/* BudgetChart Component
  ---------------

*/

import React from 'react';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { mapAllStateToProps } from '../utils/mapStateToProps';

const tableStyle = {
  textAlign: 'left'
};

const panelTitle = (
  <h3 style={tableStyle}>// Trends</h3>
);

const BudgetChart = React.createClass({
  render: function() {
    return (
      <Panel header={panelTitle}>
        Budget Chart Panel - WIP
      </Panel>
    );
  }
});

module.exports = {
  BudgetChart: BudgetChart
};
