var msgs = require("./msgs.js");
console.log(msgs.first);
console.log(msgs.message());

var something = require("./something.js");
var s = new something();
console.log(s.foo);
console.log(s.bar);

var logger = require("./logger");
logger.log("HELLLLLLOOOOOO");
