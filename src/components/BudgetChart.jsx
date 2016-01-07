// BudgetChart.jsx

import React from 'react';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { mapAllStateToProps } from '../utils/mapStateToProps';
import { BarChart } from 'react-d3';

const tableStyle = {
  textAlign: 'left'
};

const panelTitle = (
  <h3 style={tableStyle}>// Trends</h3>
);

const barData = [
  {
    "name": "Routine",
    "values": [
      {"x": 1, "y": 91},
      {"x": 2, "y": 123},
      {"x": 3, "y": 20}
    ]
  },
  {
    "name": "Today",
    "values": [
      {"x": 1, "y": 91},
      {"x": 2, "y": 123},
      {"x": 3, "y": 20}
    ]
  }
];

const BudgetChart = React.createClass({
  render: function() {
    return (
      <Panel header={panelTitle}>
        <BarChart
          data={barData}
          fill={'#3182bd'}
        />
      </Panel>
    );
  }
});

module.exports = {
  BudgetChart: BudgetChart
};
