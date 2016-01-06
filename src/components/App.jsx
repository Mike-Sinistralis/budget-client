// App.jsx

import React from 'react';
import Nav from './Navigation';
import Footer from './Footer';

export default React.createClass({
  render: function() {
    return (
      <div className="app">
        <Nav />
        {this.props.children}
        <Footer />
      </div>
    );
  }
});
