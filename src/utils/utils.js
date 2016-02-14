/* Maths required to operate on budget objects
  ---------------
  Note: Currently not using ES6 to make imports easier during dev
  1. sumRoutine - Sums
*/

import 'moment-range';
import moment from 'moment';
import { map } from 'lodash';

/* Constants */
const dateFormat = {
  daily: 'YYYY-MM-DD',
  weekly: 'YYYY-WW',
  monthly: 'YYYY-MM',
  yearly: 'YYYY',
};

/* General Helpers */
function validateArg(fnName, arg, argName) {
  if (fnName === undefined || argName === undefined) {
    throw new Error('ERROR: validateArg requires function name and argument name to be specified.');
  }
  if (arg === undefined) {
    throw new Error(`ERROR: fn: ${fnName} | err: ${argName} defined.`);
  }
}

function dateRangeCheck(start, end, day) {
  return moment.range(moment(start), moment(end)).contains(moment(day));
}

function getDailyRate(amount, frequency, day) {
  return (amount * frequency) / moment(day).daysInMonth();
}

function logger(msg, obj) {
  console.log(`${msg}:`, obj);
  console.log('=======================================');
}

/* Mappers for budget objects */

/* mapRoutine
  ---------------
  Returns a list of daily rates summarized for the given day or today if day is not provided.
  input(s):
   | - routine budget (routine)
   | - (optional) day - a day to use for summarizing (# days in month) and comparison to date range
  output(s): array of floats representing daily rates for each routine, active transaction
*/
function mapRoutine(routine, day = moment()) {
  if (routine) {
    return map(routine, (transaction) => {
      if (dateRangeCheck(transaction.startOn, transaction.endOn, day) && transaction.active) {
        return (transaction.amount * transaction.frequency) / moment(day).daysInMonth();
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
   | - a set of transactions for a given day (nonRoutine)
  output(s): array of floats representing daily rates for each nonroutine, active transaction
*/
function mapNonRoutine(nonRoutine) {
  return map(nonRoutine, (transaction) => {
    if (transaction.active) {
      return transaction.amount;
    }
    return 0;
  });
}

/* mapNonRoutineDay
  ---------------
  Summarizes nonroutine transactions for a given date
  input(s):
    | - nonRoutine - an object with keys 'YYYY-MM-DD' containing a list of non-routine transactions
    | - day - day to summarize
  output(s):
    | - values or false - list containing an array of values for the given date
*/
function mapNonRoutineDay(nonRoutine, day) {
  const momentDay = moment(day).format(dateFormat.daily);
  if (nonRoutine[momentDay]) {
    return map(nonRoutine[momentDay], (transaction) => {
      if (transaction.active) {
        return transaction.amount;
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
function mapNonRoutineSet(nonRoutine) {
  return [nonRoutine, nonRoutine];
}

/* mapNonRoutineSet
  ---------------
  Summarizes nonroutine transactions for a given date range
  input(s):
    | - nonRoutine - an object with keys 'YYYY-MM-DD' containing a list of non-routine transactions
    | - start - start date for comparison range
    | - end - end date for comparison range
  output(s):
    | - dates & values - 2-D list containing an array of values and an array of dates that
        have been summarized
*/
function mapNonRoutineRange(nonRoutine, start, end) {
  const dates = nonRoutine + start + end;
  const values = 'something';

  return [[dates], [values]];
}

module.exports = {
  dateFormat,
  validateArg,
  getDailyRate,
  dateRangeCheck,
  mapRoutine,
  mapNonRoutine,
  mapNonRoutineDay,
  mapNonRoutineSet,
  mapNonRoutineRange,
  logger,
};
