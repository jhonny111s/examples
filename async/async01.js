const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function procesarEntradaUsuario() {
    return new Promise((resolve, reject) => {
        // la función se retarda hasta que se digite el nombre
        rl.question('Por favor ingresa tu nombre: ', (nombre) => {
            resolve(nombre);
            rl.close();
        });
    })

}

async function saludar() {
    const nombre = await procesarEntradaUsuario();
    console.log(`Hola ${nombre}`);
}


saludar();