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
        console.log(`Tenemos una respuesta exitosa ${number} par`);
    } catch (error) {
        console.log(`Se genero un error porque ${error} es impar`);
    }


}

callAsync();