const readline = require('readline');

function procesarEntradaUsuario() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve, reject) => {
        // la función se retarda hasta que se escriba el nombre
        rl.question('Por favor ingresa tu nombre: ', (nombre) => {
            resolve(nombre);
            rl.close();
        });
    })
}

function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}


procesarEntradaUsuario().then(success => {
    return saludar(success);
});