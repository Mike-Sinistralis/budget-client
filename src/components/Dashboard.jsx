/* Dashboard Components
  ---------------
  Note: [Location, Q = Quadrant]
  Note: May want to move each component to its own .jsx
  1. [Q2] Daily Spend Panel (using Papers as tiles)
  2. [Q1] Chart Panel (w/ 1D, 1W, 1M, 3M, 6M, 1Y, ALL)
  3. [Q3] Daily Transaction Panel
  4. [Q4] Routine Transaction Panel
  Reference layout excel for grid layout
*/

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import { BudgetChart, DailySpendContainer, DailyTransactions, RoutineTransactions } from './common/Panels';

var dashStyle = {
  textAlign: 'center'
};

const dashboardGrid = (
  <Grid style={dashStyle} fluid={false}>
    <Row className="alertRow"></Row>
    <Row className="summarychartRow">
      <Col xs={0} md={1} />
      <Col xs={10} xsOffset={1} md={5} mdOffset={0}><DailySpendContainer /></Col>
      <Col xs={10} xsOffset={1} md={5} mdOffset={0}><BudgetChart /></Col>
      <Col xs={0} md={1} />
    </Row>
    <Row className="transactionRow">
      <Col xs={0} md={1} />
      <Col xs={10} xsOffset={1} md={5} mdOffset={0}><DailyTransactions /></Col>
      <Col xs={10} xsOffset={1} md={5} mdOffset={0}><RoutineTransactions /></Col>
      <Col xs={0} md={1} />
    </Row>
  </Grid>
);

var Dashboard = React.createClass({
  render: function() {
    return dashboardGrid;
  }
});

export default Dashboard;
