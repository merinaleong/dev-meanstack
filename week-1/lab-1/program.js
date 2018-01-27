// print process.argv
var calc = require("./calc");
var args = process.argv;

if (args[2] == "a" || args[2] == "p" || args[2] == "v") {
  if (!isNaN(args[3])) {
    console.log(calc.formula(args[2], args[3]));
  } else {
    console.log("Invalid parameter, last param is not numeric");
  }
} else {
    console.log("Invalid flag");
}
