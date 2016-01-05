/* Routine Transactions Component
  ---------------

    To Dos:
      - Remove getDailyRate function call and put into store object
*/

import React from 'react';
import { Panel, Table, Glyphicon, Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getDailyRate } from '../utils/utils';
import { getDollarColor, getAmountFormat } from '../utils/css';

const tableStyle = {
  textAlign: 'left'
};

const panelTitle = (
  <h3 style={tableStyle}>// Routine Spend</h3>
);

const RoutineSpend = React.createClass({
  render: function() {
    return (
      <Panel header={panelTitle}>
        <Table hover striped condensed style={tableStyle}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Amount</th>
              <th>DailyRate</th>
              <th>Freq</th>
              <th>Active</th>
              <th>Start</th>
              <th>End</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { this.props.routine.map((o,k) =>
              <tr key={o.get('id')}>
                <td>{o.get('name')}</td>
                <td>{o.get('description')}</td>
                <td style={getDollarColor(o.get('amount'))}>${getAmountFormat(o.get('amount'))}</td>
                <td style={getDollarColor(o.get('amount'))}>${getAmountFormat(getDailyRate(o.get('amount'), o.get('frequency'), this.props.today))}</td>
                <td>{o.get('frequency')}</td>
                <td>{o.get('active') ? "Yes" : "No"}</td>
                <td>{o.get('startOn')}</td>
                <td>{o.get('endOn').format("YYYY-MM-DD")}</td>
                <td>
                  <Glyphicon glyph="pencil" />
                  <Glyphicon glyph="remove" />
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Panel>
    );
  }
});

module.exports = {
  RoutineSpend: RoutineSpend
};
