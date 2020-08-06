const crypto = require('crypto');

const hash = crypto.createHash('md5');

hash.update('mypasswd');
console.log(`MD5: ${hash.digest('hex')}`);