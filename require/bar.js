const Square = require('./square.js');

console.log("barModule-->");
console.log(`Dirname: ${__dirname}\nFilename: ${__filename}`);
console.log('Module:',  module, '\n');

const mySquare = new Square(2);
console.log(`The area of mySquare is ${mySquare.area()}`);

