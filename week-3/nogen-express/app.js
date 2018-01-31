var http = require("http");
var express = require("express");

var app = express();
//app.set("view engine", "jade");
var ejsEngine = require("ejs-locals");
app.engine("ejs", ejsEngine);
app.set("view engine", "ejs");

var port = 3006;

app.get("/",(req, res) => {
    //res.send("<html><body><h1>EXPRESS</h1></body></html>");
    //res.render("jade/index", {title: "Express & Jade"});
    res.render("ejs/index", {title: "Express and EJS"});
});

var server = http.createServer(app);

server.listen(port, () => {
    console.log("Server started and listening on port " + port + ".");
});
