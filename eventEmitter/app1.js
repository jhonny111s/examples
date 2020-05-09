const fs = require('fs');

// Si modifico o creo un archivo en el directorio actual se va imprimir en consola
fs.watch('.', { encoding: 'buffer' }, (eventType, filename) => {
    if (filename) {
        console.log(filename.toString());
    }
});