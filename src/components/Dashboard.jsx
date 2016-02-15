import React, { PropTypes } from 'react';
import { Grid, Row } from 'react-bootstrap';

/* Components */
import PageAlert from '../components/PageAlert';
import BudgetChart from '../components/BudgetChart';
import DailySpend from '../components/DailySpend';
import NonroutineSpend from '../components/NonroutineSpend';
import RoutineSpend from '../components/RoutineSpend';

/* Stylesheets */
import '../scss/DashboardStyle';

const alert = {
  msg: 'Under Development',
  desc: 'This isn\'t quite ready yet. Make sure to check back soon!',
  sev: 'warning',
};

function Dashboard({ budget }) {
  return (
    <Grid className="dashboard-grid text-center" fluid={false}>
      <Row className="alertRow">
        <PageAlert alert={alert} />
      </Row>
      <Row className="dailySpend">
        <DailySpend
          netToday={budget.netToday}
          nonroutineToday={budget.nonroutineToday}
          routineToday={budget.routineToday} />
      </Row>
      <Row className="budgetChart">
        <BudgetChart />
      </Row>
      <Row className="nonroutineSpend text-left">
        <NonroutineSpend nonroutine={budget.nonroutine} today={budget.today}/>
      </Row>
      <Row className="routineSpend text-left">
        <RoutineSpend routine={budget.routine} />
      </Row>
    </Grid>
  );
}

Dashboard.propTypes = {
  budget: PropTypes.object,
};

export default Dashboard;
