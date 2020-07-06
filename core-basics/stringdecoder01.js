const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');

// https://www.fileformat.info/info/unicode/char/20ac/index.htm
const euro = Buffer.from([0xE2, 0x82, 0xAC]);
console.log(decoder.write(euro));


decoder.write(Buffer.from([0xE2]));
decoder.write(Buffer.from([0x82]));
console.log(decoder.end(Buffer.from([0xAC])));