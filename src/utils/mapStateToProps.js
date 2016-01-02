var moment = require('moment');
var bM = require('./budgetMath');
var utils = require('./utils');
var dateFormat = utils.dateFormat;

function mapAllStateToProps(state) {
  var d = moment().format(dateFormat.daily);
  return {
    user: state.get('user'),
    name: state.get('name'),
    description: state.get('description'),
    sums: state.get('sums'),
    routine: state.get('routine'),
    nonroutine: state.get('nonroutine'),
    routineToday: bM.routineDaily(state.get('routine').toJS(), d) || 0,
    nonroutineToday: bM.nonroutineDaily(state.get('nonroutine').toJS(), d) || 0,
    netToday: bM.netDaily(state.get('routine').toJS(), state.get('nonroutine').toJS(), d) || 0
  };
}

module.exports = {
  mapAllStateToProps: mapAllStateToProps
};
