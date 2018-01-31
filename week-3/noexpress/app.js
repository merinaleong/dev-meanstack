var http = require("http");
var express = require("express");
var app = express();
var port = 3002;

/* Without Express
var server = http.createServer((req, res) => {
  console.log(req.url);
  res.write("<html><body><h1>" + req.url + "</h1></body></html>");
});

*/

app.get("/", (req, res) => {
  res.send("<html><body><h1>" + req.url + "</h1></body></html>");
});

app.get("/api/users", (req, res) => {
  res.set("Content-Type", "application/json");
  res.send({name: "Merina", isDeveloper: true, role: "Admin"});
});

var server = http.createServer(app);

server.listen(port, () => {
  console.log("Server started on listening in on port " + port);
})
