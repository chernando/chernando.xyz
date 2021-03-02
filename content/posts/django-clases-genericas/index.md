---
title: Django, clases genéricas
datePublished: 2013-02-25 10:30:00

image:
  author: Nathália Rosa
  description: Red and white plastic bottle on white shelf
  contentUrl: ./nathalia-rosa-NGlNfTHiu7c-unsplash.jpg
  isBasedOn: https://unsplash.com/photos/NGlNfTHiu7c

tags:
  - python

redirect_from:
  - /articulos/django-clases-genericas/

---

Django es un framework para desarrollo web muy potente y muy bien
documentado. Sin embargo una de sus fortalezas, las clases genéricas,
siempre han sido un poco más complicadas de entender. La intención de
este breve artículo es revisar el módulo de genéricos e hacer una
introducción a su uso.

A parte de la experencia propia de pelearse con ellas, una gran ayuda
para entender las clases genéricas (y buenas prácticas en general) ha
sido [Two Scoops of Django](https://django.2scoops.org/). Si trabajáis
con Django, es fácil, compradlo :-)

¿Para qué sirven?
-----------------

La principal idea que hay detrás de las clases genéricas es sencilla:
reutilizar código. Es decir, mantener el principio
[DRY](http://en.wikipedia.org/wiki/Don't_repeat_yourself).

Atacamos por dos puntos: eliminando el *boilerplate code* en las vistas
más comunes y combinando la funcionalidad de diferentes bloques de
código de forma sencilla.

Por ejemplo, para obtener y mostrar un objecto utilizaríamos como vista:

~~~ python
from django.shortcuts import get_object_or_404, render_to_response
from django.template import RequestContext

from .models import Author


def author_detail(request, author_id):
    author = get_object_or_404(Author, pk=author_id)

    return render_to_response('books/author_detail.html', {'author': author},
                              context_instance=RequestContext(request))
~~~

Mientras que con la clase genérica adecuada sería:

~~~ python
from django.views.generic import DetailView

from .models import Author


class AuthorDetail(DetailView):
    model = Author
~~~

Evidentemente exige seguir ciertas convenciones. Sin embargo las clases
genéricas son flexibles y en la práctica permiten realizar lo mismo que
conseguiríamos en una vista normal.

En cuanto a combinar funcionalidad, lo iremos viendo en los siguientes
apartados.

Conceptos fundamentales de django.views.generic
-----------------------------------------------

Este módulo se divide en dos grupos: *Mixin* y *View*:

Mixin
:   es una clase que aporta un comportamiento, y

View
:   es una clase que, normalmente, agrupa varios Mixin y puede ser
    utilizada en sí misma.

Base inicial - django.views.generic.base
----------------------------------------

En *django.views.generic.base* encontramos **View** que es la clase base
para todas las vistas. Define:

-   *as\_view()* que es el método de clase que utilizamos a la hora de
    utilizar las genéricas en el urls.py. Normalmente no
    necesitaremos ampliarlo.
-   *dispatch()* que intenta obtener el verbo HTTP (get, post, etc...)
    dentro de la clase actual. Si queremos hacer alguna modificación a
    las cabeceras HTTP es un buen sitio.
-   *http\_allowed\_methods* un atributo de clase con el que podemos
    limitar que verbos HTTP que pueden utilizarse.

Dentro de los Mixin cabe destacar **ContextMixin** que define
*get\_context\_data()*. Este método se utiliza en el resto de vistas
para añadir información al contexto. Este contexto será utilizado por
**TemplateResponseMixin** para renderizar la plantilla de respuesta.
*get\_context\_data* es uno de los habituales a ampliar.

*TemplateResponseMixin* obtiene el template y renderiza con el contexto
que se le pase. El atributo *template\_name* se utiliza para indicar que
plantilla queremos utilizar y en algunos casos el método
*get\_templates\_names* se aprovecha para definir varios nombres de
posibles plantillas a utilizar.

Simplemente con estos tres elementos ya podemos crear una vista genérica
que renderice una plantilla con un contexto determinado:

~~~ python
class TemplateView(TemplateResponseMixin, ContextMixin, View):
    def get(self, request, *args, **kwargs):
        context = self.get_context_data(**kwargs)
        return self.render_to_response(context)
~~~

Que de hecho es una vista oficial. Se define el método *get* que como
vemos simplemente obtiene el contexto y renderiza la plantilla. Esta es
la ventaja de combinar varios Mixins sencillos, apoyando unos sobre
otros se consigue mucha funcionalidad.

Un ejemplo sencillo, renderizar una plantilla pasando la fecha actual:

~~~ python
class TodayView(TemplateView):
    template_name = 'today.html'

    def get_context_data(self, *args, **kwargs):
        context = super(TodayView, self).get_context_data(*args, **kwargs)
        context['today'] = datetime.date.today()
        return context
~~~

Definimos el *template\_name* y ampliamos el contexto con la fecha
actual. Hecho.

Listando modelos - django.views.generic.list
--------------------------------------------

Pasemos ahora a manejar varios objectos. **MultipleObjectMixin** es un
Mixin muy completo, nos vamos a fijar principalmente en: *model*,
*queryset* y *get\_queryset()*.

*MultipleObjectMixin* enriquece el contexto con *object\_list* al que
asocia una QuerySet, también añade un alias con el nombre del modelo y
el sufijo '\_list'.

Para obtener la QuerySet utiliza:

queryset
:   por ejemplo `queryset = Author.objects.filter(active=True)`{: .language-python}

model
:   obtiene todos sus objectos. Por ejemplo `model = Author`{: language-python} equivale a pedir `Author.objects.all()`{: language-python}.

get\_queryset()
:   sobreescribiendo la query que necesitemos. Muy práctico si queremos
    hacer consultas complejas que dependan de valores que reciba
    la vista.

Una de las ventajas de este Mixin es que incluye paginación, por defecto
el **Paginator**. De tal forma que fijando el atributo *paginate\_by*
dispondremos automáticamente de un listado paginado.

Supongamos que queremos mostrar los libros de un autor en concreto. Para
ello la vista recibe como parámetro en su url *author\_id*. Utilizaremos
**ListView**, que es una combinación más elaborada de
*MultipleObjectTemplateResponseMixin*, que amplia
*get\_template\_names*, y *BaseListView*, que es la vista base para
*MultipleObjectMixin*.

~~~ python
from django.views.generic.list import ListView

from .models import Book

class BookByAuthor(ListView)
    model = Book
    paginate_by = 25

    def get_queryset(self):
        queryset = super(BookByAuthor, self).get_queryset()
        return queryset.filter(author_id=self.kwargs['author_id'])
~~~

1.  *MultipleObjectTemplateResponseMixin* intenta utilizar
    'aplicacion/modelo\_list.html' como plantilla por defecto, en
    nuestro caso buscaría la plantilla 'library/books\_list.html'.
    Podemos seguir la convención o fijar el atributo *template\_name*
    a mano.
2.  Después modificamos el queryset, ampliando el del padre que en este
    caso sería `Books.objects.all()`{: language-python}, para luego
    añadir el filtro del autor que podemos obtener del kwargs.
3.  Con *paginate\_by* obtendremos listados limitados a 25 entradas :-)

