var example_emitter = new (require('events').EventEmitter);
example_emitter.on("test", function () { console.log("test"); });

example_emitter.emit("test");