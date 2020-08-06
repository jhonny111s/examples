const crypto = require('crypto');

const hash = crypto.createHash('sha256');

hash.update('mypasswd');
console.log(`SHA256: ${hash.digest('hex')}`);