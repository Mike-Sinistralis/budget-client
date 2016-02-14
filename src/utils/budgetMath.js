/* Maths required to operate on budget objects
  ---------------
  Note: Currently not using ES6 to make imports easier during dev
  1. sumRoutine - Sums
*/

var _ = require('lodash');
var moment = require('moment');
var utils = require('./utils');
var dateFormat = utils.dateFormat;

/* Daily Sum Calculations */
function routineDaily(routine, day){
  return _.reduce(utils.mapRoutine(routine, day), function(m,n) { return m+n; } );
}

function nonroutineDaily(nonroutine, day){
  return _.reduce(utils.mapNonRoutineDay(nonroutine, day), function(m,n) { return m+n; } );
}

function netDaily(r,nr,d){
  return (routineDaily(r,d) || 0) + (nonroutineDaily(nr,d) || 0);
}

module.exports = {
  routineDaily: routineDaily,
  nonroutineDaily: nonroutineDaily,
  netDaily: netDaily
};
