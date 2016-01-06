/* Sample data set.
  ---------------
  Note: Using non-ES6 for ease of importing.
*/
var immutable = require('immutable');
var moment = require('moment');
var utils = require('./utils');
var uuid = require('node-uuid');
var dateFormat = utils.dateFormat;
var d = moment().format(dateFormat.daily);

/* budget1 - Use for testing with budget1Day */
var budget1Day = "2015-11-14";
var budget1 = {
    "user" : "barric.reed",
    "id" : uuid.v4(),
    "name" : "Barric's Budget",
    "description" : "This is Barric's test budget",
    "routine" : [
      // Randomly generated via createRoutine
    ],
    "nonroutine" : {
      //Randomly generated via createNonRoutine
    }
};

function createCreditR(d) {
  const id = uuid.v4();
  return  immutable.Map({
            "id" : id,
            "name": "Random - " + id,
            "description": id,
            "type": "Random",
            "active": true,
            "createdOn": moment(d),
            "startOn": d,
            "endOn": moment(d).add(1,'Y'),
            "duration": "1 Year",
            "amount": 4600.0,
            "frequency": 2,
            "frequencyDescription": "2x Month: 2*amount / # days in month",
            "accounting": "credit"
          });
}

function createRoutine(d) {
  const id = uuid.v4();
  let amount = Math.floor((Math.random() * 1000)*Math.random()*3);
  if (amount % 2 === 0) {amount = amount * -1;}
  return  immutable.Map({
            "id" : id,
            "name": "Random - " + id,
            "description": id,
            "type": "Random",
            "active": true,
            "createdOn": moment(d),
            "startOn": d,
            "endOn": moment(d).add(1,'Y'),
            "duration": "1 Year",
            "amount": amount,
            "frequency": Math.floor((Math.random() * 4)+1),
            "frequencyDescription": "2x Month: 2*amount / # days in month",
            "accounting": "credit"
          });
}

function createNonRoutine(d) {
  const id = uuid.v4();
  let amount = Math.floor((Math.random() * 100));
  if (amount % 2 === 0) {amount = amount * -1;}
  return  {
            "id" : id,
            "name": "Random Debit - " + id,
            "description": "Random Debit",
            "type": "Random Debit",
            "active": true,
            "createdOn": moment(d),
            "startOn": d,
            "amount": amount,
            "accounting": "debit"
          };
}

budget1.nonroutine[d] = [];
budget1.nonroutine[d].push(createNonRoutine(d));
budget1.routine.push(createRoutine(d));

for (let i = 0; i < Math.floor(Math.random()*15+1); i++) {
    budget1.nonroutine[d].push(createNonRoutine(d));
}

for (let i = 0; i < Math.floor(Math.random()*10+1); i++) {
    budget1.routine.push(createRoutine(d));
}

module.exports = {
  budget1: budget1,
  budget1Day: budget1Day,
  createRoutine: createRoutine,
  createNonRoutine: createNonRoutine
};
