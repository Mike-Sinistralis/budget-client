// App.jsx

import React from 'react';
import Nav from '../components/Navigation';
import Footer from '../components/Footer';

/* stylesheets */
import { AppStyle } from '../css/AppStyle.css';

export default React.createClass({
  render: function() {
    return (
      <div className="app">
        <Nav />
        <div classname="main">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
});