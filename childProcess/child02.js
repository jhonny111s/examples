const { spawn } = require('child_process');

const subprocess = spawn(process.argv[0], ['childDefer.js'], {
    //detached: true,
    //stdio: 'ignore'
});


subprocess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

subprocess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

subprocess.unref();