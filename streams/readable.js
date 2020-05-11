const Stream = require('stream')
const readableStream = new Stream.Readable({
    read(size) {
        // generated data from inside        
        setTimeout (() => {
            let now = new Date();
            // sending data to stream
            if (now - this.currentDate <= 10000) {
                this.push(JSON.stringify({ time: now }));
            } else {
                //null means the stream does not have any more data
                this.push(null);
            }
            
        }, 1000);
    }
})

readableStream.on('data', (chunk) => {
    console.log(`\nReceived ${chunk.length} bytes of data.`);
});

readableStream.on('end', () => {
    console.log('\nFinished!');
});


// let current = new Date();
// let data = setInterval(() => {
//     let now = new Date();
//     // sending data to stream
//     readableStream.push(JSON.stringify({ time: now }));

//     if (now - current >= 10000) {
//         stop();
//     }
// }, 500);

// function stop() {
//     readableStream.push(null);
//     clearInterval(data);
// }

readableStream.currentDate = new Date();
readableStream.pipe(process.stdout)