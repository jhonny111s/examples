var fs = require('fs');

fs.readFile('./dino.jpg', function (err, data ) {
    // data is instance of buffer
  //console.log(data.toString('base64'));
});

// https://ascii.cl/
//utf-8: dos posiciones cada carácter
//utf8/hex: h=68 e=65 l=6c o=6f 
console.log(Buffer.from("hello"));

// https://upload.wikimedia.org/wikipedia/commons/0/01/Unifont_Full_Map.png
//utf16le: cuatro posiciones cada carácter
//utf16le/hex: h=68 00 e=65 00 l=6c 00 o=6f 00 
console.log(Buffer.from("hello", 'utf16le'));


const buf = Buffer.from("hello")

// convierte buffer a string utf-8
console.log(buf.toString());

console.log(buf.toString('hex'));

console.log(buf.toString('base64'));

console.log(buf.toString('utf16le'));


