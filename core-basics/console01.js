// Imprimimos una cadena
console.log('hello world');
// Imprimimos una cadena con formato 
console.log('hello %s', 'world2');

// Agrupamos por un label, se ve una identación
console.group(['COUNT'])
    // Muestra un contador por label
    console.count('word');
    console.count('word');
console.groupEnd();

// Con dir podemos expandir las propiedades
console.dir(global.console, {'showHidden': true}  );

// Imprime un error
// la diferencia con log es la ubicación en el sistema donde se escribe
console.error('error #%d', 1);

// Table nos permite organizar los datos en filas y columnas
console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);

// Nos permite imprimir el stack trace
console.trace("check here!");

// time lo usamos para calcular el tiempo al ejecutar una operación.
console.time('process');
console.timeLog('process', 42);
setTimeout(() => {
    console.timeStamp('process');
    console.timeEnd('process');
}, 100);

