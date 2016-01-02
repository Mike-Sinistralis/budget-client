/* Navbar Components
  ---------------
  1. (Top-left) Name
  2. (Top-left) Nav Links
  3. (Top-right) User Profile
  style="{background-color: #033046}"
*/

import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, Image, Grid, Row, Col } from 'react-bootstrap';

var bgcolor = {
    backgroundColor: '#272729'
};

var profileImageHeightWidth = {
    height: '22px',
    width: '19px'
};

var Navigation = React.createClass({
  render: function() {
    return   <Navbar style={bgcolor} staticTop={true} inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">iCountant</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#/dashboard">Dashboard</NavItem>
        <NavItem eventKey={1} href="#/history">History</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={2} href="#/history">Saved: $400.12</NavItem>
        <NavItem eventKey={3} href="#/account">barric.reed</NavItem>
        <NavItem href="#/account"><Image style={profileImageHeightWidth} src="profile.JPG" rounded /></NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>;
  }
});

export default Navigation;
