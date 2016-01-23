/* Login Components
  ---------------
  1. Login Form (Center)
*/

import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Input, ButtonInput, Grid, Row, Col } from 'react-bootstrap';
import { mapAllStateToProps } from '../utils/mapStateToProps';
import { store } from '../store';
import FacebookLogin from '../components/login/Facebook';

/* Components */
import PageAlert from '../components/PageAlert';

/* Stylesheets */
import { LoginStyle } from '../css/LoginStyle.css';

var alert = {
  msg: "Under Development",
  desc: "This isn't quite ready yet. Make sure to check back soon!",
  sev: "warning"
};

var Login = React.createClass({
  loginUser: function(event){
    console.log("This is a mock login.");
    store.dispatch({
      type: "LOGIN_USER",
      user: {
        id: 240120401,
        name: "barric.reed",
        firstName: "Barric",
        lastName: "Reed",
        isAuthenticated: true,
        isLoggedIn: true
      }
    });
  },

  // Stackoverflow has a good method for login buttons
  render: function() {
    return (
      <Grid>
        <Row className="alertRow"><PageAlert alert={alert} /></Row>
        <Row className="show-grid">
          <Col xs={3} md={4}></Col>
          <Col xs={6} md={4}>
            <form>
              <Input type="email" label="Email Address" placeholder="Enter email" />
              <Input type="password" label="Password" />
              <Link to="/dashboard"><ButtonInput type="submit" value="Login" onClick={this.loginUser}/></Link>
              <FacebookLogin />
            </form>
          </Col>
          <Col xs={3} md={4}></Col>
        </Row>
      </Grid>
    );
  }
});

export default Login;
