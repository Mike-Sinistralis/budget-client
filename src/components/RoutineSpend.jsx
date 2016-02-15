/* Routine Transactions Component
  ---------------

    To Dos:
      - Remove getDailyRate function call and put into store object
*/

import React from 'react';
import { Panel, Table, Glyphicon } from 'react-bootstrap';
import { getDailyRate } from '../utils/utils';
import { getDollarColor, getAmountFormat } from '../utils/css';

const panelTitle = (
  <div>
    <Glyphicon glyph="wrench"><span className="span-header"> Everyday</span></Glyphicon>
    <Glyphicon glyph="plus" className="add-new-item-right" />
  </div>
);

function RoutineSpend({ routine, today }) {
  return (
    <Panel header={panelTitle}>
      <Table hover striped condensed>
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
        {routine.map((transaction) =>
          <tr key={transaction.get('id')}>
            <td>{transaction.get('name')}</td>
            <td>{transaction.get('description')}</td>
            <td style={getDollarColor(transaction.get('amount'))}>
              ${getAmountFormat(transaction.get('amount'))}
            </td>
            <td style={getDollarColor(transaction.get('amount'))}>
              ${getAmountFormat(getDailyRate(
                transaction.get('amount'),
                transaction.get('frequency'),
                today
              ))}
            </td>
            <td>{transaction.get('frequency')}</td>
            <td>{transaction.get('active') ? 'Yes' : 'No'}</td>
            <td>{transaction.get('startOn')}</td>
            <td>{transaction.get('endOn').format('YYYY-MM-DD')}</td>
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

export default RoutineSpend;
