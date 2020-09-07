
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.emit('chat message', "Welcome")

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat message', (msg) => {
    if (msg === 'everybody') {
      // send to everybody include itself
      io.emit('everybody', `${socket.id}: ${msg}`);
      // exclude the client origin
      //socket.broadcast.emit('chat message', `${socket.id}: ${msg}`);
    } else {
      socket.emit('chat message', `server: ${msg}`);
    }
  });
});
