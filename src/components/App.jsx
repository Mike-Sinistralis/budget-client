import React, { PropTypes } from 'react';

/* components */
import Nav from '../components/Navigation';
import Footer from '../components/Footer';

/* stylesheets */
import '../scss/AppStyle';

function App({ children }) {
  return (
    <div className="app">
      <Nav />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
}

App.propTypes = {
  children: PropTypes.element,
};

export default App;
