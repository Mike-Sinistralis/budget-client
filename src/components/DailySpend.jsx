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
import { Panel, Grid, Row, Col, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getDollarColor } from '../utils/css';

const panelTitle = (
  <div>
    <Glyphicon glyph="piggy-bank"><span className="span-header"> Summary</span></Glyphicon>
  </div>
);

/* Pure Component */
const DailySpend = React.createClass({
  render: function() {
    const { netToday, nonroutineToday, routineToday } = this.props;
    return (
      <Panel header={panelTitle}>
        <Grid fluid={true}>
          <Row><h2>Net: <font style={getDollarColor(netToday.toFixed(2))}>${netToday.toFixed(2).replace("-","")}</font></h2></Row>
          <Row>Today: <font style={getDollarColor(nonroutineToday)}>${nonroutineToday.toFixed(2).replace("-","")}</font> |
            Routine: <font style={getDollarColor(routineToday)}>${routineToday.toFixed(2).replace("-","")}</font></Row>
        </Grid>
      </Panel>);
  }
});

export default DailySpend;
