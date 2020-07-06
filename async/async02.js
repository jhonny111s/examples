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

async function callAsync() {
    try {
        const number = await leerArchivo('mi_archivo');
        return `Tenemos una respuesta exitosa ${number} par`;
    } catch (error) {
        return `Se genero un error porque ${error} es impar`;
    }

}

callAsync().then(success => {
    console.log(success);
}).catch(error => {
    console.log(error);
});
