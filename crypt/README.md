# Crypto

Es el modulo de criptografía de nodejs, con el cual podemos encriptar y desencriptar cadenas, existen varios métodos los cuales se pueden usar en diferentes contextos.

## HASH

Un hash es una función que transforma una cadena a otra cadena de una longitud definida de manera unidireccional por medio de un algoritmo, esto significa que solo se puede cifrar pero no decifrar y para verificar el dato debemos hacer el mismo procedimiento para hacer la comparación o utilizar la fuerza bruta. Hoy en día las implementaciones recomendados en seguridad son en este orden: Argon2id, PBKDF2 y Bcrypt.

### MD5

 Ejemplo con el algoritmo md5, no se recomienda usarlo porque es fácil de decifrar por medio de fuerza bruta.

### SHA

Ejemplo con el algoritmo sha 256, existen varios tipos de sha, se considera medianamente seguro y es muy usado para comprobar la integridad de una archivo, esto significa verificar que no fue modificado o dañado. No se recomienda su uso hoy en día para cifrar una clave.

### HMAC

Hmac usa un algoritmo y una clave privada y los cifra juntos para verificar la integridad del mensaje y la autenticidad de este. En el ejemplo se uso el algoritmo sha 256 y una clave que debe ser privada.

### pbkdf2

Ejemplo con una de las implementaciones más seguras y recomendadas en la industria, debido a que es  muy resistente a los ataques de fuerza bruta, gracias a que se cifra con una clave, un salt (cadena de caracteres muy larga) y esto se hace el numero de veces que las iteraciones proporcionadas lo digan.

### bcrypt

Bcript es una implementación del algoritmo blowfish, el cual sigue siendo el más usado debido a que es muy seguro y esta soportado en casi todos los lenguajes, a medida que la potencia de calculo aumenta solo se debe aumentar su saltRound que por defecto es 10.

## Cipher

En este ejemplo hablamos de codificación y por lo tanto vamos poder decodificarlo, es muy usado para proteger datos delicados en una base de datos como el identificador de seguridad social o una tarjeta de crédito, a diferencia del hash donde básicamente el cliente tiene el control (el usuario es el único que conoce su clave), aquí podemos internamente manejar este método de seguridad con algunas claves solo conocidas por el servidor.

En el ejemplo se muestra como codificar y decodificar usando una llave codificada con un salt y una contraseña y otra clave  llamada vector inicializador, estos dos datos siempre deben cambiar, por lo que es interesante analizar servicios para manejar llaves secretas (aws secret manager, azure key vault ..).

## speakeasy

Speakeasy es un paquete para implementar un TOPT (Time-based One-time Password algorithm), el cual nos permite tener un segundo paso para autenticarnos, por medio de una aplicación o de un dispositivo. algunas aplicaciones comunes son: google authenticator, vip access, okta verify, los generadores de clave bancarios.

## deffie

El algoritmo Diffie-Hellman es muy utilizado para crear un llave en dos extremos sin que un intermediario pueda apropiarse de esta llave. Cuando usamos un protocolo de transporte seguro como https este internamente hace algo similar, donde se establece una comunicación (TLS) para que los interlocutores tengan la misma llave sin ser transportada por el medio y así poder cifrar y decifrar el contenido de los mensajes transportados.

