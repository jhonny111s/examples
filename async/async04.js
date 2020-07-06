const suma = function (total, numero) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(total + numero)
        }, 1000);
    });
}

const resta = function (total, numero) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(total - numero)
        }, 1500);
    });
}

const multi = function (total, numero) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(total * numero)
        }, 100);
    });
}

async function callAsync() {
    const total = 10;
    try {
        const resSuma = await suma(total, 2);
        const resResta = await resta(resSuma, 5);
        const resMulti = await multi(resResta, 2);
        return resMulti;
    } catch (error) {
        return error;
    }


}

callAsync().then(success => {
    console.log(success);
}).catch(error => {
    console.log(error);
});
