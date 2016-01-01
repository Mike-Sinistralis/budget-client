/* Daily Spend Component
  ---------------
  Exports two components:
  1. Pure ("dumb") Compoent
  2. Connect ("smart") Component
*/

import React from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { mapAllStateToProps } from '../../utils/mapStateToProps';

/* Pure Component */
const DailySpend = React.createClass({
  render: function() {
    return (
      <Panel>
        <Grid fluid={true}>
          <Row>{this.props.name}</Row>
          <Row>netRate</Row>
          <Row>todayRate | routineRate</Row>
        </Grid>
      </Panel>);
  }
});

/* Connected Component */
const DailySpendContainer = connect(mapAllStateToProps)(DailySpend);

module.exports = {
  DailySpendContainer: DailySpendContainer
};
