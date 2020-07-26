const http = require('http');

const hostname = 'localhost';
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('APP 1');
});

server.listen(port, () => {
  console.log(`El servidor se está ejecutando en puerto ${port}`);
});