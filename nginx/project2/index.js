const http = require('http');

const port = 3002;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('APP 2');
});

server.listen(port, () => {
  console.log(`El servidor se está ejecutando en el puerto ${port}/`);
});