const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}

function procesarEntradaUsuario() {
    return new Promise((resolve, reject) => {
        // la función se retarda hasta que se digite el nombre
        rl.question('Por favor ingresa tu nombre: ', (nombre) => {
            resolve(nombre);
            rl.close();
        });
    })

}

procesarEntradaUsuario().then(success => {
    return saludar(success);
});
