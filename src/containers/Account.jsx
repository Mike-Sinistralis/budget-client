'use babel';

import React from 'react';
import { Alert, Grid, Row, Col } from 'react-bootstrap';

const Account = React.createClass({
  render: function() {
    return (
      <Grid>
        <Row>
          <Alert bsStyle="danger">
            <strong>Sorry!</strong> This is still a work-in-progress.
          </Alert>
        </Row>
      </Grid>
    );
  }
});

export default Account;
