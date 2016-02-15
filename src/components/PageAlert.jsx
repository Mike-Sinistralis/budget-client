import React, { PropTypes } from 'react';
import { Alert } from 'react-bootstrap';

const style = {
  width: '75%',
  margin: '15px auto',
  textAlign: 'left',
};

function PageAlert({ alert }) {
  const { msg, desc, sev } = alert;
  return (
    <Alert bsStyle={sev} style={style}>
      <p><strong>{msg}:</strong> {desc} </p>
    </Alert>
  );
}

PageAlert.propTypes = {
  alert: PropTypes.object,
};

export default PageAlert;
