import React from 'react';
import { Link } from 'react-router';
import { Input, ButtonInput, Grid, Row, Col } from 'react-bootstrap';

/* Components */
import PageAlert from './PageAlert';

/* Stylesheets */
import '../scss/LoginStyle';

const alert = {
  msg: 'Under Development',
  desc: 'This isn\'t quite ready yet. Make sure to check back soon!',
  sev: 'warning',
};

// TODO: Convert to actionCreator
function loginAction() {
  console.log('This is a mock login.');
  /*
  TODO: Login Action Creator

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
 */
}

// Stackoverflow has a good method for login buttons
function Login() {
  return (
    <Grid>
      <Row className="alertRow">
        <PageAlert alert={alert} />
      </Row>
      <Row className="show-grid">
        <Col xs={3} md={4} />
        <Col xs={6} md={4}>
          <form>
            <Input type="email" label="Email Address" placeholder="Enter email" />
            <Input type="password" label="Password" />
            <Link to="/dashboard">
              <ButtonInput type="submit" value="Login" onClick={loginAction}/>
            </Link>
          </form>
        </Col>
        <Col xs={3} md={4} />
      </Row>
    </Grid>
  );
}

export default Login;
