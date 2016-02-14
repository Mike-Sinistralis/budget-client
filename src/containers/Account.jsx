import React from 'react';
import _ from 'underscore';
import { Alert, Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { mapAllStateToProps } from '../utils/mapStateToProps';

const Account = React.createClass({
  render: function() {
    return (
      <Grid>
        <Row>
          <Alert bsStyle="warning">
            <strong>Sorry!</strong> This is still a work-in-progress.
          </Alert>
        </Row>
        <Row>
          {_.map(this.props.user, (val, key) => {
            return <Row key={key}>{key}: {val}</Row>;
          })}
        </Row>
      </Grid>
    );
  }
});

export default connect(mapAllStateToProps)(Account);
