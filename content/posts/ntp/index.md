---
title: NTP Sincronización de tiempos
datePublished: 2011-09-15 15:15:00

image:
  author: NeONBRAND
  contentUrl: ./neonbrand-KYxXMTpTzek-unsplash.jpg
  description: Sand in an hourglass
  isBasedOn: https://unsplash.com/photos/KYxXMTpTzek

---

Uno de los principios que debemos mantener en nuestros equipos es
mantenerlos en hora. En algunos es un requisito, por ejemplo sistemas de
autenticación dependientes del tiempo, y en otros para mantener la
cordura, por ejemplo para realizar un seguimiento de logs en distintas
máquinas.

La solución es el uso de
[NTP](http://en.wikipedia.org/wiki/Network_Time_Protocol) (Network Time
Protocol) que nos permite sincronizar los relojes de nuestros equipos y
mantenerlos en hora con el paso del tiempo. Vamos a ver las
configuraciones típicas usando *ntpdate* y el demonio *ntpd*.

Pero antes un breve comentario sobre el
[stratum](http://en.wikipedia.org/wiki/Network_Time_Protocol#Clock_strata).
El número del stratum nos indica el número de pasos a los que estamos de
un reloj atómico (nivel 0). Los relojes atómicos son muy precisos (no
como los relojes de cuarzo) pero también muy caros, por lo que es
habitual que se utilicen [relojes de
GPS](http://en.wikipedia.org/wiki/GPS_clock#GPS_clocks) como origen.

Existen multitud de servidores públicos de NTP. Una iniciativa que
mantiene un pool abierto y que además realiza balanceo es [NTP pool
project](http://www.pool.ntp.org/). Para este artículo utilizaremos de
ejemplo *2.es.pool.ntp.org*.

*ntpdate*, para equipos itinerantes
-----------------------------------

*ntpdate* está pensando para utilizarse una sola vez. Lo lanzamos,
obtiene el tiempo del servidor remoto y sincroniza la hora local. Por
ejemplo:

~~~bash{outputLines: 2}
ntpdate 2.es.pool.ntp.org
14 Sep 12:18:03 ntpdate[3359]: adjust time server 158.227.98.15 offset 0.000969 sec
~~~

El uso más habitual es para equipos portátiles u ordenadores que no
tienen conexión permanente a Internet. Los equipos esperan a tener
conexión y efectúan la sincronización.

Un error habitual es que el socket esté en uso, normalmente por el
demonio *ntpd*, que exige cerrar primero *ntpd* y luego lanzar
*ntpdate*:

~~~bash{outputLines: 2}
ntpdate 2.es.pool.ntp.org
14 Sep 12:21:57 ntpdate[3392]: the NTP socket is in use, exiting
~~~

La configuración de *ntpdate* como servicio es muy sencilla, podemos
echar un vistazo en */etc/default/ntpdate* (sistemas Debian).

Demonio *ntpd*, equipos con conexión permanente
-----------------------------------------------

Si el equipo está conectado la gran parte del tiempo lo recomendable es
utilizar el demonio *ntpd*. Evidentemente se encargará de mantener el
equipo sincronizado con el paso del tiempo.

Existe una diferencia importante entre *ntpdate* y *ntpd*. *ntpd*
realiza un ajuste sutil sobre la velocidad del reloj para compensar la
deriva natural del reloj (drift). Esto tiene una repercusión: el tiempo
es continuo (obviemos cuestiones metafísicas ;) ).

Por ejemplo imaginemos que nuestro equipo está 5 minutos atrasado.
*ntpd* intentará que el reloj “corra” hasta llegar a la sincronización
sin saltarse ni un segundo (simplemente “cuenta los segundos más
rápido”). *ntpdate* por otro lado al ver que la diferencia es mayor a
medio segundo directamente “saltará” en el tiempo fijando la hora actual
inmediatamente.

La práctica recomendada es arrancar el equipo con *ntpdate* y dejar que
el demonio *ntpd* se haga cargo de mantener la hora.

La configuración es un poco más elaborada, ya que podemos configurarlo
como servidor de NTP. El fichero de configuración */etc/ntp.conf* está
muy bien comentado y básicamente cambiando las directivas *server* por
servidores locales (o del [NTP pool project](http://www.pool.ntp.org/))
sería suficiente.

Prestando servicio interno
--------------------------

Si queremos sincronizar varios equipos dentro de nuestra red haremos que
un par de equipos se sincronicen con servidores externos y al mismo
tiempo presten ese servicio a nivel local. De esta forma, incluso si se
cae la conexión, todos los equipos estarán sincronizados contra la misma
fuente de referencia. Además es más educado y consume menos recursos :)

Para ello simplemente es necesario revisar las directivas *restrict*.

Broadcast
---------

La última modalidad es la sincronización por broadcast. En esta
configuración un servidor local de NTP emite de forma regular la hora
actual, los equipos que escuchen actualizan la hora. Es una
configuración muy típica para desplegar equipos con conexión a red como
impresoras, cámaras y dispositivos similares.

Para configurar al servidor para que emita hay que hacer uso de la
directiva *broadcast*.

Para hacer que un equipo escuche las emisiones la directiva es
*broadcastclient*.

Más información
---------------

-   [The Network Time Protocol (NTP)
    Distribution](http://www.eecis.udel.edu/~mills/ntp/html/index.html)
-   [NTP pool project](http://www.pool.ntp.org/)
-   [NTP Server and Client Configuration in
    debian](http://www.debianadmin.com/ntp-server-and-client-configuration-in-debian.html)
-   [NTP Debian Wiki](http://wiki.debian.org/NTP)
-   [ocubom - Sincronización del reloj en
    Windows](http://ocubom.wordpress.com/2008/06/18/sincronizacion-del-reloj-en-windows/)

