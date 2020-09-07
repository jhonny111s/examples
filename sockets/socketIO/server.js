const io = require('socket.io')();

io.on('connection', client => {
  const clientId = client.id;
  client.emit("messageClient", "Welcome");

  client.on('messageServer', data => {
    const message = data.toString().trim();

    if (message === 'bye') {
      client.broadcast.emit("event", 'Bye everybody');
    }
    else {
      console.log(`client${clientId}: ${message}`);
    }

  });
});


io.listen(8080);