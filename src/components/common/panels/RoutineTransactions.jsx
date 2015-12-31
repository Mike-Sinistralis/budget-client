/* Routine Transactions Component
  ---------------

*/

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
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

export default RoutineTransactions;
