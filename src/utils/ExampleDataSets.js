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
    "sums" : {
      /* Daily Sum
        ---------------
        Key : "YYYY-MM-D"
        Formula : sum(routine) + sum(nonroutine for key)
      */
      "daily" : {
        "2015-11-1"  :  {
          "routine" : 10.00,
          "nonroutine" : 10.00
        },
        "2015-11-2"  :  {
          "routine" : 10.00,
          "nonroutine" : 10.00
        }
      },
      /* Weekly Sum
        ---------------
        Key : "YYYY-WW"
        Formula : sum(daily for YYYY-WW)
      */
      "weekly" : {
        "2015-44"  :  {
          "routine" : 20.00,
          "nonroutine" : 20.00
        }
      },
      /* Monthly Sum
        ---------------
        Key : "YYYY-MM"
        Formula : sum(weekly for YYYY-MM)
      */
      "monthly" : {
        "2015-11" : 40.00,
      },
      /* Yearly Sum
        ---------------
        Key : "YYYY"
        Formula : sum(monthly for YYYY)
      */
      "yearly" : {
        "2015" : 40.00
      },
    },
    "routine" : [
        {
            "id" : uuid.v4(),
            "name": "Accenture Paycheck",
            "description": "2x month pay from Accenture",
            "type": "Salary",
            "active": true,
            "createdOn": moment("2015-11-10"),
            "startOn": "2015-11-10",
            "endOn": moment("2015-11-10").add(4,'M'),
            "duration": "4 months, placeholder",
            "amount": 4600.0,
            "frequency": 2,
            "frequencyDescription": "Twice a month -> 2*amount / # days in month",
            "accounting": "credit"
        },
        {
            "id" : uuid.v4(),
            "name": "Rent",
            "description": "Rent - Brooklyn",
            "type": "Rent",
            "active": true,
            "createdOn": moment("2015-11-10"),
            "startOn": "2015-11-10",
            "endOn": moment("2015-11-10").add(2,'Y'),
            "duration": "Two years, placeholder",
            "amount": -1350.0,
            "frequency": 1,
            "frequencyDescription": "Once a month -> amount / # days in month",
            "accounting": "debit"
        },
        {
            "id" : uuid.v4(),
            "name": "Rent",
            "description": "Rent - Upstate",
            "type": "Rent",
            "active": false,
            "createdOn": moment("2014-11-10"),
            "startOn": "2015-11-10",
            "endOn": moment("2015-11-10").add(1,'Y'),
            "duration": "One year, placeholder",
            "amount": -1250.0,
            "frequency": 1,
            "frequencyDescription": "Once a month -> amount / # days in month",
            "accounting": "debit"
        }
    ],
    "nonroutine" : {
      '2015-11-14' : [
        {
          "id" : uuid.v4(),
          "name": "Coffee",
          "description": "Starbucks",
          "type": "Coffee",
          "active": true,
          "createdOn": moment("2015-11-14"),
          "startOn": "2015-11-14",
          "amount": -2.50,
          "accounting": "debit"
        },
        {
          "id" : uuid.v4(),
          "name": "Lottery",
          "description": "Scratcher",
          "type": "Lottery",
          "active": true,
          "createdOn": moment("2015-11-14"),
          "startOn": "2015-11-14",
          "amount": 5.0,
          "accounting": "credit"
        },
        {
          "id" : uuid.v4(),
          "name": "Coffee",
          "description": "Stauf's",
          "type": "Lottery",
          "active": false,
          "createdOn": moment("2015-11-14"),
          "startOn": "2015-11-14",
          "amount": 5.0,
          "accounting": "credit"
        }
      ]
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

for (let i = 0; i < Math.floor(Math.random()*15); i++) {
    budget1.nonroutine[d].push(createNonRoutine(d));
}

for (let i = 0; i < Math.floor(Math.random()*10); i++) {
    budget1.routine.push(createRoutine(d));
}

module.exports = {
  budget1: budget1,
  budget1Day: budget1Day,
  createRoutine: createRoutine,
  createNonRoutine: createNonRoutine
};
