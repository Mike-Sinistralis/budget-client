/* Navbar Components
  ---------------
  1. (Top-left) Name
  2. (Top-left) Nav Links
  3. (Top-right) User Profile
  style="{background-color: #033046}"
*/

import React, { PropTypes } from 'react';
import { Nav, NavItem, Image } from 'react-bootstrap';

/* Stylesheets */
import '../scss/NavbarStyle';

function logoutUser()
{
  //TODO: Turn into actionCreator
}

function LoggedIn({ user }) {
  if (user.get('isAuthenticated')) {
    return (
      <Nav pullRight>
        <NavItem className="navbar-text-special" eventKey={3} href="#/account">
          <p className="navbar-text-special">
            {user.get('name')}
          </p>
        </NavItem>
        <NavItem className="navbar-text-special" eventKey={3} href="#/">
          <p className="navbar-text-special" onClick={logoutUser}>
            Logout
          </p>
        </NavItem>
        <NavItem href="#/account">
          <Image className="navbar-profile-picture" src={user.get('imageUrl')} rounded responsive />
        </NavItem>
      </Nav>
    );
  } else {
    return (
      <Nav pullRight>
        <NavItem className="navbar-text-special=" eventKey={2} href="#/login">
          <p className="navbar-text-special">Login</p>
        </NavItem>
      </Nav>
    );
  }
}

LoggedIn.propTypes = {
  user: PropTypes.object,
};

export default LoggedIn;
