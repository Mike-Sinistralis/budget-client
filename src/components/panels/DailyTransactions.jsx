/* Daily Transactions Component
  ---------------

*/

import React from 'react';
import { Panel } from 'react-bootstrap';

const dailyTransactionsPanel = (
  <Panel>
    Daily Transactions Panel
  </Panel>
);

var DailyTransactions = React.createClass({
  render: function() {
    return dailyTransactionsPanel;
  }
});

module.exports = {
  DailyTransactions: DailyTransactions
};
