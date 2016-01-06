// Footer.jsx

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

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
      <footer>
        <hr />
        <p>
          <span style={leftSpan}>© &Counting </span>
          <span style={rightSpan}> FAQ | Github | Contact Us </span>
        </p>
      </footer>
    );
  }
}
