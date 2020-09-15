const { spawn } = require('child_process');

const wc = spawn('wc');

wc.stdout.on('data', (data) => {
    console.log(`Number of files ${data}`);
});

// count data from process 
process.stdin.pipe(wc.stdin)

// echo "hello world" | node spawn02.js
