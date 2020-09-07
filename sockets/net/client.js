const net = require('net');
const process = require('process');

// connection to server
const client = net.connect({port: 8080}, function() {
   console.log('client connected to server');
});

// received data from server
client.on('data', function(data) {
   console.log(data.toString());
});

client.on('end', function() { 
    console.log('server disconnected');
});

// reading console text
process.stdin.on('data', function(send){
    const message = send.toString().trim();
    if (message === 'exit') {
        client.end();
    }
    else {
        client.write(send);
    }
});

// we can do de same with 'telnet localhost 8080'