Mostrando una entidad - django.views.generic.detail
---------------------------------------------------

Con una estructura muy similar a la vista en el módulo de listados,
destacamos **SingleObjectMixin** y **DetailView**.

*SingleObjectMixin* nos permite fijar:

model
:   igual que en el anterior para realizar el `objects.get()`{: language-python}.

queryset y get\_query\_set()
:   si queremos modificar la query.

slug
:   como funcionalidad añadida podemos obtener objectos a partir de
    su slug.

*DetailView* es la vista que reune todo el comportamiento anterior. Y de
forma análoga a los listados fija el objeto obtenido en el contexto como
*object* y un alias con el mismo nombre que el modelo.

Como ejemplo tenemos el que obtiene el autor, al principio de este
artículo.

Organizando temporalmente entidades - django.views.generic.dates
----------------------------------------------------------------

Si nuestros modelos están organizados de forma temporal, por ejemplo
entradas de un blog por mes, existen un tipo de clases genéricas que nos
hará la vida más fácil. Ya que se basa en *MultipleObjectMixin*, por lo
que podemos aplicar todo lo anterior, y lo amplía con funcionalidad para
gestionar fechas.

El módulo se compone de varios Mixins (*DayMixin*, *MonthMixin*, ect...)
que se encargan de gestionar cada parte de una fecha. En cada uno de
ellos podemos definir en que formato se representa. Por ejemplo
*MonthMixin* utiliza *mothn\_format*, por defecto a '%b', para reconocer
y representar el mes.

