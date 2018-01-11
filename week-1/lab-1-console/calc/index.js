module.exports.formula = function(val, radius) {
  if (val == "p") {
    console.log("The perimeter of a circle with radius " + radius + " is " + (2 * 3.1415 * radius));
  }

  if (val == "a") {
    console.log("The area of a circle with radius " + radius + " is " + (3.1415 * radius * radius));
  }

  if (val == "v") {
    console.log("The volume of a circle with radius " + radius + " is " + ((4 * 3.1415 * radius * radius * radius)/3));
  }
}
