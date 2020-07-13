function bar() {
    console.log('bar');
}

function baz() {
    console.log('baz');
}

function foo() {
    console.log('foo');
    setTimeout(() => {
        bar();
    }, 0);
    baz();

}

foo();
/** 
- entra foo al call stack
- entra el console y lo ejecuta, sale del stack
- entra el setTimeOut y el event loop programa el tiempo
- entra el baz al call stack
- entra el console y lo ejecuta, sale del stack
- sale baz del stack
- se verifica si ya termino el tiempo de setTimeout y se libera bar
- Entra bar al call stack
- entra el console y lo ejecuta, sale del stack
- sale bar del stack
- sale foo del stack
- finaliza 
*/