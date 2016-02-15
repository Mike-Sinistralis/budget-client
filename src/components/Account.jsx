import React, { PropTypes } from 'react';
import { Alert, Grid, Row } from 'react-bootstrap';

function Account({ user }) {
  return (
    <Grid>
      <Row>
        <Alert bsStyle="warning">
          <strong>Sorry!</strong> This is still a work-in-progress.
        </Alert>
      </Row>
      <Row>
        {user.map((val, key) =>
          <Row key={key}>{key}: {val}</Row>
        ).toArray()}
      </Row>
    </Grid>
  );
}

Account.propTypes = {
  user: PropTypes.object,
};

export default Account;
