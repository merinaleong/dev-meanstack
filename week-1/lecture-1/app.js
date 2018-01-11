// Third file created to modules from messages.js

var messages = require('./messages');

var person = require('./person');
console.log(messages.first);
console.log(messages.message());

var person = new person();
console.log(person.firstName + " " + person.lastName);

var logger = require("./logger");
logger.log("Hello!");
