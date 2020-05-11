const Stream = require('stream')
const writableStream = new Stream.Writable({
    write(chunk, encoding, next) {
        console.log(chunk.toString())
        next()
    }
})

writableStream.on('pipe', (src) => {
    console.log('data through pipe');
});

writableStream.on('finish', () => {
    console.log('\nFinished!');
});

writableStream.write("hello world");
process.stdin.pipe(writableStream)

// cat pipe.txt | node writable.js