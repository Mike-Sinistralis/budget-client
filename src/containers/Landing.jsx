// Landing.jsx

import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Grid, Row, Col, Button, Image } from 'react-bootstrap';
import { mapAllStateToProps } from '../utils/mapStateToProps';

/* Components */
import PageAlert from '../components/PageAlert';

/* Stylesheets */
import LandingStyle from '../scss/LandingStyle';

var alert = false;

var Landing = React.createClass({
  welcome: function() {
    var {isAuthenticated, name, firstName, lastName} = this.props.user;
    if (isAuthenticated){
      return (
        <Row className="welcome text-center">
          <h1>Welcome back, {firstName}!</h1>
          <object id="landing-header-svg" type="image/svg+xml" data="./img/statistics-rising.svg">Your browser does not support SVG</object>
          <h3 id="mo-money">Ready to save some more money?</h3>
          <Link to="/dashboard"><Button bsSize="large" bsStyle="primary">Let's go!</Button></Link>
        </Row>
      );
    }
    else {
      return (
        <Row className="welcome text-center">
          <Col md={12}>
            <h1>Why can't finances be easier?</h1>
            <object id="landing-header-svg" type="image/svg+xml" data="./img/statistics-rising.svg">Your browser does not support SVG</object>
            <h3 id="mo-money">They can. Click here!</h3>
            <Link to="/login"><Button bsSize="large" bsStyle="primary">Sign-up or Login</Button></Link>
          </Col>
        </Row>
      );
    }
  },
  render: function() {
    return (
      <div>
      <Grid className="landing-header">
        {alert && <Row className="alertRow"> <PageAlert alert={alert}/></Row>}
        {this.welcome()}
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
  },
});

export default connect(mapAllStateToProps)(Landing);
