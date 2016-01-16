/* Daily Transactions Component
  ---------------

    OLD
    ---------------
    <h3>Today: $<font style={ getDollarColor(this.props.nonroutineToday) }>{this.props.nonroutineToday.toFixed(2)}</font></h3>
*/
import React from 'react';
import { Panel, Table, Glyphicon } from 'react-bootstrap';
import { getDollarColor, getAmountFormat } from '../utils/css';

const tableStyle = {
  textAlign: 'left'
};

const panelTitle = (
  <h3 style={tableStyle}>// Today's Activity</h3>
);

const NonroutineSpend = React.createClass({
  render: function() {

    const { nonroutine, today } = this.props;

    return (
      <Panel header={panelTitle}>
        <Table hover striped condensed style={tableStyle}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { nonroutine.get(today).map((o,k) =>
              <tr key={o.get('id')}>
                <td>{o.get('name')}</td>
                <td>{o.get('description')}</td>
                <td style={getDollarColor(o.get('amount'))}>${getAmountFormat(o.get('amount'))}</td>
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

export default NonroutineSpend;
