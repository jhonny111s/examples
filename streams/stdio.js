// node stdio.js --> write in terminal
// cat pipe.txt | node stdio.js --> read from file
process.stdin.pipe(process.stdout)
