/* Sample data set.
  ---------------
  Note: Using non-ES6 for ease of importing.
*/
var immutable = require('immutable');
var moment = require('moment');
var utils = require('./utils');
var uuid = require('node-uuid');
var faker = require('faker');
var dateFormat = utils.dateFormat;
var d = moment().format(dateFormat.daily);

/* FAKER PROFILE - Seeding new values */
var profile = faker.helpers.createCard();

/* USER OBJECT - Skeleton for user object */
var user = {
  id: uuid.v4(),
  name: profile.name,
  firstName: profile.name.split(" ")[0],
  lastName:  profile.name.split(" ")[1],
  username: profile.username,
  email: profile.email,
  address: profile.address,
  phone: profile.phone,
  website: profile.website,
  company: profile.company,
  imageUrl: faker.image.imageUrl(),
  isAuthenticated: true,
  isLoggedIn: true
};

/* ERROR OBJECT - Skeleton for error object */
var errors = {

};

/* BUDGET OBJECT - Skeleton for budget object for use with budget1Day */
var budget1Day = "2015-11-14";
var budget1 = {
    "user" : user.name,
    "user_id" : user.id,
    "name" : user.firstName + " 's Budget",
    "description" : "This is " + user.firstName + "'s test budget",
    "routine" : [
      // Randomly generated via createRoutine
    ],
    "nonroutine" : {
      //Randomly generated via createNonRoutine
    }
};


/* Helper functions for creating transactions */
function createCreditR(d) {
  const id = uuid.v4();
  const t  = faker.helpers.createTransaction();
  return  immutable.Map({
            "id" : id,
            "name": t.business,
            "description": t.name,
            "type": t.type,
            "active": true,
            "createdOn": moment(d),
            "startOn": d,
            "endOn": moment(d).add(1,'Y'),
            "duration": "1 Year",
            "amount": Number(t.amount),
            "frequency": 2,
            "frequencyDescription": "2x Month: 2*amount / # days in month",
            "accounting": "credit"
          });
}

function createRoutine(d) {
  const id = uuid.v4();
  const t  = faker.helpers.createTransaction();
  return  immutable.Map({
            "id" : id,
            "name": t.business,
            "description": t.name,
            "type": t.type,
            "active": true,
            "createdOn": moment(d),
            "startOn": d,
            "endOn": moment(d).add(1,'Y'),
            "duration": "1 Year",
            "amount": Number(t.amount),
            "frequency": Math.floor((Math.random() * 4)+1),
            "frequencyDescription": "2x Month: 2*amount / # days in month",
            "accounting": "credit"
          });
}

function createNonRoutine(d) {
  const id = uuid.v4();
  const t  = faker.helpers.createTransaction();
  let amount = Math.floor((Math.random() * 100));
  if (amount % 2 === 0) {amount = amount * -1;}
  return  {
            "id" : id,
            "name": t.business,
            "description": t.name,
            "type": t.type,
            "active": true,
            "createdOn": moment(d),
            "startOn": d,
            "amount": Number(t.amount),
            "accounting": "debit"
          };
}

/* Generate random transactions */
budget1.nonroutine[d] = [];
budget1.nonroutine[d].push(createNonRoutine(d));
budget1.routine.push(createRoutine(d));

for (let i = 0; i < Math.floor(Math.random()*15+1); i++) {
    budget1.nonroutine[d].push(createNonRoutine(d));
}

for (let i = 0; i < Math.floor(Math.random()*10+1); i++) {
    budget1.routine.push(createRoutine(d));
}

/* OUTPUT: EXAMPLE STORE OBJECT */
var exampleStore = {
  user: user,
  errors: errors,
  budget: budget1
};

console.log("New exampleStore created.");

module.exports = {
  budget1: budget1,
  budget1Day: budget1Day,
  createRoutine: createRoutine,
  createNonRoutine: createNonRoutine,
  exampleStore: exampleStore
};
