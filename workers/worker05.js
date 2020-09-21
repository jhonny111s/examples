const { Worker, isMainThread } = require('worker_threads');

const workerAmount = 3;
const fibNumbers = [5, 45, 45, 10, 10, 30];
const workers = [];

if (isMainThread) {

  // creating workers
  for (let index = 0; index < workerAmount; index++) {
    workers.push({
      isBusy: false,
      worker: new Worker('./workerFib.js')
    })
  }

  // attaching events
  workers.forEach((worker, index) => {
    const thread = worker.worker;
    thread.on('message', (message) => {
      console.log(`worker ${thread.threadId} send: ${message}`);
      workers[index].isBusy = false;
    });
  });

  const k = setInterval(() => {

    let isBlocked = workers.reduce((prev, curr) => {
      return { isBusy: (prev.isBusy || curr.isBusy) };
    })

    if (fibNumbers.length === 0 && isBlocked.isBusy === false) {
      // finished all workers
      workers.forEach(element => {
        element.worker.terminate();
      });
      clearInterval(k);
      return false;
    }

    // workers isn't busy
    function isFree(ele, index, array) {
      if (ele.hasOwnProperty('isBusy'))
        return ele.isBusy === false;
    }

    // index worker free
    let freeWorker = workers.findIndex(isFree);

    // sending data each worker
    if (freeWorker !== -1 && fibNumbers.length !== 0) {
      let number = fibNumbers.pop();
      workers[freeWorker].worker.postMessage(number);
      workers[freeWorker].isBusy = true;
    }
  }, 100);

}