// Alert.jsx

import React from 'react';
import { Alert } from 'react-bootstrap';

const style = {
  width: "75%",
  margin: "15px auto",
  textAlign: 'left'
};

let PageAlert = React.createClass({
  render: function() {
    const {msg, desc, sev} = this.props.alert;
    return (
      <Alert bsStyle={sev} style={style}>
        <p><strong>{msg}:</strong> {desc} </p>
      </Alert>
    );
  },
});

export default PageAlert;
