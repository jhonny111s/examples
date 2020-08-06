const crypto = require('crypto');

// random salt
const salt = crypto.randomBytes(256).toString('hex');

const hash = crypto.pbkdf2Sync('mypasswd', salt, 100000, 512, 'sha512');

console.log(`pbkdf2: ${hash.toString('hex')}`);