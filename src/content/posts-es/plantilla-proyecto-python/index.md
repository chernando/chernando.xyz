---
title: "Estructurar un proyecto Python"
description: "Construiremos una plantilla para un proyecto Python siguiendo las buenas prácticas, explicando su estructura de directorios y herramientas."
publishDate: 2018-09-05
tags: ["python", "principiantes"]
language: "es"
image: ./chris-barton-Va_wcTWJxBg-unsplash.jpg
imageAlt: "Emerald Tree Boa by Chris Barton"
imageDescription: "Elegant emerald tree boa with intricate scales and perfect structure, representing the importance of well-organized, clean architecture in Python project templates"
imageAuthor: "Chris Barton"
imageAuthorUrl: "https://unsplash.com/@chrisbarton3d"
imagePhotoUrl: "https://unsplash.com/photos/Va_wcTWJxBg"
readingTime: 8
featured: false
draft: false
translationKey: "python-project-structure"
---

---

Siempre que aterrizo en un proyecto compruebo que hay un mínimo de estructura y las herramientas de desarrollo están configuradas. A veces mi vida no es sencilla...

En este artículo construiré desde cero un proyecto Python explicando cada paso. El resultado será una sencilla plantilla que nos permitirá pasar tests, utilizar linters y gestionar dependencias. Vamos, lo mínimo 🧐


## Comienzo del proyecto

El proyecto de ejemplo es ASD, A Simple Demostration, ✋🎤⬇️

Comenzamos creando un directorio vacio:

```bash
mkdir asd
cd asd
ls -a
. ..
```


## Control de versiones

