/* Login Components
  ---------------
  1. Login Form (Center)
*/

import React from 'react';
import { Link } from 'react-router';
import { Input, ButtonInput, Grid, Row, Col } from 'react-bootstrap';
import PageAlert from './Alert';

var alert = {
  msg: "Under Development",
  desc: "This isn't quite ready yet. Make sure to check back soon!",
  sev: "warning"
};

const loginGrid = (
  <Grid>
    <Row className="alertRow"><PageAlert alert={alert} /></Row>
    <Row className="show-grid">
      <Col xs={3} md={4}></Col>
      <Col xs={6} md={4}>
        <form>
          <Input type="email" label="Email Address" placeholder="Enter email" />
          <Input type="password" label="Password" />
          <Link to="/dashboard"><ButtonInput type="submit" value="Login" /></Link>
        </form>
      </Col>
      <Col xs={3} md={4}></Col>
    </Row>
  </Grid>
);

var Login = React.createClass({

  render: function() {
    return loginGrid;
  }
});

export default Login;
