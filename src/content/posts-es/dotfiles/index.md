---
title: "Cómo gestionar tus dotfiles con dotbot"
description: "¿Qué son los dotfiles? ¿Cómo puedo compartirlos en GitHub? Utilizaremos dotbot para gestionarlos y muestro mis dotfiles preferidos."
publishDate: 2018-04-16
tags: ["configuracion", "herramientas", "principiantes"]
language: "es"
image: ./goran-ivos-T8LMIN09-mo-unsplash.jpg
imageAlt: "Compiling by Goran Ivos"
imageDescription: "Developer's workspace showing code compilation in progress, representing the systematic configuration and automation that dotfiles bring to development environments"
imageAuthor: "Goran Ivos"
imageAuthorUrl: "https://unsplash.com/@goran_ivos"
imagePhotoUrl: "https://unsplash.com/photos/T8LMIN09-mo"
readingTime: 8
featured: false
draft: false
translationKey: "dotfiles-management"
---

Uno de los placeres de ser desarrollador es tunear tus herramientas de trabajo. Horas y horas revisando documentación, artículos de trucos y oscuras referencias para conseguir ese comportamiento deseado. También está lo de picar código y ganar dinero. Pero eso es trabajo 😉

Hoy en día trabajamos con dos tipos de herramientas: las que están online, que ya guardan tus preferencias, y las que ejecutamos en nuestros ordenadores. Estas últimas utilizan dotfiles.


## ¿Qué son los dotfiles?

Los dotfiles son dot files, ficheros que empiezan con un `.`.

En sistemas UNIX todos los ficheros que empiezan con un `.` se consideran ficheros ocultos. Ocultos en el sentido de que no aparecen si no los listas de forma explícita. Por ejemplo:

```bash
ls -1
Desktop
Documents
Downloads
Library
Movies
Music
Pictures
Public

ls -A -1
.CFUserTextEncoding
.DS_Store
.Trash
.android
# Muchos ficheros más
Desktop
Documents
# Ficheros de antes
```

Este tipo de ficheros se utilizan para guardar cosas que no quieres que el usuario vea (o toque). En nuestro caso, los ficheros de configuración. Si echas un vistazo seguro que encuentras cosas curiosas.


## Compartiendo nuestras configuraciones favoritas

Lo más probable es que trabajes con dos o más ordenadores y quieras compartir tus configuraciones entre ambos. O simplemente te gusta reinstalar tu equipo de vez en cuando y quieres conservarlas.

No estás solo. Hace unos años se puso de moda el "movimiento" dotfiles por GitHub con esa intención pero con un añadido más: compartirlo con el mundo. Y es una gran idea ya que:

* Los ficheros dotfiles suelen ser texto plano.
* Git está disponible en todas partes y es un control de versiones ligero.
* Todo el mundo puede aprender tus trucos (y también secretos, ¡**no** los subas!).

Todo empieza creando un repositorio `dotfiles` en GitHub y el resto es subir tus dotfiles 😎.


## Herramientas para gestionar tus dotfiles

Para que tus dotfiles hagan efecto tienen que estar en la ruta correcta. Normalmente en tu home `~/`. Hay que sacarlos del repositorio de alguna manera.

Algunos utilizan scripts que básicamente enlazan los dotfiles del repositorio a su home. Algo como esto:

```bash
for i in *; do
    ln -s $i ~/.$i
done
```

Y ahora se van complicando las cosas: ¿y si el destino no es `~/`? ¿y si necesito descargar algo?... Llegaron las herramientas.

Dentro del epígrafe *General-purpose dotfile utilities* de <https://dotfiles.github.io/> puedes encontrar unos cuantos. En mi caso utilizo [Dotbot](https://github.com/anishathalye/dotbot), muy sencillo y hecho con Python.


### Utilizando dotbot para gestionar tus dotfiles

