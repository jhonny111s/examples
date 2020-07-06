const readline = require('readline');

function procesarEntradaUsuario(callback) {
    // lee de la entrada estándar (teclado) y escribe en la salida estándar
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    // la función se retarda hasta que se escriba el nombre
    rl.question('Por favor ingresa tu nombre: ', (nombre) => {
        // saludar(name)
        callback(nombre);
        rl.close();
    });
}

function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}

//procesarEntradaUsuario(saludar);

// procesarEntradaUsuario(function(nombre) {
//     console.log(`Hola ${nombre}`);
// });

procesarEntradaUsuario((nombre) => {
    console.log(`Hola ${nombre}`);
});
