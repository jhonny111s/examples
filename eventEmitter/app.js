const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new EventEmitter();
//const myEmitter = new MyEmitter();

myEmitter.on('event', (param) => {
  console.log('an event occurred!', param);
});

// un evento puede ejecutar diferentes funciones
myEmitter.on('event', (param) => {
    console.log('another event occured!', param);
  });

myEmitter.emit('event', '1');
