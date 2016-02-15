/* Navbar Components
  ---------------
  1. (Top-left) Name
  2. (Top-left) Nav Links
  3. (Top-right) User Profile
  style="{background-color: #033046}"
*/

import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import LoggedIn from './LoggedIn';

/* Stylesheets */
import '../scss/NavbarStyle';

function Navigation({ user }) {
  return (
    <Navbar staticTop inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a id="brab" href="#">
            <span className="navbar-text-brand">&Counting</span>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#/dashboard">
            <p className="navbar-text-special">Dashboard</p>
          </NavItem>
        </Nav>
        <LoggedIn user={user} />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
