import React from 'react';
import { Link } from 'react-router';
import { githubClientUrl } from '../utils/constants';

/* Stylesheets */
import '../scss/FooterStyle';

// Need to convert to sticky footer
// MikeNote: Sticky footers are a giant pain in the ass in React
function Footer() {
  return (
    <footer className="footer-one">
      <hr className="style-two"/>
      <p>
        <span className="footer-left">© 2016 &Counting</span>
          <span className="footer-right">
            <Link to="/faq">FAQ</Link> |
            <a href={githubClientUrl}> Github</a> |
            <Link to="/contact"> Contact Us</Link>
          </span>
      </p>
    </footer>
  );
}

export default Footer;
