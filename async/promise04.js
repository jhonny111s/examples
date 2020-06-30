const suma = function(total, numero){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(total + numero)
        }, 1000);
    });
}

const resta = function(total, numero){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(total - numero)
        }, 1500);
    });
}

const multi = function(total, numero){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(total * numero)
        }, 100);
    });
}


const total = 10;

suma(total, 2).then(resSuma => {
    // resSuma = 10 + 2
    return resta(resSuma, 5);
}).then(resResta => {
    // resResta = 12 - 5
    return multi(resResta, 3);
}).then(resMulti => {
    // resMulti = 7 * 3
    console.log(resMulti);
}).catch(error => {
    console.log(error);
})




