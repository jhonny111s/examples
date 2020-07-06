const os = require('os');

console.log('UserInfo:', os.userInfo());
console.log('version:', os.version());
console.log('cpus:', os.cpus());
console.log('architecture:', os.arch());
console.log('totalmem:', os.totalmem());
console.log('freemem:', os.freemem());
console.log('homedir:', os.homedir());
console.log('constants:', os.constants);