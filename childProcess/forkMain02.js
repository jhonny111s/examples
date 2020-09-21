const http = require('http');
const { fork } = require('child_process');

const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/') {
    const num = '45';
    const compute = fork('forkChild02.js');
    compute.send(num);
    compute.on('message', sum => {
      res.end(`Fibonacci of ${num} is ${sum}`);
    });
  } else {
    res.end('Ok')
  }
});

server.listen(3000);