var http = require("http");
var calc = require("./calc");

var port = 7009;

var server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  var arr = req.url.split("/");
  if (arr[1] != "favicon.ico"){
    res.write(calc.formula(arr[1], parseInt(arr[2])));
  }
  res.end();
}).listen(port);
