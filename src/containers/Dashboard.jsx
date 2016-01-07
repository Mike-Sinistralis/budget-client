// Dashboard.jsx

import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import { mapAllStateToProps } from '../utils/mapStateToProps';

/* Components */
import PageAlert from '../components/Alert';
import { BudgetChart } from '../components/BudgetChart';
import { DailySpend } from '../components/DailySpend';
import { NonroutineSpend } from '../components/NonroutineSpend';
import { RoutineSpend} from '../components/RoutineSpend';

var alert = {
  msg: "Under Development",
  desc: "This isn't quite ready yet. Make sure to check back soon!",
  sev: "warning"
};


var dashStyle = {
  textAlign: 'center'
};

var Dashboard = React.createClass({
  render: function() {
    return (
      <Grid style={dashStyle} fluid={false}>
        <Row className="alertRow"><PageAlert alert={alert} /></Row>
        <Row className="dailySpend"><DailySpend netToday={this.props.netToday} nonroutineToday = {this.props.nonroutineToday} routineToday={this.props.routineToday} /></Row>
        <Row className="budgetChart"><BudgetChart /></Row>
        <Row className="nonroutineSpend"><NonroutineSpend nonroutine={this.props.nonroutine} today={this.props.today}/></Row>
        <Row className="routineSpend"><RoutineSpend routine={this.props.routine} /></Row>
      </Grid>
    );
  }
});

export default connect(mapAllStateToProps)(Dashboard);
