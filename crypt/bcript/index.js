const {generate, compare} = require('./encrypt.js');

const password = 'passwd example';

generate(password).then(hash => {
    console.log(`hash: ${hash}`);
    return compare(password, hash);
}).then(res => {
    console.log(`right pwd: ${res}`);
}).catch(error => {
    console.error(error);
});

