var socket = require('socket.io-client')('http://localhost:8080');
socket.on('connect', function () {
    console.log("client connected");
});

socket.on('disconnect', function () {
    console.log("client disconnected");
});

socket.on('messageClient', data => {
    console.log(`Server: ${data}`);
})

process.stdin.on('data', function (send) {
    const message = send.toString().trim();
    console.log("send: " + message);
    if (message === 'exit') {
        socket.disconnect();
    }
    else {
        socket.emit('messageServer', send);
    }
});