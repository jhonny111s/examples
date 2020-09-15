  function fib(n) {
    if (n > 1) {
        return fib(n - 1) + fib(n - 2)
    } else {
        return n;
    }
}
  
  process.on('message', (msg) => {
    console.log("Parent send:" + msg);
    const result = fib(parseInt(msg));
    process.send(result);
  });