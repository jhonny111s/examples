# NGINX

Nginx es un proxy reverso, un servidor básico http y un servidor proxy de email y tcp/udp. Esto significa que con nginx vamos a poder interceptar todas las peticiones que son enviadas a nuestro servidor, vamos a poder hacer un balanceo de carga y vamos a poder almacenar archivos estáticos y proporcionar una cache pra mejorar los tiempos de acceso entre otros.

En este ejemplo vamos a crear dos API y un servidor web con nginx, para mostrar unos ejemplos básicos de balanceador de carga, proxy reverso y servidor estático.

## Docker

Cada API tiene su Dockerfile, por lo tanto podemos crearlos individualmente de la siguiente manera:

Se crea la imagen a partir del docker llamada projectN, mientras estemos en la ruta donde se encuentra el dockerfile:

`docker build -t projectN .`
 
Con la imagen que tenemos de projectN podemos correr el contenedor y exponerlo en el puerto 3001 y así visualizarlo en el navegador.

`docker run -dp 3001:3001 projectN`

## docker-compose

Con nuestro archivo docker compose vamos a crear nuestro servidor web y vamos a agregar nuestras APIs a una misma network y puedan comunicarse.

> Basta con correr nuestro docker compose, e inmediatamente se van a correr las imágenes si no existían.

`docker-compose up`
