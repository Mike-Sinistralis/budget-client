/* Sample data set.
  ---------------
  Note: Using non-ES6 for ease of importing.
*/
var moment = require('moment');
var utils = require('./utils');
var dateFormat = utils.dateFormat;
var d = moment().format(dateFormat.daily);

/* budget1 - Use for testing with budget1Day */
var budget1Day = "2015-11-14";
var budget1 = {
    "user" : "barric.reed",
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
            "name": "Rent",
            "description": "2x month pay from Accenture",
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
            "name": "Rent",
            "description": "2x month pay from Accenture",
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

function createDebitNR(d) {
  return  {
            "name": "RandomlyGenerated",
            "description": "Starbucks",
            "type": "Coffee",
            "active": true,
            "createdOn": moment(d),
            "startOn": d,
            "amount": -1*Math.floor((Math.random() * 10) + 1),
            "accounting": "debit"
          };
}

function createCreditNR(d) {
  return  {
            "name": "RandomlyGenerated",
            "description": "Starbucks",
            "type": "Coffee",
            "active": true,
            "createdOn": moment(d),
            "startOn": d,
            "amount": Math.floor((Math.random() * 10) + 1),
            "accounting": "credit"
          };
}

budget1.nonroutine[d] = [createDebitNR(d), createCreditNR(d)];
console.log(budget1.nonroutine[d]);

module.exports = {
  budget1: budget1,
  budget1Day: budget1Day
};
