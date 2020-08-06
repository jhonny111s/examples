const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const password = 'mypasswd';  // must be variable env

// The salt should be as unique as possible.
// It is recommended that a salt is random and at least 16 bytes long
const salt = crypto.randomBytes(32);

// Scrypt is a password-based key derivation function that is designed to be expensive computationally
// and memory-wise in order to make brute-force attacks unrewarding
const key = crypto.scryptSync(password, salt, 32);
const iv = crypto.randomBytes(16);


function encrypt(plainData, algorithm, key, iv) {
    try {
        const cipher = crypto.createCipheriv(algorithm, key, iv);
        let encrypted = cipher.update(plainData, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;  
    } catch (error) {
        return new Error('wrong encrypt')
    }

}

function decrypt(cipherData, algorithm, key, iv) {
    try {
        const decipher = crypto.createDecipheriv(algorithm, key, iv);
        let decrypt = decipher.update(cipherData, 'hex', 'utf8');
        decrypt = decipher.final('utf8');
        return decrypt;
    } catch (error) {
        return new Error('wrong decrypt');
    }
    
}


// test
let creditCard = '111-222-333';
const encryptCreditCard = encrypt(creditCard, algorithm, key, iv);
console.log(`Cipheriv: ${encryptCreditCard}`);

const decryptCreditCard = decrypt(encryptCreditCard, algorithm, key, iv);
console.log(`Decipheriv: ${decryptCreditCard}`);

