const util = require('util');
const fs = require('fs');

// callbackify
// Convierte una promesa a callback
async function fn() {
  return 'hello world';
}

const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  if (err) throw err;
  console.log(ret);
});


//promisify
// Convierte un callback en promesa
const stat = util.promisify(fs.stat);

stat('.').then((stats) => {
  console.log(stats);
}).catch((error) => {
  console.log(error);
});

// Le da formato a una cadena, es usado en el console
console.log(util.format('%s:%s', 'foo', 'bar', 'baz'));


fs.access('file/that/does/not/exist', (err) => {
  console.log(err);
  // Obtiene el nombre a partir de un código de error de node
  const name = util.getSystemErrorName(err.errno);
  console.error(name); // ENOENT
});
