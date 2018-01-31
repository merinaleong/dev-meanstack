var http = require("http");
var express = require("express");
var countries = require("./ten_most_populated_countries.json");
var capitals = require("./canada_capitals.json");

var app = express();
app.set('views', '/Users/merinaleong/Documents/Development/dev-meanstack/week-3/lab3' + '/views');
app.set('view engine', 'jade');

var port = 3034;

app.get("/",(req, res) => {
    res.render("jade/index", {title: "View JSON Feeds"});
});

app.get("/api/countries", (req, res) => {
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(JSON.stringify(countries));
});

app.get("/api/capitals", (req, res) => {
    res.render("jade/mytable", {capitals: capitals});
});

var server = http.createServer(app);

server.listen(port, () => {
    console.log("Server started and listening on port " + port + ".");
});
