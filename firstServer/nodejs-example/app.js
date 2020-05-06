const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

/** Another way to create the server */
// const server = http.createServer();
// server.on("request", function(req, res) {
//   // same code as below
// });

const server = http.createServer((req, res) => {
  let body = "";
  let status = 200;
  let headers = {
    "Content-Length": Buffer.byteLength(body),
    "Content-Type": "text/plain"
  };

  if (req.url === "/" && req.method === "GET") {
    body = "hello world";
    status = 200;
  } else {
    const err = new Error("Not found");
    body = err.message;
    status = 404;
  }

  /** simplified way to add status and multiple headers */
  //res.writeHead(status, headers);

  res.statusCode = status;
  res.setHeader("Content-Type", "text/plain");
  res.end(body);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
