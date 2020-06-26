function imprimirArchivo(error, success) {
    if (error) {
        console.log(`Se genero un error porque ${error} es impar`);
        return;
    }
    console.log(`Tenemos una respuesta exitosa ${success} par`);
}

function leerArchivo(path, callback) {
    setTimeout(() => {
        const number = Math.floor(Math.random() * 10);
        console.log("buscando en un archivo un numero y es un proceso asincrono");
        if (number % 2 !== 0) {
            // la convención en node es tener dos parámetros uno para el error y otro para la respuesta
            callback(number, null);
            return;
        }
        callback(null, number);
    }, 1000);
}

leerArchivo('mi_archivo', imprimirArchivo)

// leerArchivo('ruta', (error, success) => {
//     if (error) {
//         console.log(`Se genero un error porque ${error} es impar`);
//         return;
//     }
//     console.log(`Tenemos una respuesta exitosa ${success} par`);
// })