var http = require("http");
var calc = require("./calc");

var server = http.createServer(function(req, res) {
  var str = req.url;
  var arr = str.split("/");
  if (arr[1] == "a" || arr[1] == "p" || arr[1] == "v") {
    if (!isNaN(arr[2])) {
      calc.formula(arr[1], arr[2]);
    } else {
      console.log("Invalid parameter, last param is not numeric");
    }
  } else {
      console.log("Invalid flag");
  }
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h3> " + req.url + " </h3>");
});

server.listen(3003);
