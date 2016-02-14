import React, { PropTypes } from 'react';
import { Grid, Row, Col, Button, Image } from 'react-bootstrap';

/* Components */
import PageAlert from './PageAlert';
import Welcome from './Welcome';

/* Stylesheets */
import '../scss/LandingStyle';

var alert = false;

function Landing({ user }) {
  return (
    <div>
      <Grid className="landing-header">
        {alert && <Row className="alertRow"> <PageAlert alert={alert}/></Row>}
        <Welcome user={user} />
      </Grid>
      <Grid className="landing-why">
        <Row className="landing-why-headline text-center">
          <h1>It's easy!</h1>
          <h3>Three steps to financial freedom.</h3>
        </Row>
        <Row className="why-row">
          <Col xs={0} md={3}/>
          <Col xs={12} md={2}><Image className="landing-why-img" src="./img/calculator-money.png" rounded responsive />
            <p><strong>Step 1. </strong>Calculate</p>
          </Col>
          <Col xs={12} md={2}><Image className="landing-why-img" src="./img/pie-chart.png" rounded responsive />
            <p><strong>Step 2. </strong> ...</p>
          </Col>
          <Col xs={12} md={2}><Image className="landing-why-img" src="./img/dollar-bills.png" rounded responsive />
            <p><strong>Step 3. </strong> Profit!</p>
          </Col>
          <Col xs={0} md={3}/>
        </Row>
      </Grid>
    </div>
  );
}

Landing.propTypes = {
  user: PropTypes.object,
};

export default Landing;
