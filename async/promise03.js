const promise1 = Promise.resolve('1');
const promise2 = Promise.resolve('2');
const promise3 = Promise.resolve('3');
const promise4 = Promise.reject('error');

// devuelve un array con cada respuesta
Promise.all([promise1, promise2, promise3]).then(success => {
    console.log("1:", success);
}).catch(error => {
    console.log("1:", error);
});

// si alguno falla se devuelve el error
Promise.all([promise1, promise2, promise4]).then(success => {
    console.log("2:", success);
}).catch(error => {
    console.log("2:", error);
});


//devuelve la primera en ejecutarse
Promise.race([promise1, promise2, promise3]).then(success => {
    console.log("3:", success);
}).catch(error => {
    console.log("3:", error);
});
