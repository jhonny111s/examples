const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// https://nodejs.org/api/stream.html#stream_event_data
app.post('/', function (req, res) {
  // Receive anything 
  let body = [];
  // The 'data' event emits either a Buffer (by default) or a string if setEncoding() was used.
  req.on('data', (chunck) => {
    console.log(`Received ${chunck.length} bytes of data`, chunck);
    body.push(chunck);
  })
  //Emitted when the stream has received an EOF (FIN in TCP terminology). Indicates that no more 'data' events will happen. If the stream is also writable, it may be possible to continue writing.
  .on('end', () => {
    console.log(`Array of chunks`, body);
    body = Buffer.concat(body).toString();
    console.log(`Final body transform to string: ${body}`);
    res.send(body);
  })
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
