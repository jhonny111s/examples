const { Worker, isMainThread, parentPort } = require('worker_threads');

function fib(n) {
    if (n > 1) {
        return fib(n - 1) + fib(n - 2)
    } else {
        return n;
    }
}

parentPort.on('message', (message) => {
    console.log("receiving", message);
    const fibo = fib(parseInt(message));
    parentPort.postMessage(`fibonacci of ${message} is ${fibo}`);
  });