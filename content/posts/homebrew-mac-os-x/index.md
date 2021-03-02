---
title:  "Homebrew, gestión de paquetes en Mac OS X"
datePublished:   2011-09-22 15:15:00

image:
  author: Elevate
  description: Beige wooden barrel on black crate
  contentUrl: ./elevate-GCD9u5Xb8Bc-unsplash.jpg
  isBasedOn: https://unsplash.com/photos/GCD9u5Xb8Bc

tags:
  - macos

redirect_from:
  - /articulos/homebrew-mac-os-x/

---

[Homebrew](http://mxcl.github.com/homebrew/) es un sistema de gestión de
paquetes de software para Mac OS X como podría ser un apt en sistemas
GNU/Linux pero sin distribución de paquetes precompilados.

Gestión de paquetes en Mac OS X
-------------------------------

Apple propone el App Store como sistema para obtener software y
mantenerlo actualizado. Evidentemente solo las aplicaciones publicadas
en el Apple Store pueden ser mantenidas de esta manera. Y aún así la
oferta es bastante limitada si nos fijamos en software Unix.

Otras opciones disponibles son [MacPorts](http://www.macports.org/) o
[Fink](http://www.finkproject.org/). Todos ellas tienen un planteamiento
parecido y diferente al mismo tiempo. MacPorts y Fink plantean mantener
todo el software a parte de la base de Mac OS X mientras que Homebrew
prefiere utilizar al máximo la base propuesta por el sistema y construir
únicamente lo que falte.

Este planteamiento tiene sus ventajas y sus inconvenientes:

-   Al necesitar menos dependencias externas es más rápido.
-   Al utilizar las dependencias del sistema las cosas se pueden romper
    cuando el sistema las actualice.

Por otro lado MacPorts y Fink, aunque más laboriosos tienen un entorno
más controlado y por tanto más estable.

En resumen, depende de las necesidades de cada uno. En este artículo
veremos el uso de habitual de Homebrew que probablemente sea el más
ligero para empezar a probar.

Requisitos
----------

Necesitamos el entorno de compilación de Mac OS X. Aunque algunas
utilidades vienen ya instaladas de fábrica en el sistema, es
recomendable (y en algunos casos indispensable) instalar Xcode. Lo
podemos encontrar en el App Store.

Instalación de Homebrew
-----------------------

Desde la web oficial podemos acceder a la [guía de
instalación](https://github.com/mxcl/homebrew/wiki/installation). En la
práctica se reduce a ejecutar (a fecha de este artículo):

~~~bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.github.com/gist/323731)"
~~~

La instalación se realiza en */usr/local* por lo que o bien lo
ejecutamos como administrador o bien nos damos de permisos para escribir
en ese directorio.

Actualizar el listado de fórmulas
---------------------------------

Homebrew utiliza el concepto de fórmula. Este concepto transmite la idea
de cómo se obtiene un programa, es decir, sus dependencias y sus pasos
de compilación.

El listado de fórmulas se mantiene en los repositorios de
[GitHub](https://github.com/). Esto nos permite crear forks del
proyecto, añadir nuestras fórmulas y demás. Veamos cómo se actualiza el
listado:

~~~bash{outputLines: 2-10}
brew update
remote: Counting objects: 141, done.
remote: Compressing objects: 100% (63/63), done.
remote: Total 122 (delta 93), reused 88 (delta 59)
Receiving objects: 100% (122/122), 13.71 KiB, done.
Resolving deltas: 100% (93/93), completed with 18 local objects.
From http://github.com/mxcl/homebrew
   f34cda7..09ad71b  master     -> origin/master
Updated Homebrew from f34cda74 to 09ad71bd.
[...]
~~~

Es la salida típica de git. A partir de ahí veremos un resumen de las
nuevas fórmulas añadidas y de las actualizadas.

Buscar fórmulas
---------------

*brew search PATRÓN*

Mostrar información de una fórmula
----------------------------------

Tenemos la opción clásica:

*brew info FÓRMULA*

y la curiosa opción de visitar la página del proyecto:

*brew home FÓRMULA*

Instalación de fórmulas
-----------------------

*brew install FÓRMULA*

Listar fórmulas antiguas
------------------------

En el proceso de actualización del listado de fórmulas se detectarán
nuevas versiones de fórmulas ya instaladas:

*brew outdated*

Actualización de paquetes
-------------------------

Tenemos dos opciones

*brew upgrade*

que actualiza todos las fórmulas con nuevas versiones o

*brew upgrade FÓRMULA*

que actualiza únicamente la fórmula especificada.

Eliminación de versiones antiguas
---------------------------------

Una curiosidad de Homebrew es que no desinstala versiones anticuadas
para ello usamos:

*brew cleanup*

Crear nuevas fórmulas
---------------------

Es bastante sencillo crear una fórmula nueva. Aunque el [Formula
Cookbook](https://github.com/mxcl/homebrew/wiki/Formula-Cookbook) es
bastante claro, veremos brevemente los paso principales:

1.  *brew create URL* (con la URL de la descarga)
2.  Editar el fichero, creado automáticamente, en
    */usr/local/Library/Formula/FÓRMULA.rb*
3.  Añadir las dependencias con depends\_on.
4.  Añadir los comandos system necesarios para la compilación
5.  Probar la fórmula con *brew install -vd FÓRMULA*

Más información
---------------

-   [Homebrew](http://mxcl.github.com/homebrew/)
-   [Homebrew FAQ](https://github.com/mxcl/homebrew/wiki/FAQ)
-   [Homebrew Formula
    Cookbook](https://github.com/mxcl/homebrew/wiki/Formula-Cookbook)

