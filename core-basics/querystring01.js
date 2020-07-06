const querystring = require('querystring');

// Devuelve los parámetros de un query como un objeto
const myQuery = 'foo=bar&abc=xyz&abc=123'
console.log(querystring.parse(myQuery));

// Devuelve un objeto como una cadena de una query
const myObject = { foo: 'bar', abc: [ 'xyz', '123' ] }
console.log(querystring.stringify(myObject));