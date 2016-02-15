/* Maths required to operate on budget objects
  ---------------
  1. sumRoutine - Sums
*/

import { reduce } from 'lodash';

import { mapRoutine, mapNonRoutineDay } from './utils';

/* Daily Sum Calculations */
function routineDaily(routine, day) {
  return reduce(mapRoutine(routine, day), (m, n) => m + n, 0);
}

function nonroutineDaily(nonRoutine, day) {
  return reduce(mapNonRoutineDay(nonRoutine, day), (m, n) => m + n, 0);
}

function netDaily(routine, nonRoutine, day) {
  return routineDaily(routine, day) + nonroutineDaily(nonRoutine, day);
}

module.exports = {
  routineDaily,
  nonroutineDaily,
  netDaily,
};