Partimos de un par de dotfiles que ya tenemos preparados: nuestras preferencias de Git, `.gitconfig`, y nuestra configuración de [Neovim](https://neovim.io/), `init.vim`.

```bash
mkdir dotfiles
cd dotfiles
git init
mv ~/.gitconfig gitconfig
mv ~/.config/nvim/init.vim init.vim
ls -A -1
.git
gitconfig
init.vim
```

Repositorio preparado. Añadamos Dotbot:

```bash
git submodule add https://github.com/anishathalye/dotbot.git
Cloning into '/Users/chernando/.dotfiles/dotbot'...
remote: Counting objects: 665, done.
remote: Compressing objects: 100% (32/32), done.
remote: Total 665 (delta 28), reused 46 (delta 26), pack-reused 607
Receiving objects: 100% (665/665), 167.38 KiB | 786.00 KiB/s, done.
Resolving deltas: 100% (344/344), done.
```

Estamos utilizando los submódulos de Git. En la práctica es un repositorio dentro de otro. Añadamos el script que se encargará de ejecutar Dotbot y sus dependencias:

```bash
cp dotbot/tools/git-submodule/install .
ls -A -1
.git
.gitmodules
dotbot
gitconfig
init.vim
install
```

Y ahora configuremos Dotbot:

```bash
$EDITOR install.conf.yaml
```

con el siguiente contenido:

```yaml
- defaults:
    link:
      create: true
      relink: true

- clean: ['~']

- link:
    ~/.gitconfig: gitconfig
    ~/.config/nvim/init.vim: init.vim
```

¡Listo! En la sección de `defaults.links` queremos que cree los directorios necesarios y que reenlace los dotfiles en caso de existir. Limpiamos los enlaces que se hayan quedado huérfanos y enlazamos nuestros dotfiles. Probemos:

```bash
./install
Submodule 'lib/pyyaml' (https://github.com/anishathalye/pyyaml) registered for path 'dotbot/lib/pyyaml'
Cloning into '/Users/chernando/.dotfiles/dotbot/lib/pyyaml'...
Submodule path 'dotbot/lib/pyyaml': checked out 'f30c956c11aa6b5e7827fe5840cc9ed40b938d17'
All targets have been cleaned
Creating link ~/.gitconfig -> /Users/chernando/.dotfiles/gitconfig
Creating link ~/.config/nvim/init.vim -> /Users/chernando/.dotfiles/init.vim
All links have been set up

==> All tasks executed successfully
```

A partir de este momento podemos clonar nuestro repositorio en cualquier máquina, ejecutar `./install` y disfrutar de nuestras configuraciones.

🔖 Recuerda hacer el commit y subirlo a GitHub.


## Mis dotfiles

Algo de autopromoción era innevitable.

<https://github.com/chernando/dotfiles>

Recientemente he reiniciado todas mis configuraciones. De vez en cuando viene bien cuestionarte tus hábitos 🐵.

En mi día a día paso gran parte del tiempo en la terminal. Con tres tipos de programas:

* Una shell: [Zsh](http://www.zsh.org/).
* Un control de versiones: [Git](https://git-scm.com/).
* Un editor: [Neovim](https://neovim.io/).

Normalmente ya tengo muchas cosas en la cabeza por lo que no copio y pego dotfiles de otras personas. Luego no soy capaz de recordar todo o peor aún me confundo 🤯 Así que voy añadiendo configuraciones poco a poco. Dicho esto, libre albedrío para todos.


### Zsh

Mucha gente utiliza [oh my zsh](http://ohmyz.sh/) pero personalmente lo encuentro muy cargado. Llevo unos meses utilizando [Prezto](https://github.com/sorin-ionescu/prezto) y a duras penas he tenido que cambiar la configuración de fábrica.


### Git

Otra herramienta que con los años tiene una configuración de fábrica óptima. Mi recomendación es que configures `core.excludeFiles` con los ficheros que suelas generar en tu entorno. En mi caso es una combinación de ficheros generados por macOS y por Vim.


### Neovim

Muchos, muchos años de [Vim](https://www.vim.org/) a las espaldas pero estos últimos me he pasado a Neovim. Aquí podría hablar durante horas de todos los plugins y trucos que he visto... al final pocos han perdurado.

Actualmente estoy probando [minpac](https://github.com/k-takata/minpac) como gestor de plugins. Sencillo, quizás demasiado, y con soporte para `packages` y `jobs` de Vim 8.

Otro plugin interesante es [Asynchronous Lint Engine](https://github.com/w0rp/ale). Ejecuta en segundo plano todo tipo de linters dando esa sensación de IDE marcando los errores según escribes código.


## En resumen

Tener tus dotfiles organizados no cuesta nada y son todo ventajas 😎. ¡Anímate!.

Si necesitas más inspiración consulta <https://dotfiles.github.io/> para encontrar dotfiles de otros usuarios, herramientas y guías.

