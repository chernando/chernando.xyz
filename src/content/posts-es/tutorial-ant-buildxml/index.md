---
title: "Apache Ant, primeros pasos creando un build.xml"
description: "Tutorial introductorio a Apache Ant para automatizar la compilación de proyectos Java, creando un archivo build.xml desde cero."
publishDate: 2008-03-02
tags: ["java", "principiantes"]
language: "es"
image: ./vlad-tchompalov-dQkXoqQLn40-unsplash.jpg
imageAlt: "Shot in Cantão State Park in the state of Tocantins, Brazil by Vlad Tchompalov"
imageDescription: "Intricate network of tree branches and natural architecture, mirroring the complex dependency management and build structure that Apache Ant creates for Java projects"
imageAuthor: "Vlad Tchompalov"
imageAuthorUrl: "https://unsplash.com/@tchompalov"
imagePhotoUrl: "https://unsplash.com/photos/dQkXoqQLn40"
readingTime: 7
featured: false
draft: false
translationKey: "apache-ant-build-xml"
---

Uno de los inconvenientes en la construcción de software con más de dos
ficheros (cualquier cosa que se salga de un "Hello world!") es el
proceso de compilación: orden de compilación de ficheros, dependencias,
rutas de librerías internas, etc... En esta entrada vamos a dar los
primeros pasos en una de las soluciones más comunes para proyectos Java:
[Apache Ant](http://ant.apache.org/).

Para los impacientes: al final de la entrada encontraréis el build.xml
con todo lo explicado que seguramente os sirva tal cuál.

En primer lugar creamos un fichero build.xml en el raíz de nuestro
proyecto y definimos su nombre:

~~~ xml
<project name="Proyecto">
</project>
~~~

Ant, al igual que otras herramientas de construcción, se basa en el
concepto de objetivos o *targets* cuya definición engloba tanto las
dependencias previas como los pasos a seguir para conseguirlo.

Vamos a comenzar definiendo un objetivo de preparación llamado *init*
que será el encargado de crear un directorio *classes* donde guardaremos
los ficheros *.class* resultantes de la compilación y el directorio
*build* para el .*jar* final. Para ello basta incluir dentro de
&lt;project&gt; las siguientes líneas:

~~~ xml
<target name="init">
    <mkdir dir="classes" />
    <mkdir dir="build" />
</target>
~~~

Como podemos ver los objetivos se delimitan con etiquetas
**&lt;target&gt;** y un nombre. Dentro de ellos se enumeran los pasos
que se han de seguir para alcanzar el objetivo, en este caso ha de crear
directorios.

Si queremos alcanzar el objetivo *init* basta con realizar:

~~~bash
ant init
Buildfile: build.xml

init:
    [mkdir] Created dir: /home/chernando/proyecto/classes
    [mkdir] Created dir: /home/chernando/proyecto/build

BUILD SUCCESSFUL
Total time: 0 seconds
~~~

Es hora de compilar nuestro proyecto, vamos a definir el objetivo
*compile*. Ahora bien, la compilación depende de la creación del
directorio *classes* que se realiza objetivo anterior. Con esto en
cuenta basta con incluir:

~~~ xml
<target name="compile" depends="init">
    <javac srcdir="src" destdir="classes" />
</target>
~~~

La dependencia se fija en la declaración del *target* de tal manera que
se garantiza su cumplimiento antes de comenzarla. Nuestro código está en
el directorio *src* y el resultado de la compilación se lleva al
directorio *classes*.

Importante notar que esta vez estamos usando **&lt;javac&gt;** esto es
lo que Ant se denomina tarea. Hay muchas tareas predefinidas, consultad
el [manual de ant](http://ant.apache.org/manual/index.html).

Con nuestro proyecto compilado vamos a generar el .*jar* que
distribuiremos haciendo uso de un nuevo objetivo llamado *build*.

~~~ xml
<target name="build" depends="compile">
    <jar destfile="build/proyecto.jar" basedir="classes" />
</target>
~~~

En este caso dependemos de los frutos de *compile* y utilizamos la tarea
*jar* que se encarga de empaquetar todo el contenido del directorio
*classes* en el fichero *proyecto.jar*.

Finalmente incluiremos un nuevo objetivo para limpiar todo el entorno,
el objetivo *clean*:

~~~ xml
<target name="clean">
    <delete dir="classes" />
    <delete dir="build" />
</target>
~~~

A estas alturas es fácil entender que lo único que realiza es eliminar
los directorios de trabajo dejando el entorno limpio del proceso de
compilación.

Resumiendo nuestro fichero build.xml es:

~~~ xml
<project name="Proyecto">
       <target name="init">
               <mkdir dir="classes" />
               <mkdir dir="build" />
       </target>
       <target name="compile" depends="init">
               <javac srcdir="src" destdir="classes" />
       </target>
       <target name="build" depends="compile">
               <jar destfile="build/proyecto.jar" basedir="classes" />
       </target>
       <target name="clean">
               <delete dir="classes" />
               <delete dir="build" />
       </target>
</project>
~~~


Y hasta aquí este minitutorial sobre el uso de ant :-)
