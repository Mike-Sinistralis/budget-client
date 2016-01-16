// Footer.jsx
'use babel';

import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import { githubClientUrl } from "../utils/constants";

const footerPadding = {
  paddingLeft: "17%",
  paddingRight: "17%",
  fontSize: "12px"
};

const leftSpan = {
  paddingLeft: "5%"
};

const rightSpan = {
  paddingRight: "5%",
  float: "right"
};

// Need to convert to sticky footer
class Footer extends React.Component {
  render() {
    return (
      <footer style={footerPadding}>
        <hr />
        <p>
          <span style={leftSpan}>© &Counting </span>
          <span style={rightSpan}>
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
