const EventEmitter = require('events');

class EmailEvent extends EventEmitter { }

const myEmitter = new EmailEvent();

myEmitter.on('sendEmail', (data) => {
    // 3 second delay
    setTimeout(() => {
        console.log('sended email!', data);
    }, 3000);

});

module.exports = { "sendEmitter": myEmitter }

