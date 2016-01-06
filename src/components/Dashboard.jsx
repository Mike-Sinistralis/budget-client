// Dashboard.jsx

import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import { BudgetChart } from './BudgetChart';
import { DailySpend } from './DailySpend';
import { NonroutineSpend } from './NonroutineSpend';
import { RoutineSpend} from './RoutineSpend';
import { mapAllStateToProps } from '../utils/mapStateToProps';

var dashStyle = {
  textAlign: 'center'
};

var Dashboard = React.createClass({
  render: function() {
    return (
      <Grid style={dashStyle} fluid={false}>
        <Row className="alertRow"></Row>
        <Row className="dailySpend"><DailySpend netToday={this.props.netToday} nonroutineToday = {this.props.nonroutineToday} routineToday={this.props.routineToday} /></Row>
        <Row className="budgetChart"><BudgetChart /></Row>
        <Row className="nonroutineSpend"><NonroutineSpend nonroutine={this.props.nonroutine} today={this.props.today}/></Row>
        <Row className="routineSpend"><RoutineSpend routine={this.props.routine} /></Row>
      </Grid>
    );
  }
});

export default connect(mapAllStateToProps)(Dashboard);
