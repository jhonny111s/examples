
// https://expressjs.com/es/starter/installing.html
// forma mas básica de generar un proyecto de express sin usar un generador para crear toda una estructura
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// para correrlo node app.js o agregar el script de start en el package y correr npm run start
