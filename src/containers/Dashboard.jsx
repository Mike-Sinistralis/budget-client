// Dashboard.jsx

import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import { mapAllStateToProps } from '../utils/mapStateToProps';

/* Components */
import PageAlert from '../components/PageAlert';
import BudgetChart from '../components/BudgetChart';
import DailySpend from '../components/DailySpend';
import NonroutineSpend from '../components/NonroutineSpend';
import RoutineSpend from '../components/RoutineSpend';

/* Stylesheets */
import { DashboardStyle } from '../css/DashboardStyle.css';

var alert = {
  msg: "Under Development",
  desc: "This isn't quite ready yet. Make sure to check back soon!",
  sev: "warning"
};

var Dashboard = React.createClass({
  render: function() {
    return (
      <Grid className="dashboard-grid text-center" fluid={false}>
        <Row className="alertRow"><PageAlert alert={alert} /></Row>
        <Row className="dailySpend"><DailySpend netToday={this.props.budget.netToday} nonroutineToday = {this.props.budget.nonroutineToday} routineToday={this.props.budget.routineToday} /></Row>
        <Row className="budgetChart"><BudgetChart /></Row>
        <Row className="nonroutineSpend"><NonroutineSpend nonroutine={this.props.budget.nonroutine} today={this.props.budget.today}/></Row>
        <Row className="routineSpend"><RoutineSpend routine={this.props.budget.routine} /></Row>
      </Grid>
    );
  }
});

export default connect(mapAllStateToProps)(Dashboard);
