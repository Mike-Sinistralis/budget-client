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
import { connect } from 'react-redux';
import { mapAllStateToProps } from '../utils/mapStateToProps';

/* Stylesheets */
import NavbarStyle from '../scss/NavbarStyle';

const Navigation = React.createClass({
  logoutUser: function(event){
    //TODO: Logout Action Creator
  },
  loggedIn: function() {
    if (this.props.user.get('isAuthenticated')){
      return (
        <Nav pullRight>
          <NavItem className="navbar-text-special" eventKey={3} href="#/account"><p className="navbar-text-special">{this.props.user.get('name')}</p></NavItem>
          <NavItem className="navbar-text-special" eventKey={3} href="#/"><p className="navbar-text-special" onClick={this.logoutUser}>Logout</p></NavItem>
          <NavItem href="#/account"><Image className="navbar-profile-picture" src={this.props.user.get('imageUrl')} rounded responsive /></NavItem>
        </Nav>
      );
    }
    else {
      return (
        <Nav pullRight>
          <NavItem className="navbar-text-special=" eventKey={2} href="#/login"><p className="navbar-text-special">Login</p></NavItem>
        </Nav>
      );
    }
  },
  render: function() {
    const { name, firstName, lastName, isAuthenticated } = this.props.user.toObject();
    return   <Navbar staticTop={true} inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a id="brab" href="#"><p className="navbar-text-brand">&Counting</p></a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#/dashboard"><p className="navbar-text-special">Dashboard</p></NavItem>
      </Nav>
      {this.loggedIn()}
    </Navbar.Collapse>
  </Navbar>;
  }
});

export default connect(mapAllStateToProps)(Navigation);
