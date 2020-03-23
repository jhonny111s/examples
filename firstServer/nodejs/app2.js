const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  /** Route handle */
  req.routes = {
    get: {},
    post: {},
    put: {}
  };

  req.get = function(path, callback) {
    req.routes.get[path] = callback;
  };

  req.post = function(path, callback) {
    req.routes.post[path] = callback;
  };
  /** End route handle */



  /** Routes initialization */

  req.get("/hola", function(req, res) {
    res.statusCode = 200;
    res.end("Hola mundo");
  });

  req.post("/hola", function(req, res) {
    res.statusCode = 200;
    res.end("debemos darle un manejo al body ya que es un stream");
  });

  req.get("/delete", function(req, res) {
    res.statusCode = 204;
    res.end();
  });

  /** End routes initialization */

  /** Server handle */
  const method = req.method.toLowerCase();
  const url = req.url;

  if (
    req.routes[method] &&
    Object.keys(req.routes[method]).indexOf(url) != -1
  ) {
    console.log("existe la ruta");

    req.routes[method][url](req, res);
  } else {
    console.log("No existe la ruta");
    const err = new Error("Not found");
    res.statusCode = 404;
    res.end(err.message);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});