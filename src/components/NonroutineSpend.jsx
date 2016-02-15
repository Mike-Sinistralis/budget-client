/* Daily Transactions Component
  ---------------

    OLD
    ---------------
    <h3>
      Today: $<font
        style={ getDollarColor(this.props.nonroutineToday) }
      >
        {this.props.nonroutineToday.toFixed(2)}
      </font>
    </h3>
*/

import React, { PropTypes } from 'react';
import { Panel, Table, Glyphicon } from 'react-bootstrap';
import { getDollarColor, getAmountFormat } from '../utils/css';

const panelTitle = (
  <div>
    <Glyphicon glyph="wrench"><span className="span-header"> Today</span></Glyphicon>
    <Glyphicon glyph="plus" className="add-new-item-right" />
  </div>
);

function NonroutineSpend({ nonroutine, today }) {
  return (
    <Panel header={panelTitle}>
      <Table hover striped condensed>
        <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Amount</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {nonroutine.get(today).map((o) =>
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

NonroutineSpend.propTypes = {
  nonroutine: PropTypes.object,
  today: PropTypes.string,
};

export default NonroutineSpend;
