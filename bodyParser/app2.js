const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// https://www.npmjs.com/package/body-parser
// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.post('/', function (req, res) {
  // Contains key-value pairs of data submitted in the request body. By default, it is undefined, and is populated when you use body-parsing middleware
  // Receive just correct Content-type
  res.send(JSON.stringify(req.body, null, 2));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
