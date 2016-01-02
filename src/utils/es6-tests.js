var budgetMath = require('./budgetMath');
var utils = require('./utils');
var map = require('./mapStateToProps');
var map = map.mapAllStateToProps;

/* Test Data */
var b = require("./ExampleDataSets");
var routine = b.budget1.routine;
var nonroutine = b.budget1.nonroutine;
var bDay = b.budget1Day;

import { state } from "../store";
map(state);
const r = state.get('routine').toJS();
const nr = state.get('nonroutine').toJS();
console.log(nr);
console.log(budgetMath.nonroutineDaily(nr, bDay));
