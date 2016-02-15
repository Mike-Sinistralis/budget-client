import moment from 'moment';

import bM from './budgetMath';
import { dateFormat } from './utils';

function mapUserStatetoProps(state) {
  return {
    id: state.get('id'),
    name: state.get('name'),
    firstName: state.get('firstName'),
    lastName: state.get('lastName'),
    username: state.get('username'),
    email: state.get('email'),
    address: state.get('address'),
    phone: state.get('phone'),
    website: state.get('website'),
    company: state.get('company'),
    imageUrl: state.get('imageUrl'),
    isAuthenticated: state.get('isAuthenticated'),
    isLoggedIn: state.get('isLoggedIn'),
  };
}

function mapErrorsStatetoProps() {
  return {
    hasErrors: false,
  };
}

function mapBudgetStateToProps(state) {
  const day = moment().format(dateFormat.daily);
  return {
    today: day,
    user: state.get('user'),
    name: state.get('name'),
    description: state.get('description'),
    sums: state.get('sums'),
    // Routine is a list of objects, non-routine is an object of objects
    routine: state.get('routine'),
    nonroutine: state.get('nonroutine'),
    // Pre-calculated rates. These shouldn't live here
    routineToday: bM.routineDaily(state.get('routine').toJS(), day) || 0,
    nonroutineToday: bM.nonroutineDaily(state.get('nonroutine').toJS(), day) || 0,
    netToday: bM.netDaily(state.get('routine').toJS(), state.get('nonroutine').toJS(), day) || 0,
  };
}

function mapAllStateToProps(state) {
  return {
    user: state.get('user'),
    budget: mapBudgetStateToProps(state.get('budget')),
    errors: mapErrorsStatetoProps(state.get('errors')),
  };
}

module.exports = {
  mapUserStatetoProps,
  mapErrorsStatetoProps,
  mapBudgetStateToProps,
  mapAllStateToProps,
};
