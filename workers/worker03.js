const assert = require('assert');
const {
  Worker, MessageChannel, MessagePort, isMainThread, parentPort
} = require('worker_threads');

if (isMainThread) {
  const worker = new Worker(__filename);

  // create subchannels to facilitate separation of concerns
  const {port1, port2} = new MessageChannel();

  port1.on('message', (value) => {
    console.log('received:', value);
  });

  worker.postMessage({ port: port2 }, [port2]);

} else {
  parentPort.once('message', (value) => {
    assert(value.port instanceof MessagePort);
    value.port.postMessage('the worker is sending this');
    value.port.close();
  });
}