//const EmailEvent = require('./eventSend');
const { sendEmitter } = require('./eventSend');

let data = { name: "jhonny111s", email: "jhonny111s@example.com"}

function registerUser(data, callback) {
    //EmailEvent.sendEmitter.emit('sendEmail', data)
    sendEmitter.emit('sendEmail', data);

    // delay while save user in DB
    setTimeout(() => {
        callback(true)
    }, 2000);
}


registerUser(data, (resp) => {
    console.log("login", resp);
});