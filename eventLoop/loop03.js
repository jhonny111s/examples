function foo() {
    setTimeout(() => console.log('1'), 0);
    setImmediate(() => console.log('2'));
  }
  
foo();
  
/**
 - entra foo al call stack
 - setTimeout y setImmediate se agregan al event loop cada uno en su fase
 - entra a la fase de timer y comienza el conteo
 - entra a la fase de pending callback y agrega el callback con el console
 - entra a la fase de poll y pregunta si existe algo para ejecutar
 - pueden pasar dos cosas. 1) setTimeout esta listo para ejecutarse, 2) continuar
 - al entrar a la fase de check se ejecuta setImmediate
 - finaliza
 */ 

