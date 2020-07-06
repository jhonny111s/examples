const readline = require('readline');


async function procesarEntradaUsuario() {
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

// se convierte en una promesa
async function saludar() {
    // espero hasta resolver la promesa
    const nombre = await procesarEntradaUsuario();
    return `Hola ${nombre}`;
}


saludar().then( sucess => {
    console.log(sucess);
});
