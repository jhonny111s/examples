const express = require('express');
const cluster = require('cluster');
const totalCpus = require('os').cpus().length;

function fib(n) {
    if (n > 1) {
        return fib(n - 1) + fib(n - 2)
    } else {
        return n;
    }
}

if (cluster.isMaster) {
    for (let i = 0; i < totalCpus; i++) {
        // Create a new worker in this case a http server
        cluster.fork();
    }

    for (const id in cluster.workers) {
        cluster.workers[id].on('message', (msg) => {
            console.log(`Worker-${id} said: ${msg} to Master`);
        });

        cluster.workers[id].on('listening', (address) => {
            cluster.workers[id].send("Welcome")
        });
    }

    cluster.on('online', (worker) => {
        console.log(
            `Worker Id is ${worker.id} and the PID is: ${worker.process.pid}`
        );
    });
    cluster.on('exit', (worker) => {
        console.log(
            `Worker Id ${worker.id} with PID ${worker.process.pid} is offline`
        );
    });

    cluster.on('error', (error) => {
        console.log(error);
    });
} else {
    const app = express();
    app.get('/', (req, res) => {
        let number = fib(
            Number.parseInt(req.query.number)
        );
        process.send(number);
        res.send(`<h1>${number}</h1>`);
    });

    app.get('/message', (req, res) => {
        const data = req.query.data;
        process.send(data);
        res.send(data);

    });

    process.on('message', (msg) => {
        console.log(`Master said ${msg} to worker`);
    });


    app.listen(3000, () => console.log('Express server is running on port 3000'));

}