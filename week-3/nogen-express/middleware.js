var express = require('express');
var app = express();
var port = 3003;

//app.get("/", log, hello);
app.use(log);
app.get(hello);


function log (req, res, next) {
    console.log(new Date(), req.method, req.url);
    next();
};

function hello(req, res, next) {
    res.write('Hello <br />' + 'World');
    res.end();
    next();
};

app.listen(port, function(err, res) {
    if (err) {
        console.log("Server Error!")
    } else {
        console.log("Server started and listening on port:  " + port);
    }
});
