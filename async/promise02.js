function leerArchivo(path) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const number = Math.floor(Math.random() * 10);
            console.log(`buscando en el archivo ${path} un numero y es un proceso asincrono`);
            if (number % 2 !== 0) {
                reject(number);
                return;
            }
            resolve(number);
        }, 1000);
    })

}

leerArchivo('mi_archivo').then(success => {
    console.log(`Tenemos una respuesta exitosa ${success} par`);
}).catch( error => {
    console.log(`Se genero un error porque ${error} es impar`);
});