Junto con *DateMixin* que define *date\_field*, el campo que se
utilizará como fecha, se componen el resto de las vistas del módulo.
Importante el campo *allow\_future* que discrimina si se permiten pedir
fechas en el futuro o se muestra un error 404.

Disponemos de vistas para:

-   Días, **DayArchiveView**.
-   Semanas, **WeekArchiveView**.
-   Meses, **MothArchiveView**.
-   Año, **YearAchiveView**.

Todas estas vistas requieren fijar los parámetros correctos: *year*,
*month*, *day* o *week*.

Adicionalmente contamos con **TodayArchiveView** que limita la consulta
al día de hoy y con **DateDetailView** que nos muestra un objecto en
concreto.

Todas las vistas enriquecen el contexto para poder realizar una
paginación por el intervalo de tiempo elegido.

Formularios y edición - django.views.generic.edit
-------------------------------------------------

A la hora de recibir datos del usuario se prefiere el uso de los
formularios. Los formularios nos permiten describir la entrada esperada
y utilizar los validadores correctos, de tal forma que podamos procesar
la entrada del usuario más cómodamente. Las clases genéricas se basan en
este principio.

Empecemos con los formularios. Disponemos de **FormMixin** con:

initial y get\_initial()
:   Nos permite definir un diccionario que será utilizado para proveer
    los datos iniciales del formulario.

from\_class y get\_form\_class()
:   Aquí definimos la *clase* del formulario que queremos utilizar para
    este Mixin.

get\_form()
:   Construye el formulario a partir de la clase
    especificada anteriormente. O bien podemos sobreescribir la
    construcción del formulario.

form\_invalid()
:   Acciones a realizar si el formulario es incorrecto. Por defecto
    vuelve a presentar el formulario con sus errores.

form\_valid()
:   Acciones a realizar cuando el formulario es correcto. Este es el
    método que necesitamos sobreescribir para codificar la lógica
    a realizar.

success\_url y get\_success\_url()
:   Definen la URL a la que ir una vez el formulario se haya ejecutado
    `form_valid()`{: language-python}.

Con esto tenemos podemos importar el formulario adecuado y realizar las
acciones correctas. Por ejemplo utilizando **FormView** podemos recibir
peticiones del usuario:

~~~ python
from django.core.urlresolvers import reverse_lazy
from django.views.generic import FormView

from .forms import AskAuthorForm

class AskAuthor(FormView):
    form_class = AskAuthorForm
    success_url = reverse_lazy('book_list')

    def form_valid(self, form):
        # Acciones
~~~

1.  Incluímos el formulario *AskAuthorForm*, que posiblemente defina un
    selector de autores disponibles y un campo de preguntas.
2.  Fijamos en *form\_valid* las acciones a realizar, por ejemplo enviar
    la pregunta por correo electrónico.
3.  Utilizamos **reverse\_lazy** para obtener la URL asociada a
    *book\_list* de forma perezosa. Si utilizamos *reverse* al ser una
    inicialización a nivel de clase no estará disponible y Django
    fallará con un mensaje bastante oscuro.
4.  En el template dispondremos de la variable *form*.

