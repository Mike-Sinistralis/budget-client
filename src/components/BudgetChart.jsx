// BudgetChart.jsx

import React from 'react';
import { Panel, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import { mapAllStateToProps } from '../utils/mapStateToProps';
import { BarChart } from 'react-d3';

const panelTitle = (
  <div>
    <Glyphicon glyph="stats"><span className="span-header"> Trends</span></Glyphicon>
  </div>
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

export default BudgetChart;
