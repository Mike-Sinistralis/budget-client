import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Row, Col, Button } from 'react-bootstrap';

// TODO: There are 2 components here. Break it out.
function Welcome({ user }) {
  const { isAuthenticated, firstName } = user.toObject;
  let componentToRender;

  if (isAuthenticated) {
    componentToRender = (
      <Row className="welcome text-center">
        <h1>Welcome back, {firstName}!</h1>
        <object
          id="landing-header-svg"
          type="image/svg+xml"
          data="./img/statistics-rising.svg"
        >
            Your browser does not support SVG
        </object>
        <h3 id="mo-money">Ready to save some more money?</h3>
        <Link to="/dashboard">
          <Button bsSize="large" bsStyle="primary">Let's go!</Button>
        </Link>
      </Row>
    );
  } else {
    componentToRender = (
      <Row className="welcome text-center">
        <Col md={12}>
          <h1>Why can't finances be easier?</h1>
          <object
            id="landing-header-svg"
            type="image/svg+xml"
            data="./img/statistics-rising.svg"
          >
              Your browser does not support SVG
          </object>
          <h3 id="mo-money">They can. Click here!</h3>
          <Link to="/login">
            <Button bsSize="large" bsStyle="primary">Sign-up or Login</Button>
          </Link>
        </Col>
      </Row>
    );
  }

  return componentToRender;
}

Welcome.propTypes = {
  user: PropTypes.object,
};

export default Welcome;
