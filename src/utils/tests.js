var budgetMath = require('./budgetMath');
var utils = require('./utils');

/* Test Data */
var b = require("./ExampleDataSets");
var routine = b.budget1.routine;
var nonroutine = b.budget1.nonroutine;
var bDay = b.budget1Day;

function routineTests(r,d) {
  console.log("utils.mapRoutine: " + utils.mapRoutine(r,d));
  console.log("budgetMath.routineDaily: " + budgetMath.routineDaily(r,d));
}

function nonroutineTests(r,d) {
  console.log("utils.mapNonRoutineDay: " + utils.mapNonRoutineDay(r,d));
  console.log("budgetMath.nonroutineDaily: " + budgetMath.nonroutineDaily(r,d));
}

routineTests(routine, bDay);
nonroutineTests(nonroutine, bDay);
console.log("budgetMath.netDaily: " + budgetMath.netDaily(routine, nonroutine, bDay));

//console.log("mapRoutine with budget1 and budget1Day = 2015-11-14:\n" + mapRoutine(routine, bDay));
//console.log("mapNonRoutine: " + mapNonRoutine(nonroutine['2015-11-14']));
//console.log("mapNonRoutineDay("+ bDay +"): " + mapNonRoutineDay(nonroutine, bDay));
//console.log("mapNonRoutineDay('2017-11-14'): " + mapNonRoutineDay(nonroutine, '2017-11-14'));
