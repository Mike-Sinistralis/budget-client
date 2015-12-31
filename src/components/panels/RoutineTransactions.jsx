/* Routine Transactions Component
  ---------------

*/

import React from 'react';
import { Panel } from 'react-bootstrap';

const routineTransactionsPanel = (
  <Panel>
    Routine Transactions Panel
  </Panel>
);

var RoutineTransactions = React.createClass({
  render: function() {
    return routineTransactionsPanel;
  }
});

module.exports = {
  RoutineTransactions: RoutineTransactions
};
