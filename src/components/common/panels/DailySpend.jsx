/* Daily Spend Component
  ---------------
  Exports two components:
  1. Pure ("dumb") Compoent
  2. Connect ("smart") Component
*/

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { mapStateToProps } from '../utils/mapStateToProps';

const dsgrid = (
  <Panel>
    <Grid fluid={true}>
      <Row>netRate</Row>
      <Row>todayRate | routineRate</Row>
    </Grid>
  </Panel>
);

/* Pure Component */
const DailySpend = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return dsgrid;
  }
});

/* Connected Component */
//export const DailySpendContainer = connect(mapStateToProps)(DailySpend);

module.exports = {
  DailySpend: DailySpend
}
