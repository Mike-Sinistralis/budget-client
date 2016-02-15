/* Daily Spend Component
  ---------------
  Exports two components:
  1. Pure ("dumb") Compoent
  2. Connect ("smart") Component

  To Do
  ---------------
  - Make sure component can handle formatting properly
*/

import React, { PropTypes } from 'react';
import { Panel, Grid, Row, Glyphicon } from 'react-bootstrap';
import { getDollarColor } from '../utils/css';

const panelTitle = (
  <div>
    <Glyphicon glyph="piggy-bank"><span className="span-header"> Summary</span></Glyphicon>
  </div>
);

function DailySpend({ netToday, nonroutineToday, routineToday }) {
  return (
    <Panel header={panelTitle}>
      <Grid fluid >
        <Row>
          <h2>
            Net:
            <font style={getDollarColor(netToday.toFixed(2))}>
              ${netToday.toFixed(2).replace('-', '')}
            </font>
          </h2>
        </Row>
        <Row>
          Today:
          <font style={getDollarColor(nonroutineToday)}>
            ${nonroutineToday.toFixed(2).replace('-', '')}
          </font> |
          Routine:
          <font style={getDollarColor(routineToday)}>
            ${routineToday.toFixed(2).replace('-', '')}
          </font>
        </Row>
      </Grid>
    </Panel>
  );
}

DailySpend.propTypes = {
  netToday: PropTypes.number,
  nonroutineToday: PropTypes.number,
  routineToday: PropTypes.number,
};

export default DailySpend;
