console.log(`Main Process: ${process.pid}`);
const { spawn } = require('child_process');
const ls = spawn('node', ['childDefer.js']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
  clearInterval(interval);
});

ls.on('error', (err) => {
  console.error('Failed to start subprocess.');
});

const interval = setInterval(() => {
    for (let index = 0; index < 100; index++) {
        //console.log(index);
    }
    console.log("ready");    
}, 5);
