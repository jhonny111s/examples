# Streams

## hello-world

Un `console.log()` es una instacia que puede escribir en `process.stdout` y `process.stderr` los cuales son streams duplex, osea que pueden leer un mensaje que viene de *console.log* y escribirlo en nuestra terminal.

## stdio

`process.stdin` es un stream duplex al igual que `process.stdout` y podemos pasar información desde nuestra terminal o desde un archivo para que se escriban en stdout por medio del método `pipe` el cual es una tubería que une nuestros dos streams para que transiten porciones de información.

## http

Creamos un servidor http donde `request` y `response` son streams, podemos obtener el stream de información en `data`, el cual es un buffer y finalmente procesarlo en el evento `end`, donde ya tenemos todo nuestro buffer completo.

## readable

Creamos un readable que genera fechas por un minuto.

## readable-fs

creamos un readable con el modulo filesystem, para leer de un archivo.

## writable

Creamos un writable stream el cual escribe en la terminal.

## writable

Creamos un writable con el modulo filesystem, para escribir en un archivo.

## duplex

Creamos un duplex que genera el abecedario y lo escribe en la terminal.

## transform

Creamos un duplex que transforma nuestra entrada en minúscula y la escribe en la terminal en mayúscula.

## concat-stream

Creamos un servidor http el cual usa el paquete concat-stream para obtener todo el buffer y retornarlo en un callback.