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

/* Pure Component */
export const DailySpend = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <Panel>
        <Grid fluid={true}>
          <Row>{this.props.netRate}</Row>
          <Row>{this.props.todayRate} | this.props.routineRate</Row>
        </Grid>
      </Panel>
    );
  }
});

/* Connected Component */
export const DailySpendContainer = connect(mapStateToProps)(DailySpend);
