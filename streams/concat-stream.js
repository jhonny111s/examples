var concat = require('concat-stream');
var http = require('http');

const hostname = "127.0.0.1";
const port = 3000;

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(concat(function (body) {
            res.end(body.toString().toUpperCase());
        }));
    }
    else res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});