let clients = [];
const net = require('net');


const server = net.createServer(function (connection) {
    console.log('Some one connected to server');
    // saved current socket connection
    clients.push(connection);
    connection.name = clients.length;

    // amount of connections
    server.getConnections((error, number) => {
        console.log(`amount: ${number}`);
    });

    // server received data
    connection.on('data', function (data) {
        const message = data.toString().trim();
        console.log(`client${connection.name}: ${message}`);

        if (message === 'bye') {
            // send to everybody
            clients.forEach((con) => {
                con.write(`Broadcasting ${message}\n`);
            });
        }
        else {
            // answered to client
            connection.write(`server: ${message}\n`);
        }
    });

    connection.on('end', function () {
        // removed client disconected
        const index = clients.indexOf(connection);
        clients.splice(index, 1);
        console.log('client disconected', clients.length);
    });

    // server send data
    connection.write('Welcome client!\r\n');
    //connection.pipe(connection);
}).on('error', (err) => {
    // Handle errors here.
    throw err;
});

server.listen(8080, function () {
    console.log('server is listening');
});
