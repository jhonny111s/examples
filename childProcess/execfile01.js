const { execFile } = require('child_process');

// First argument is a path to an executable file
const child = execFile('node', ['childDefer.js'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});