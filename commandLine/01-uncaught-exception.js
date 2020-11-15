var fs = require('fs');

function reading() {
    fs.readFile('wrong.txt', function (err, data) {
        if (err) throw err;
        return data;
    });
};


function init() {
    reading();
    console.log("works with errors");
}

process.on("uncaughtException", function (err) {
    console.log("handle uncaught exception");
    process.exit(1);
});

init();

// node --abort-on-uncaught-exception 01-uncaught-exception.js 