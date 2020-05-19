const assert = require('assert').strict;
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;


let serverReq, loggerReq;


var myLogger = function (req, res, next) { 
    req.requestTime = Date.now();

    // Podemos hacer cualquier tarea asíncrona
    console.log('LOGGED');
    next();
};

const server = http.createServer((req, res) => {
    serverReq = { ...req };
    // middleware
    myLogger(req, res, function() {
        loggerReq = { ...req };
        console.log(`RequestTime:${Date(req.requestTime)}`);

        // Visualizamos la modificación a req
        assert.deepEqual(serverReq, loggerReq);
        const { headers, method, url } = req;
        let body = http.STATUS_CODES['200'];
        let status = 200;
    
        res.statusCode = status;
        res.end(body);
    })
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});