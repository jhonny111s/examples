const crypto = require('crypto');

const hash = crypto.createHmac("sha256", "password1");

hash.update("mypasswd")
console.log(`HMAC: ${hash.digest("hex")}`);