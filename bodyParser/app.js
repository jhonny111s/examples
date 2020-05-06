const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer();
server.on("request", function(req, res) {
    let bodyParser = [];
    /**
    * The 'data' event emits either a Buffer (by default) or a string if setEncoding() was used.
    **/
    req.on('data', (chunck) => {
      console.log(`Received ${chunck.length} bytes of data`, chunck);
      bodyParser.push(chunck);
    })
    /**
    * Emitted when the stream has received an EOF (FIN in TCP terminology).
    * Indicates that no more 'data' events will happen.
    * If the stream is also writable, it may be possible to continue writing.
    **/
    .on('end', () => {
        console.log(`Array of chunks`, bodyParser);
        // Saved body in req.body as string
        req.body = Buffer.concat(bodyParser).toString();
        
        let body = "";
        let status = 200;

        if (req.url === "/" && req.method === "POST") {
            body = req.body;
            status = 200;
        } else {
            const err = new Error("Not found");
            body = err.message;
            status = 404;
        }

        res.statusCode = status;
        res.end(body);
    });
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});