const io = require('socket.io')();

io.on('connection', client => {
  console.log(client);
  const clientId =  client.conn.id;
  client.emit("messageClient", "Welcome");

  client.on('messageServer', data => {
    const message = data.toString().trim();

    if (message === 'bye') {
      client.broadcast.emit("event", 'Bye everybody');
    }
    else {
      console.log(`client${clientId}: ${message}`);
    }
    
  })
 });

io.on('event', (data) => {
  console.log(`Generic event: ${data}`);
});

io.listen(8080);