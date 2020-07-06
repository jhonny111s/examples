const url = require('url');

// En node podemos crear un objeto de una url de dos maneras
// con new URL y con parse del modulo url
// la diferencia son algunos campos de más en el objeto y los
// métodos que vamos a usar con el modulo url
const globalURL =
    url.parse('http://user:pass@www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument', true);
const moduleURL =
    new URL('http://user:pass@www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument')

console.log(globalURL);
console.log(moduleURL);

// Busco el valor de un parámetro del query
console.log(moduleURL.searchParams.get('key1'));
// Agrego un parámetro a la query
moduleURL.searchParams.append('abc', 'xyz');
console.log(moduleURL.href);

// Se encarga de crear una query
const params = new URLSearchParams([
    ['user', 'abc'],
    ['query', 'first'],
    ['query', 'second']
]);
console.log(params.toString());

// Podemos convertir un objeto en una url
console.log(url.format({
    protocol: 'https',
    hostname: 'example.com',
    pathname: '/some/path',
    query: {
        page: 1,
        format: 'json'
    }
}));