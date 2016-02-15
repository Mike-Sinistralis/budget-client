/* reducer.js
  -----------
  state = {
    user:
    budget:
    errors:
  }
*/

import { immutableMap } from 'immutable';

import { exampleStore } from '../utils/ExampleDataSets';
import {
  SET_STATE,
  // User Object Actions
  UPDATE_USER,
  LOGOUT_USER,
  LOGIN_USER,
  // Budget Object Actions
  ADD_ROUTINE,
  UPDATE_ROUTINE,
  DELETE_ROUTINE,
  DELETE_ROUTINE_BY_ID,
} from '../actions/actions';

// Input: Full state object
function setState(state, newState) {
  return state.merge(newState);
}

// Returns budget object
export function addRoutine(state, routineObj) {
  // const newRoutineList = state.get('routine').push(rObj);
  return state.set('routine', state.get('routine').push(routineObj));
}

// Returns budget object
export function updateRoutine(state, routineObj) {
  const routineId = routineObj.get('id');
  const i = state.get('routine').findIndex(x => x.get('id') === routineId);
  // const newRoutineList = state.get('routine').set(i, rObj);
  return state.set('routine', state.get('routine').set(i, routineObj));
}

// Returns budget object
export function deleteRoutine(state, routineObj) {
  const routineId = routineObj.get('id');
  const i = state.get('routine').findIndex(x => x.get('id') === routineId);
  // const newRoutineList = state.get('routine').delete(i);
  return state.set('routine', state.get('routine').delete(i));
}

// Returns budget object
export function deleteRoutineByID(state, routineId) {
  const i = state.get('routine').findIndex(x => x.get('id') === routineId);
  // const newRoutineList = state.get('routine').delete(i);
  return state.set('routine', state.get('routine').delete(i));
}

export default function reducer(state = exampleStore, action) {
  switch (action.type) {
    // General Reducers
    case SET_STATE:
      return setState(state, action.state);
    // User Object Reducers
    case LOGOUT_USER:
      return state.set('user', setState(state.get('user'), immutableMap({
        isAuthenticated: false,
        isLoggedIn: false,
      })));
    case UPDATE_USER:
      return state.set('user', setState(state.get('user'), action.state));
    case LOGIN_USER:
      return state.set('user', immutableMap(action.user));
    // Budget Reducers
    case ADD_ROUTINE:
      return state.set('budget', addRoutine(state, action.routine));
    case UPDATE_ROUTINE:
      return state.set('budget', updateRoutine(state, action.routine));
    case DELETE_ROUTINE:
      return state.set('budget', deleteRoutine(state, action.routine));
    case DELETE_ROUTINE_BY_ID:
      return state.set('budget', deleteRoutineByID(state, action.routineID));
    default:
      return state;
  }
}
