const fs = require('fs');

function foo() {
  setTimeout(() => console.log('1'), 1000);
  setImmediate(() => console.log('2'));

  fs.readFile(__filename, (err, buff) => {
    setTimeout(() => {
      console.log('3');
    }, 0);

    process.nextTick(() => {
      console.log('process.nextTick');
    });

    setImmediate(() => console.log('4'));
  });

  setImmediate(() => console.log('5'));
}

foo();

/**
 - entra foo al call stack
 - setTimeout y setImmediate se agregan al event loop cada uno en su fase
 - readFile y setImmediate se agregan al event loop cada uno en su fase
 - entra a la fase de timer y comienza el conteo
 - entra a la fase de pending callback y agrega el callback con el console y el readFile
 - entra a la fase de poll y pregunta si existe algo para ejecutar, no!
 - entra a la fase de check se ejecutan los setImmediate, primero en entrar primero en salir
 - comienza de nuevo el event loop, llega a pool y esta listo readFile
    - setTimeout y setImmediate se agregan al nuevo event loop cada uno en su fase
    - se ejecutan los nextTick al principio
    - continuamos en la fase de pool, debemos seguir en ese orden
    - entra a la fase de check se ejecutan los setImmediate
    - comienza de nuevo el event loop hasta ejecutar el setTimeout
    - sale del event loop de readfile
 - ejecuta el setTimeout del loop principal
 - finaliza
 */ 
