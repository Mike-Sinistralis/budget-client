import _ from "underscore";
import { store, state } from "../src/store";
import { mapAllStateToProps as mapAll } from "../src/utils/mapStateToProps";
import { createCreditR, createCreditNR, createDebitNR } from "../src/utils/ExampleDataSets";
import * as reducers from "../src/reducers/reducer";
import { logger } from "../src/utils/utils";

const r = mapAll(state);
const newR = createCreditR("2016-01-13");
const newR_ID = newR.get("id");

function routineToSeqTypes(){
console.log("Indexed:\n " + r.routine.toIndexedSeq());
console.log("Keyed:\n " + r.routine.toKeyedSeq());
}

/* Routine Reducer Functions */
function routineAddNew(d){
  console.log("New Routine: " + newR);
  console.log("Routine Count: " + r.routine.count());
  console.log("Routine Count + New: " + r.routine.push(newR).count());
}

function routineUpdate(){
  const id0 = r.routine.get(0).get('id');
  const index = r.routine.findIndex(x=>x.get("id") === id0);
  const newRoutine = r.routine.get(index).set("name", "Changed!");
  logger("Index (foundO)", index);
  logger("New Routine Obj", newRoutine);
}

function routineDelete(){
  const id0 = r.routine.get(0).get('id');
  const new_routine = r.routine.filterNot(x=>x.get("id") === id0);
  logger("Routine", r.routine);
  logger("Routine[0]", r.routine.get(0));
  logger("Routine[0]s id",id0);
  logger("New Routine (deleted 0)", new_routine);
}

function checkAddRoutine(){
  const newState = reducers.addRoutine(state, newR);
  logger("New State", newState);
  logger("Old State - Routine - Count", state.get('routine').count());
  logger("New State - Routine - Count", newState.get('routine').count());
  logger("newState === state", newState === state);
}

function checkUpdateRoutine(){
  const id0 = newR.get("id");
  const newState = reducers.updateRoutine(state, newR);
  const index = newState.get("routine").findIndex(x=>x.get("id") === id0);
  logger("[Update] New Routine Object", newR);
  logger("[Update] New State", newState);
  logger("[Update] New Routine State", newState.get("routine"));
  logger("[Update] New Routine Obj in State", newState.get("routine").get(index));
  logger("[Update] New Obj in New State?", newR === newState.get("routine").get(index));
}

function checkDeleteRoutine(){
  const delR = state.get("routine").get(0);
  const newState = reducers.deleteRoutine(state, delR);
  logger("[Delete] To Delete - id", delR.get("id"));
  logger("[Delete] New State - Routine", newState.get("routine"));
  logger("[Delete] Old State - Routine - Count", state.get('routine').count());
  logger("[Delete] New State - Routine - Count", newState.get('routine').count());
  logger("[Delete] newState === state", newState === state);
}

function checkDeleteRoutineByID(){
  const delR = state.get("routine").get(0).get('id');
  const newState = reducers.deleteRoutine(state, delR);
  logger("[Delete] To Delete - id", delR);
  logger("[Delete] New State - Routine", newState.get("routine"));
  logger("[Delete] Old State - Routine - Count", state.get('routine').count());
  logger("[Delete] New State - Routine - Count", newState.get('routine').count());
  logger("[Delete] newState === state", newState === state);
}

/* Function Calls */
checkDeleteRoutineByID();
