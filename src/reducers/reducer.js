// reducer.js

import { Map } from 'immutable';
import uuid from 'node-uuid';

// action types
import {  SET_STATE,
          ADD_ROUTINE,
          UPDATE_ROUTINE,
          DELETE_ROUTINE,
          DELETE_ROUTINE_BY_ID
        } from '../actions/actions';

function setState(state, newState) {
    return state.merge(newState);
}

export function addRoutine(state, rObj) {
  const newRoutineList = state.get("routine").push(rObj);
  return state.set("routine", newRoutineList);
}

export function updateRoutine(state, rObj) {
  const rId = rObj['id']; // jshint ignore:line
  const i = state.get("routine").findIndex(x=>x.get("id") === rId);
  const newRoutineList = state.get("routine").set(i, rObj);
  return state.set("routine", newRoutineList);
}

export function deleteRoutine(state, rObj) {
  const rId = rObj['id']; // jshint ignore:line
  const i = state.get("routine").findIndex(x=>x.get("id") === rId);
  const newRoutineList = state.get("routine").delete(i);
  return state.set("routine", newRoutineList);
}

export function deleteRoutineByID(state, rId) {
  const i = state.get("routine").findIndex(x=>x.get("id") === rId);
  const newRoutineList = state.get("routine").delete(i);
  return state.set("routine", newRoutineList);
}

export default function reducer(state = Map(), action) { // jshint ignore:line
    switch (action.type) {
        case SET_STATE:
          return setState(state, action.state);
        case ADD_ROUTINE:
          return addRoutine(state, action.routine);
        case UPDATE_ROUTINE:
          return updateRoutine(state, action.routine);
        case DELETE_ROUTINE:
          return deleteRoutine(state, action.routine);
        case DELETE_ROUTINE_BY_ID:
          return deleteRoutineByID(state, action.routineID);
        default:
          return state;
    }
}
