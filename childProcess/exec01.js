const { exec } = require('child_process');

// First argument is a command
exec('ls -lh', (error, stdout, stderr) => {
    // cannot run 
  if (error) {
    console.error(`error: ${error.message}`);
    return;
  }

  // run but with error
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  console.log(`stdout:\n${stdout}`);
});