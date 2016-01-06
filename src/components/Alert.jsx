// Alert.jsx

import React from 'react';
import { Alert } from 'react-bootstrap';

let PageAlert = React.createClass({
  render: function() {
    const {msg, desc, sev, show} = this.props.alert;
    return (
      <Alert bsStyle={sev}>
        <h4><strong>{msg}</strong></h4>
        <p>{desc}</p>
      </Alert>
    );
  },
});

export default PageAlert;
