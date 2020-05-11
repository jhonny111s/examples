var fs = require('fs');
var writeStream = fs.createWriteStream('./output');
process.stdin.pipe(writeStream)