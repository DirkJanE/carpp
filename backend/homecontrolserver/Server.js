let http = require('http');
const sqlite3 = require("sqlite3");
let db = sqlite3.Database('./db/sample.db');

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
    console.log(req.url);

}).listen(8080); 
