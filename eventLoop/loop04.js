const fs = require('fs');

function foo() {
  fs.readFile(__filename, () => {
    setTimeout(() => console.log('1'), 0);
    setImmediate(() => console.log('2'));
  });
}

foo();

/**
 - entra foo al call stack
 - readFile se agregan al event loop, en la fase poll
 - como no hay nada más, esperamos hasta que este listo readFile
 - entra settimeout y setimmediate cada uno en su fase
 - sigo en la fase poll, por lo tanto debe mantener ese orden
 - entra a la fase check y ejecuta siempre primero setimmediate
 - entra a la fase de timer y comienza el conteo
 - entra a la fase de pending callback y agrega el callback con el console
 - entra a la fase de poll y pregunta si existe algo para ejecutar
 - ejecuta el callback de setTimeout
 - finaliza
 */ 
