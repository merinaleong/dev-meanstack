var http = require('http');
var calc = require('./calc'); 

var port = 3000; 

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
     var n = req.url.split('/'); 
    res.write(calc((n[1]), parseInt(n[2])));
    res.end(); 
}).listen(port); 