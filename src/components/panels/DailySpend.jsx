/* Daily Spend Component
  ---------------
  Exports two components:
  1. Pure ("dumb") Compoent
  2. Connect ("smart") Component

  To Do
  ---------------
  - Make sure component can handle formatting properly
*/

import React from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { mapAllStateToProps } from '../../utils/mapStateToProps';
import { routineDaily, nonroutineDaily, netDaily } from '../../utils/budgetMath';

/* Pure Component */
const DailySpend = React.createClass({
  render: function() {
    return (
      <Panel>
        <Grid fluid={true}>
          <Row><h2>Net: ${this.props.netToday.toFixed(2)}</h2></Row>
          <Row>Today: ${this.props.nonroutineToday.toFixed(2)} | Routine: ${this.props.routineToday.toFixed(2)}</Row>
        </Grid>
      </Panel>);
  }
});

/* Connected Component */
const DailySpendContainer = connect(mapAllStateToProps)(DailySpend);

module.exports = {
  DailySpend: DailySpend,
  DailySpendContainer: DailySpendContainer
};
