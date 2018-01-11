// print process.argv
var calc = require("./calc");
var args = process.argv;
calc.formula(args[2], args[3]);
