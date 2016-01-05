/* mapStateToProps - Mappers
  ---------------

    To Dos
    ---------------
    - Move logic (routineToday, etc.) into
*/

var moment = require('moment');
var bM = require('./budgetMath');
var utils = require('./utils');
var dateFormat = utils.dateFormat;

function mapAllStateToProps(state) {
  var d = moment().format(dateFormat.daily);
  return {
    today: d,
    user: state.get('user'),
    name: state.get('name'),
    description: state.get('description'),
    sums: state.get('sums'),
    // Routine is a list of objects, non-routine is an object of objects
    routine: state.get('routine'),
    nonroutine: state.get('nonroutine'),
    // Pre-calculated rates. These shouldn't live here
    routineToday: bM.routineDaily(state.get('routine').toJS(), d) || 0,
    nonroutineToday: bM.nonroutineDaily(state.get('nonroutine').toJS(), d) || 0,
    netToday: bM.netDaily(state.get('routine').toJS(), state.get('nonroutine').toJS(), d) || 0,
  };
}

module.exports = {
  mapAllStateToProps: mapAllStateToProps
};
