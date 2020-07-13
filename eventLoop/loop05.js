function foo() {
    setTimeout(() => console.log('1'), 0);
    process.nextTick(() => console.log('2'));
    setImmediate(() => console.log('3'));
    process.nextTick(() => console.log('4'));
}

foo();


/**
- entra foo al call stack
- se agregan los nextTick al principio del event loop y se ejecutan
- setTimeout y setImmediate se agregan al event loop cada uno en su fase
- entra a la fase de timer y comienza el conteo
- entra a la fase de pending callback y agrega el callback con el console
- entra a la fase de poll y pregunta si existe algo para ejecutar, no!
- entra a la fase check y ejecuta el setImmediate
- vuelve a empezar hasta ejecutar el timeout
- finaliza
*/