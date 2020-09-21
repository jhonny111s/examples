const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
  const worker = new Worker(__filename);
  worker.once('message', (message) => {
    console.log(`worker-${worker.threadId} send: ${message}`);  // Prints 'Hello, world!'.
  });

  // main process sending message to thread
  worker.postMessage('Hello, world!');
} else {
  // When a message from the parent thread is received, send it back:
  parentPort.once('message', (message) => {
      console.log(`main send: ${message}`);
    parentPort.postMessage(message);
  });
}