const readline = require('readline');

// lee de la entrada estandar (tecledo) y escribe en la salida estandar la terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}

function procesarEntradaUsuario(callback) {
    // la función se retarda hasta que se digite el nombre
    rl.question('Por favor ingresa tu nombre: ', (nombre) => {
        // saludar(name)
        callback(nombre);
        rl.close();
    });
}

//procesarEntradaUsuario(saludar);

// procesarEntradaUsuario(function(nombre) {
//     console.log(`Hola ${nombre}`);
// });

procesarEntradaUsuario((nombre) => {
    console.log(`Hola ${nombre}`);
});





//----------------

//se pasa una funcion como parametro a otra funcion 

//esto significa que necesitamos que se ejecute primero una funcion y cuado este listo el resultado de esta se le podra pasar a la siguiente este dato funcíon, usamos callback para resolver dependencia de resultados que pueden demorarse

//esto significa que vamos a ejecutar lo de la primera función y vamos a esperar a tener la información que se necesite para ejecutar la segunda función

//----------------