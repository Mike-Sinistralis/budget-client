import React, { PropTypes } from 'react';

/* components */
import Nav from '../components/Navigation';
import Footer from '../components/Footer';

/* stylesheets */
import '../scss/AppStyle';

function App({ user, children }) {
  return (
    <div className="app">
      <Nav user={user} />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
}

App.propTypes = {
  children: PropTypes.element,
};

export default App;
