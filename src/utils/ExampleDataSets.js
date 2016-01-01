import { List, Map } from 'immutable';
import moment from 'moment';

var dateFormat = "YYYY-MM-D";

const budget1 = Map({
    "user" : "barric.reed",
    "name" : "Barric's Budget",
    "description" : "This is Barric's test budget",
    "routine" : List.of(
        Map({
            "name": "Accenture Paycheck",
            "description": "2x month pay from Accenture",
            "type": "Salary",
            "createdOn": moment(),
            "startOn": moment().format(dateFormat),
            "endOn": moment().add(1,'M'),
            "duration": "One month, placeholder",
            "amount": 4600.0,
            "frequency": 2,
            "frequencyDescription": "Twice a month -> 2*amount / # days in month",
            "accounting": "credit"
        }),
        Map({
            "name": "Rent",
            "description": "2x month pay from Accenture",
            "type": "Rent",
            "createdOn": moment(),
            "startOn": moment().format(dateFormat),
            "endOn": moment().add(1,'Y'),
            "duration": "One year, placeholder",
            "amount": -1350.0,
            "frequency": 1,
            "frequencyDescription": "Once a month -> amount / # days in month",
            "accounting": "debit"
        })
    ),
    "non-routine" : List.of(
        Map({
            "name": "Coffee",
            "description": "Starbucks",
            "type": "Coffee",
            "createdOn": moment(),
            "startOn": moment().format(dateFormat),
            "amount": -2.50,
            "accounting": "debit"
        }),
        Map({
            "name": "Lottery",
            "description": "Scratcher",
            "type": "Lottery",
            "createdOn": moment(),
            "startOn": moment().format(dateFormat),
            "amount": 5.0,
            "accounting": "credit"
        })
    )
});

module.exports = {
  budget1: budget1
};
