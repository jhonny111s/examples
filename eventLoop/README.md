# Event Loop

## loop01

Ejemplo de una función que llama internamente dos funciones más, para ver el concepto de call stack.

## loop02

Ejemplo usando setTimeout, para simular una función con un retraso en su respuesta, y mostrar la primera interacción con el event loop.

## loop03

Ejemplo usando setImmediate y mostrando el comportamiento fuera de un callback, en este ejemplo mostramos un race condition, donde un setTimeout puede ejecutarse primero o despues del setImmediate.

## loop04

Ejemplo usando setImmediate y mostrando el comportamiento dentro de un callback, en este ejemplo siempre se ejecuta primero setImmediate.

## loop05

Ejemplo donde se muestra el uso de nextTick, estas son tareas que se priorizan sobre el event loop

## loop06

Ejemplo donde se reunen todas las fases, de los ejemplos anteriores
