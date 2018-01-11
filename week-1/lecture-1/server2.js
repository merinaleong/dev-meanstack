var http = require("http");
var fs = require("fs");

var port = 8888;
var hostname = "127.0.0.1";

fs.readFile("index.html", (err, html) => {
  if (err) throw err;
  var server = http.createServer(function(req, res) {
    //console.log(req.url);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(html);
    res.end();
  });

  server.listen(port, hostname, () => {
    console.log("Server started on port " + port);
  });
});
