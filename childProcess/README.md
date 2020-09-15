# Child process

## exec01

Ejemplo para ejecutar un comando (ls -l), exec internamente Genera una shell donde se corre un comando, se genera el proceso, se guarda en un buffer el resultado hasta que termine la tarea y finalmente envia el resultado.

## exec02

Ejemplo para convertir la respuesta de un proceso exec en una promesa.

## execfile01

Ejemplo que funciona muy similar a exec, la unica diferencia es que no genera una shell sino inmediatamente un proceso, lo que lo hace un poco más eficiente y debemos especificar la ruta del archivo o aplicación a correr, a diferencia de exec donde ejecutabamos un comando.

## child01

Ejemplo de proceso spawn, donde un proceso padre crea un hijo apartir de un script nodejs. El padre ejecuta una tarea bloqueante y el hijo tambien, sin embargo las dos se ejecutan en paralelo.

## child02

Ejemplo de proceso spawn, similar al anterior la diferencia es que el padre no espera hasta que el hijo termine su ejecución (por defecto el padre espera) gracias al metodo unref.

## spawn01

Ejemplo donde ejecutamos el comando fin, donde podemos ver los metodos más utilizados de spawn.

## spawn02

Ejemplo donde se concatenan dos procesos por medio de pipe, en este caso por medio de process (stream duplex) se pasa un archivo o una cadena y este lo recibe otro proceso que se encarga de contar lineas, palabras y caracteres.

## spawn03

ejemplo de como escribir en un proceso utilizando los eventos, aqui se escribe algo en la terminal y ese dato se pasa a wc que se encarga de contar.

## forkMain01

El fork es un caso especial de spawn donde vamos a tener la capacidad de comunicar de manera bidireccional el proceso principal y el proceso hijo por medio de un protocolo interno de comunicación.
en este ejemplo es padre envia un mensaje al hijo y el hijo manda mensajes al padre por un intervalo de tiempo.

## forkMain02.js

Se crea un servidor http, el cual crea un proceso hijo con fork para llamar una tarea con mucho procesamiento como es calcular el fibonacci





