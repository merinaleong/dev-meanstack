var http = require("http");

var server = http.createServer(function(req, res) {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h3> " + req.url + " </h3>");
});

server.listen(8888);
