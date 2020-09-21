const cluster = require('cluster');

if (cluster.isMaster) {
    const worker = cluster.fork();
    worker.send('hi there');

    worker.on('message', (msg) => {
        console.log(`Worker said: ${msg}`);
    });

} else if (cluster.isWorker) {
    process.on('message', (msg) => {
        console.log(`Master said ${msg}`);
        process.send(msg);
    });
}