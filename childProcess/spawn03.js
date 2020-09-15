const { spawn } = require('child_process');

const wc = spawn('wc', ['-lwc']);

// receiving data event from terminal
process.stdout.on('data', (data) => {
    // sending data to wc
    wc.stdin.write(data);
    wc.stdin.end();
});

// receiving data event from process
wc.stdout.on('data', (data) => {
    console.log(`Number of files ${data.toString()}`);
    process.exit();
});
