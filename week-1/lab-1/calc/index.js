module.exports.formula = function(val, radius) {

  var perimeter = (2 * 3.1415 * radius);
  var area = (3.1415 * radius * radius);
  var volume = ((4 * 3.1415 * radius * radius * radius)/3);

  if (val == "p" && !isNaN(radius)) {
    var x = "The perimeter of a circle with radius " + radius + " is " + perimeter.toFixed(2);
  }

  if (val == "a" && !isNaN(radius)) {
    var x = "The area of a circle with radius " + radius + " is " + area.toFixed(2);
  }

  if (val == "v" && !isNaN(radius)) {
    var x = "The volume of a circle with radius " + radius + " is " + volume.toFixed(2);
  }

  return x;
}