Ahora bien, si queremos gestionar entidades al igual que en formularios
disponemos de *ModelForm* en las clases genéricas disponemos de
**ModelFormMixin**.

*ModelFormMixin* intenta obtener el formulario o bien del atributo
*form\_class* o bien genera un *ModelForm* a partir del atributo
*model*. En la práctica las únicas diferencias respecto al *FormMixin*
son:

1.  El `form_valid()`{: language-python} ejecuta `form.save()`{: language-python}. Al esperar un *ModelForm* si el formulario es correcto
    intentará guardarlo.
2.  En el template dispondremos a parte de *form* de *object*, con el
    modelo actual. Siempre que sea una edición de un modelo
    ya existente.

Con *ModelFormMixin* se construyen las vistas **CreateView**,
**UpdateView** y **DeleteView**. Veamos un ejemplo de cómo quedarían.

~~~ python
from django.core.urlresolvers import reverse_lazy
from django.views.generic.edit import CreateView, UpdateView, DeleteView

from .models import Book

class BookCreate(CreateView):
    model = Book

class BookUpdate(UpdateView):
    model = Book

class BookDelete(DeleteView):
    model = Book
    success_url = reverse_lazy('book_list')
~~~

En caso de que no especifiquemos un *success\_url* intentará utilizar
*get\_absolute\_url()* del modelo.

Por defecto, *CreateView* y *UpdateView* utilizan como plantilla
'applicación/modelo\_form.html' mientras que *DeleteView* utiliza
'applicación/modelo\_confirm\_delete.html'.

Más Mixins - django-braces
--------------------------

Hasta aquí lo que nos puede ofrecer Django de fábrica. Veamos un
proyecto muy interesante llamado
[django-braces](http://django-braces.readthedocs.org/). Braces incluye
varios Mixins que nos van a permitir completar nuestras clases
genéricas. Su documentación es bastante clara así que solamente vamos a
ver un par de ejemplos rápidos.

Supongamos que en nuestra ficha de autor queremos incluir información de
su usuario. Para hacer la consulta más óptima queremos que el ORM
utilice *select\_related*. Bien podemos sobreescribir *get\_queryset* o
bien podemos utilizar uno de los Mixins de braces:
**SelectRelatedMixin**

~~~ python
from django.views.generic import DetailView

from braces.views import SelectRelatedMixin

from .models import Author

class AuthorDetail(SelectRelatedMixin, DetailView):
    select_related = ['user']
    model = Author
~~~

Hecho :-)

Ahora queremos que solamente los usuarios que sean staff puedan
registrar nuevos libros. Sencillo utilizamos **StaffuserRequiredMixin**.

~~~ python
from django.views.generic.edit import CreateView

from braces.views import StaffuserRequiredMixin

from .models import Book

class BookCreate(StaffuserRequiredMixin, CreateView):
    model = Book
~~~

Hecho :-)

Incluye también un recurso
[JSONResponseMixin](http://django-braces.readthedocs.org/en/latest/#jsonresponsemixin)
que resulta una alternativa bastante ligera para publicar contenidos en
formato JSON.

Resumiendo
----------

Las clases genéricas son un recurso muy poderoso a la hora de
desarrollar en Django. Es un ejemplo de lo que la herencia múltiple
puede conseguir (si se tiene cuidado ;-) ).

En este artículo he intentado condensar los principales puntos a la hora
de utilizar las clases genéricas. Sin embargo no hemos revisado todos
los detalles, por ejemplo no hemos visto como quedarían las plantillas,
así que os recomiendo que volváis a revisar [Class-based views - Django
Documentation](https://docs.djangoproject.com/en/dev/topics/class-based-views/).

Espero que con este repaso general al módulo de genéricos os sirva para
sacarle todo el provecho a la documentación oficial y las clases
genéricas.

Más información
---------------

-   [Class-based views - Django
    Documentation](https://docs.djangoproject.com/en/dev/topics/class-based-views/)
-   [Two Scoops of Django](https://django.2scoops.org/)
-   [django-braces](http://django-braces.readthedocs.org/)

