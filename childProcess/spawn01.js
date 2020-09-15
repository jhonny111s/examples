const { spawn } = require('child_process');

const child = spawn('find', ['.', '-type', 'f']);

// generating data
child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

// generate an error
child.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});

// receiving data
child.stdin.on('data', (data) => {
    console.log(`stdin: ${data}`);
});

child.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
});

child.on('exit', (code) => {
    console.log(`child process exited with code ${code}`);
});

