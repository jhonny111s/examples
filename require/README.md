# Require

## project/myScript

Se muestra como funciona require al llamar un script, se crearon dos carpetas *node_modules* que contienen el paquete *mymodule*, la primera al mismo nivel del script y otra un nivel más arriba. Si corremos el script vamos a obtener un console que pertenece al mismo nivel de la carpeta y si cambiamos el nombre a este paquete, vamos a obtener un console diferente. require busca siempre en una jerarquía de carpetas node_modules.

## foo

Se muestra como exportar funciones o propiedades (varios métodos) y consumirlas en el archivo foo.

## bar

Se muestra como exportar una clase (una sola cosa) y consumirla en el archivo bar.