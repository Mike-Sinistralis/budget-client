import React from 'react';
import { createDevTools } from 'redux-devtools';
import FilterMonitor from 'redux-devtools-filter-actions';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const DevTools = createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-w"
    defaultIsVisible={false}
  >
    <FilterMonitor blacklist={['EFFECT_TRIGGERED', 'EFFECT_RESOLVED']}>
      <LogMonitor />
    </FilterMonitor>
  </DockMonitor>
);

export default DevTools;
