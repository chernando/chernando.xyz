---
title: Python generators
datePublished: 2011-09-01 15:15:00

image: 
  author: Will Francis
  description: Person holding AC receiver
  contentUrl: ./will-francis-_J3oTl6acVg-unsplash.jpg
  isBasedOn: https://unsplash.com/photos/_J3oTl6acVg

tags:
  - python

redirect_from:
  - /articulos/python-generators/

---

Todos conocemos las listas de Python mientras que sus hermanos los
generadores son menos conocidos. Este breve artículo es un recordatorio
:-)

El concepto de generador
------------------------

La idea de los
[Generators](http://docs.python.org/tutorial/classes.html#generators) se
basa en dos conceptos: los iteradores y la evaluación perezosa.

Python utiliza el concepto de
[iterador](http://docs.python.org/tutorial/classes.html#iterators) de
una forma muy natural, por ejemplo:

~~~ python
for i in elementos:
    print i
~~~

Por debajo el intérprete lo que hace es crear un iterador mediante el
método *iter()* y avanzar posiciones con el método *next()* del iterador
devuelto. Cualquier objeto que cubra estos métodos puede ser tratado
como un iterador y por tanto trabajar de forma transparente con el resto
de la API.

El segundo concepto es la [evaluación
perezosa](http://en.wikipedia.org/wiki/Lazy_evaluation) (lazy
evaluation), que en pocas palabras significa que una expresión se
resuelve únicamente cuando se la necesita, no antes.

Uniendo ambos conceptos tenemos el generador: una estructura, sobre la
que podemos iterar, cuyos componentes se van obteniendo según se va
avanzando.

La diferencia fundamental con la lista es que la lista tiene una
[evaluación
ansiosa/codiciosa](http://en.wikipedia.org/wiki/Eager_evaluation) (eager
evaluation). Esto implica que cuando queremos manejar una lista de 10
elementos la lista necesita disponer de esos 10 elementos en el momento
de su declaración. Sin embargo el generador solamente necesita saber
cómo generar el siguiente valor por lo que no necesita ni reservar
espacio ni conocer a priori ningún elemento.

Declaración de un método generador
----------------------------------

Un método que utilice la palabra reservada *yield* se trata como un
generador. *yield* puede devolver un valor, como si fuera un *return*
(cuidado, *return* se utiliza para terminar el generador).

Por ejemplo definimos la función *naturales()* que devuelve un iterador
de todos los números naturales:

~~~ python
def naturales():
    n = 1
    while True:
        yield n
        n = n + 1

i = naturales()
print i
# <generator object naturales at 0x10f1a3050>
print i.next()
# 1
print i.next()
# 2
~~~

Vemos que la primera ventaja de la evaluación perezosa es que podemos
tratar estructuras infinitas.

Emulemos el método *enumerate(list)* nativo de Python utilizando el
generador como una lista (o mejor dicho su iterador):

~~~ python
ls = ['a', 'b', 'c']
print zip(naturales(), ls)
# [(1, 'a'), (2, 'b'), (3, 'c')]
~~~

Declaración de una expresión generadora
---------------------------------------

Otra forma de declarar un generador es exactamente igual que una
expresión de lista pero con paréntesis. Por ejemplo los números pares:

~~~ python
print [p for p in range(10) if p % 2 == 0]
# [0, 2, 4, 6, 8]
print (p for p in range(10) if p % 2 == 0)
# <generator object <genexpr> at 0x10f1a3190>
~~~

En este caso vemos que la lista está completa mientras que el generador
se queda a la espera. A partir de este ejemplo podemos definir otro
generador de números naturales pares:

~~~ python
i = (p for p in naturales() if p % 2 == 0)
print i.next()
# 2
print i.next()
# 4
~~~

Es importante encadenar generadores con generadores, en caso contrario
la evaluación de la lista obligaría el recorrido completo del generador.
Si la estructura fuera infinita, como el ejemplo, provocaría la muerte
del intérprete:

~~~ python
[p for p in naturales() if p % 2 == 0]
~~~

Conclusiones
------------

Evidentemente utilizar los generadores no es la solución para todos los
problemas.

Hay unos escenarios concretos en los que merece la pena considerados:

-   Estructuras infinitas.
-   Estructuras que ocupen mucha memoria, reducimos así el espacio de
    memoria a reservar.
-   La generación de los elementos es costosa, podemos retrasar su
    cálculo hasta el último momento.
-   Sabemos que la estructura no se va a consumir completamente, una
    mezcla de las dos anteriores.
-   Cuando trabajamos con otros generadores.

Más información
---------------

-   [Python Tutorial -
    Generators](http://docs.python.org/tutorial/classes.html#generators)
-   [PEP 255 -- Simple
    Generators](http://www.python.org/dev/peps/pep-0255/)
-   [What can you use Python generator functions
    for?](http://stackoverflow.com/questions/102535/what-can-you-use-python-generator-functions-for)
-   [Generator Tricks for Systems
    Programmers](http://www.dabeaz.com/generators/)

