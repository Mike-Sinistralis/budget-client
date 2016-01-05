/* Maths required to operate on budget objects
  ---------------
  Note: Currently not using ES6 to make imports easier during dev
  1. sumRoutine - Sums
*/

var _ = require('underscore');
var moment = require('moment');
require('moment-range');

/* Constants */
var dateFormat = {
  "daily" : "YYYY-MM-DD",
  "weekly" : "YYYY-WW",
  "monthly" : "YYYY-MM",
  "yearly" : "YYYY"
};

/* General Helpers */
function validateArg(fnName, arg, argName){
  if (fnName === undefined || argName === undefined) {
    throw "ERROR: validateArg requires function name and argument name to be specified.";
  }
  if (arg === undefined) {
    throw "ERROR: fn: " + fnName + " | err: " + argName + "defined.";
  }
}

function dateRangeCheck(s,e,d) {
  return moment.range(moment(s), moment(e)).contains(moment(d));
}

function getDailyRate(amount,frequency,day) {
  return (amount * frequency) / moment(day).daysInMonth();
}

/* Mappers for budget objects */

/* mapRoutine
  ---------------
  Returns a list of daily rates summarized for the given day or today if day is not provided.
  input(s):
   | - routine budget (r)
   | - (optional) d - a day to use for summarizing (# days in month) and comparison to date range
  output(s): array of floats representing daily rates for each routine, active transaction
*/
function mapRoutine(r,d){
  d = d || moment();
  if (r) {
    return _.map(r, function(n) {
      if (dateRangeCheck(n.startOn, n.endOn, d) && n.active) {
        return (n.amount * n.frequency) / moment(d).daysInMonth();
      }
      return 0;
    });
  }
  return false;
}

/* mapNonRoutineDay
  ---------------
  Returns a list of amounts
  input(s):
   | - a set of transactions for a given day (nr)
  output(s): array of floats representing daily rates for each nonroutine, active transaction
*/
function mapNonRoutine(nr){
  return _.map(nr, function(n) {
    if (n.active) {
      return n.amount;
    }
    return 0;
  });
}

/* mapNonRoutineDay
  ---------------
  Summarizes nonroutine transactions for a given date
  input(s):
    | - nr - an object with keys "YYYY-MM-DD" containing a list of non-routine transactions
    | - d - day to summarize
  output(s):
    | - values or false - list containing an array of values for the given date
*/
function mapNonRoutineDay(nr,d){
  d = moment(d).format(dateFormat.daily);
  if (nr[d]) {
    return _.map(nr[d], function(n) {
      if (n.active) {
        return n.amount;
      }
      return 0;
    });
  }
  return false;
}

/* mapNonRoutineSet
  ---------------
  Returns a 2-D list containing an array of values and an array of dates that have been summarized
  input(s):
  output(s):
*/
function mapNonRoutineSet(nr){
  return [nr, nr];
}

/* mapNonRoutineSet
  ---------------
  Summarizes nonroutine transactions for a given date range
  input(s):
    | - nr - an object with keys "YYYY-MM-DD" containing a list of non-routine transactions
    | - s - start date for comparison range
    | - e - end date for comparison range
  output(s):
    | - dates & values - 2-D list containing an array of values and an array of dates that have been summarized
*/
function mapNonRoutineRange(nr,s,e){
  return [[dates], [values]];
}

module.exports = {
  dateFormat: dateFormat,
  validateArg: validateArg,
  getDailyRate: getDailyRate,
  dateRangeCheck: dateRangeCheck,
  mapRoutine: mapRoutine,
  mapNonRoutine: mapNonRoutine,
  mapNonRoutineDay: mapNonRoutineDay
};
