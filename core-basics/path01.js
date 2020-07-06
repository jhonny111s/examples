const path = require('path');

// ruta del archivo actual
const myFile = __filename;
//ruta del directorio actual
const myDir = __dirname;

// Obtiene la ultima porción de la ruta
// en este caso el nombre del archivo
console.log(path.basename(myFile));
// Obtiene la ruta del directorio
// sin el nombre del archivo
console.log(path.dirname(myFile));
// Obtiene la extensión del archivo
console.log(path.extname(myFile));
// le agrega a la ruta dada, un segmento de ruta
console.log(path.join(myDir, 'path01.js'));
// elimina segmentos de separación innecesarios
console.log(path.normalize(myDir + '///wrong'));
// devuelve un ruta descompuesta en sus partes
console.log(path.parse(myFile));
