import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';
import { githubClientUrl } from "../utils/constants";

/* Stylesheets */
import FooterStyle from '../scss/FooterStyle';

// Need to convert to sticky footer
class Footer extends React.Component {
  render() {
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
}

export default Footer;
