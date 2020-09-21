const assert = require('assert');

const {
    Worker, MessageChannel, MessagePort, isMainThread, parentPort
} = require('worker_threads');

if (isMainThread) {
    const worker = new Worker(__filename);
    const worker2 = new Worker(__filename);

    // create subchannels to facilitate separation of concerns
    const { port1, port2 } = new MessageChannel();

    // can communicate between workers
    worker.postMessage({ port: port1, id: worker.threadId }, [port1]);
    worker2.postMessage({ port: port2, id: worker2.threadId }, [port2]);


} else {
    parentPort.once('message', (value) => {
        const id = value.id;
        value.port.postMessage(`the worker ${id} is sending this`);

        value.port.on('message', (value) => {
            console.log(`worker ${id} received:`, value);
        });
    });
}