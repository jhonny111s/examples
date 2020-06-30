# Async

## callback01

Ejemplo donde se espera que se escriba un nombre desde el teclado y se pasa un callback que imprime un saludo.

## callback02

Ejemplo donde se simula la lectura de un archivo y se pasa un callback para imprimir el resultado, que puede ser una respuesta exitosa o un error según un numero random (par o impar) que se genera.

## promise01

Ejemplo donde se crea una promesa en la cual se espera escriban un nombre desde el teclado, con la palabra reservada `then` vamos a esperar a que se resuelva y así podremos pasar el resultado a la función saludar.

## promise02

Ejemplo donde se crea una promesa simulando la lectura de un archivo que puede ser una respuesta exitosa (`then`) o un error (`catch`) según un numero random (par o impar) que se genera.

## promise03

Ejemplo que muestra dos métodos muy útiles de la promesas, `Promise.all` al cual le podemos pasar un array de promesas y nos retorna la respuesta de todos en orden o un error si se presenta, y `Promise.race` al cual le pasamos un array de promesas y retorna la primera en ser resuelta.

## promise04

Ejemplo donde se muestran las bondades de poder concatenar promesas, en este ejemplo se concatenan tres promesas que representan las operaciones matemáticas de suma, resta y multiplicación.

## async01

Ejemplo donde se crea una promesa en la cual se espera escriban un nombre desde el teclado, se consume desde una función saludar que utiliza la palabra reservada `async` para automáticamente convertirse en una promesa y con la palabra reservada `await` se pausa la ejecución hasta que se resuelva la promesa.

## async02

Ejemplo donde se crea una promesa simulando la lectura de un archivo que puede ser una respuesta exitosa o un error y esta se consume en una función `async/await` donde para capturar el error debemos usar un `try/catch`.

## async04

Ejemplo donde se muestran las ventajas del async/await en comparación con las promesa, se concatenan tres promesas que son ejecutadas en su orden gracias a `await`, haciendo el código más legible y corto.