En este caso utilizaremos [Git](https://git-scm.com/). Lo primero es iniciar el repositorio:

```bash
git init
Initialized empty Git repository in /tmp/asd/.git/
```

Ahora tenemos que asegurarnos de no incluir en el control de versiones archivos temporales o auto-generados típicos de Python. Github publica un [repositorio de .gitignores](https://github.com/github/gitignore) que podemos utilizar:

```bash
curl -o .gitignore https://raw.githubusercontent.com/github/gitignore/master/Python.gitignore
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  1272  100  1272    0     0   6386      0 --:--:-- --:--:-- --:--:--  6391
```


## Código principal en su propio directorio

En otros lenguajes tenemos la convención de utilizar el directorio `src` como raíz para el código del proyecto. En Python utilizamos el nombre del propio proyecto.

```bash
mkdir asd
touch asd/__init__.py
```

Aunque parece una redundancia (`asd/asd`) es la mejor forma de gestionar la importación de módulos sin tener que "arreglar" el `PYTHON_PATH`. Motivo de desdicha y aflicción.

Siempre que iniciemos desde el raiz del proyecto podemos hacer:

```python
import asd.MODULE
```

Esto nos permite utilizar import absolutos dentro del mismo proyecto, importar fácilmente desde los tests y empaquetar con setuptools. Es decir, vamos a favor del viento.


## Tests, tests, tests

La comunidad de Python se toma muy en serio los tests. Podría apostar que no encontraréis un proyecto serio que no tenga tests.

Hágamos un poco de TDD:

```bash
mkdir tests
touch tests/__init__.py
$EDITOR tests/test_hello.py
```

Con el siguiente contenido:

```python
import unittest

from asd.hello import hello


class HelloTestCase(unittest.TestCase):

    def test_hello(self):
        self.assertEqual(
            hello(),
            'Hello world!'
        )
```

Y ejecutemos la versión más básica de unittest:

```bash
python -m unittest discover
E
======================================================================
ERROR: tests.test_hello (unittest.loader.ModuleImportFailure)
----------------------------------------------------------------------
ImportError: Failed to import test module: tests.test_hello
Traceback (most recent call last):
  File "XXX/unittest/loader.py", line 254, in _find_tests
      module = self._get_module_from_name(name)
        File "XXX/unittest/loader.py", line 232, in _get_module_from_name
            __import__(name)
              File "/tmp/asd/tests/test_hello.py", line 3, in <module>
                  from asd.hello import hello
                  ImportError: No module named hello


----------------------------------------------------------------------
Ran 1 test in 0.000s

FAILED (errors=1)
```

Hágamos el módulo de ejemplo que pase el test:

```bash
$EDITOR asd/hello.py
```

Con la implementación más sencilla:

```python
hello = lambda: 'Hello world!'
```

Y probemos los tests:

```bash
python -m unittest discover
.
----------------------------------------------------------------------
Ran 1 test in 0.000s

OK
```

El tío Bob estaría orgulloso 😎👍


## Gestión de las dependencias con Pipenv

[Pipenv](https://pipenv.readthedocs.io/en/latest/) es el nuevo gestor de paquetes para Python. Inspirado en otros gestores como [NPM](https://www.npmjs.com/) combina la gestión de entornos `virtualenv` con una gestión de versiones y comandos mejorada.

En este caso vamos añadir una dependencia de desarrollo para incluir el linter de código PEP8.

```bash
$ pipenv install --dev pycodestyle
Creating a virtualenv for this project...
Pipfile: /private/tmp/asd/Pipfile
Using /python3.7 (3.7.0) to create virtualenv...
⠋Already using interpreter /python3.7
Using real prefix '/3.7'
New python executable in /python3.7
Also creating executable in /python
Installing setuptools, pip, wheel...done.
Setting project for asd-d3Gw_D6N to /tmp/asd

Virtualenv location: /asd-d3Gw_D6N
Creating a Pipfile for this project...
Installing pycodestyle...
Collecting pycodestyle
  Using cached https://files.pythonhosted.org/packages/e5/c6/ce130213489969aa58610042dff1d908c25c731c9575af6935c2dfad03aa/pycodestyle-2.4.0-py2.py3-none-any.whl
  Installing collected packages: pycodestyle
  Successfully installed pycodestyle-2.4.0

  Adding pycodestyle to Pipfile's [dev-packages]...
  Pipfile.lock not found, creating...
  Locking [dev-packages] dependencies...
  Locking [packages] dependencies...
  Updated Pipfile.lock (65cff7)!
  Installing dependencies from Pipfile.lock (65cff7)...
    🐍   ▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 1/1 — 00:00:00
    To activate this project's virtualenv, run pipenv shell.
    Alternatively, run a command inside the virtualenv with pipenv run.
```

Pipenv ha generado automáticamente un entorno virtual, ha registrado la dependencia en `Pipfile` y la ha marcado como opcional para el desarrollo. Antes tenías que hacer juegos malabares con un `requirements-dev.txt` y hacerte cargo del virtualenv así que no es un mal comienzo.

Y ahora para ejecutar [pycodestyle](http://pycodestyle.pycqa.org/en/latest/) o bien podemos ejecutarlo mediante pipenv o bien podemos hacer un alias. En realidad es lo mismo pero con el segundo se escribe menos 😙

```bash
pipenv run pycodestyle asd tests
asd/hello.py:1:1: E731 do not assign a lambda expression, use a def
```

Para hacerlo más corto editemos el fichero `Pipfile` y añadamos esta sección:

```ini
[scripts]
lint = "pycodestyle asd tests"
```

Ahora podemos utilizar el alias para pasar este linter:

```bash
pipenv run lint
asd/hello.py:1:1: E731 do not assign a lambda expression, use a def
```

### Alias para otros comandos

Podemos aprovechar y definir otro alias para pasar los tests:

```ini
[scripts]
lint = "pycodestyle asd tests"
test = "python -m unittest discover"
```

Otro comando clásico podría ser un `deploy` que fuerce el despliegue del proyecto. Puede que pipenv sea suficiente, si se os queda corto mi opción personal es pasar a un `Makefile`.


## Documentación, documentación, documentación

El otro requisito de la comunidad de Python es que tu proyecto esté documentado. No hay excusas.

Lo más básico es empezar con unos pocos ficheros [Markdown](https://guides.github.com/features/mastering-markdown/) que ayuden a tus usuarios o a tus compañeros de desarrollo. En este proyecto no tengo mucho que contar, pero no me utilicéis de excusa:

```bash
mkdir docs
echo '# ASD, A Simple Demostration - Index' > docs/index.md
```

De esta forma si utilizamos Github o Bitbucket podemos navegar por el directorio `docs` y leer la documentación renderizada. Sencillo y efectivo.

Si necesitamos publicar la documentación ya sea en [Read the Docs](https://readthedocs.org/) o para distribuir a clientes el siguiente paso es utilizar [Sphinx](http://www.sphinx-doc.org/en/master/). Este paso me lo voy a saltar, no todo el mundo necesita una herramienta para gestionar la documentación.


## README, ¿por dónde empiezo?

Escribir un README es todo un arte. En mi opinión, debe definir los requisitos y comandos necesarios para poder:

1. Ejecutar el proyecto.
1. Pasar los tests.

Os propongo una estructura que suelo utilizar:

```md
# ASD

> A Simple Demostration


## Requirements

* Python 3
* Pipenv `pip install pipenv`


## Setup

pipenv install --dev


## Development

### Run tests

pipenv run test

### Run linter

pipenv run lint
```

Piensa como un desarrollador que se enfrenta por primera vez al proyecto. Y añade cuanto corta/pega consideres necesario (¡gracias!).


## Resultado final

```bash
ls -1
/.git
/.gitignore
/asd
/asd/__init__.py
/asd/hello.py
/docs
/docs/index.md
/Pipfile
/Pipfile.lock
/tests
/tests/__init__.py
/tests/test_hello.py
```

Hasta aquí sería lo básico pero siempre se puede mejorar:

  * Utilizar [pytest](https://docs.pytest.org/en/latest/) para el testing, muy flexible y fácil de extender.
  * Preparar la distrubución configurando `setup.py`, con esta estructura es muy sencillo.
  * Añadir más linters, si estáis en Python 3 probad [mypy](http://mypy-lang.org/) o [Pyre](https://pyre-check.org/).

Si queréis jugar con la plantilla he creado el repo con todo lo comentado en este artículo [https://github.com/chernando/asd](https://github.com/chernando/asd). O podéis utilizar directamente la plantilla con [Cookiecutter](https://github.com/audreyr/cookiecutter):

```bash
cookiecutter gh:chernando/cookiecutter-python-simple
```
