function bar() {
  console.log('bar');
}

function baz() {
  console.log('baz');
}

function foo() {
  console.log('foo');
  bar();
  baz();
}

foo();


/**
- entra foo al call stack
- entra el console y lo ejecuta, sale del stack
- entra bar al call stack
- entra el console y lo ejecuta, sale del stack
- sale bar del stack
- entra el baz al call stack
- entra el console y lo ejecuta, sale del stack
- sale baz del stack
- sale foo del stack
- finaliza 
*/