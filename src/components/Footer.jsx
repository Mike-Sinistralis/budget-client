// Footer.jsx
'use babel';

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const footerPadding = {
  paddingLeft: "17%",
  paddingRight: "17%"
};

const leftSpan = {
  paddingLeft: "5%"
};

const rightSpan = {
  paddingRight: "5%",
  float: "right"
};

// Need to convert to sticky footer
export default class Footer extends React.Component {
  render() {
    return (
      <footer style={footerPadding}>
        <hr />
        <p>
          <span style={leftSpan}>© &Counting </span>
          <span style={rightSpan}> FAQ | Github | Contact Us </span>
        </p>
      </footer>
    );
  }
}
