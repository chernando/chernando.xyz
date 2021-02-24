---
title: "Instalar macOS Big Sur: de cero a entorno de desarrollo"
datePublished: 2020-11-19 19:02:00

image:
  contentUrl: ./screenshot.jpg
  description: Entorno Big Sur

tags:
  - macos

---

Con cada actualización de macOS aprovecho para instalar desde cero. Con la práctica he (semi-)automatizado el proceso para tenerlo a punto en poco tiempo.

Además de ser una buena estrategia a la hora de recuperar el equipo (en caso de rotura) o que cambie de equipo (mucho menos probable) me permite hacer borrón y cuenta nueva. Una oportunidad de replantear hábitos y posibles mejoras.

Este proceso configura el sistema para:

* configurar mi entorno para el desarrollo de software,
* instalar mis aplicaciones habituales, y
* securizar y mejorar mi privacidad.

El proceso es semiautomático, es decir algunos pasos son manuales. Pero en pocas horas (dependiendo de la velocidad de conexión) todo está listo y puedo aprovechar el tiempo para leer.


## Instalar el sistema desde cero

La intención es dejar el ordenador como si viniera directamente de la fábrica. Para ello es necesario borrarlo completamente. Para ello utilizo la versión del instalador en USB, borro el disco e instalo el sistema.

### Descargar el sistema operativo y convertirlo en un instalador por USB

La documentación oficial [Cómo crear un instalador de arranque para macOS](https://support.apple.com/es-es/HT201372) se puede resumir en:

1. Descargar el sistema operativo desde el App Store
2. Copiar el instalador en un USB de al menos 16 GB:

    ```bash{outputLines:0-1000}
    sudo '/Applications/Install macOS Big Sur.app/Contents/Resources/createinstallmedia' --volume /Volumes/CHC-16GB --nointeraction --downloadassets
    ```

    Las opciones `--nointeraction` y `--downloadassets` son opcionales.

### Instalar el sistema operativo borrando el disco

Puedes seguir los pasos oficiales en [Cómo reinstalar macOS desde Recuperación de macOS](https://support.apple.com/es-es/HT204904).

En el caso de Big Sur, en el diálogo de instalación ofrece una acción secundaria para borrar el disco. Una vez borrado reinicia el proceso permitiendo instalar el sistema operativo.

### Eliminar la configuración

A pesar de borrar el disco, macOS almacena cierta información en la NVRAM. Un detalle a tener en cuenta si quieres vender tu ordenador.

Para borrarla durante el primer arranque hay que mantener pulsado `alt` + `command` + `p` + `r`. Al segundo reinicio deberías oir el sonido de arranque a un volumen diferente confirmado que la NVRAM a vuelto a su configuración de fábrica.

La documentación oficial describe con más detalle: [Restablecer la NVRAM o la PRAM del Mac](https://support.apple.com/es-es/HT204063).


## Primer arranque, usuario administrador

Una vez instalado el primer arranque nos presenta un asistente de configuración para configurar el sistema en general y registrar el primer usuario que tendrá además privilegios de administrador.

En esta fase suelo omitir todos los pasos y realizo la instalación sin tener siquiera conexión a Internet. Mi intención es activar aquellos servicios que considere interesantes más adelante.

Una buena práctica de seguridad es separar el usuario administrador del usuario de trabajo diario. Esto se traduce en el día a día con alguna ventana adicional cuando quieres cambiar cosas a nivel de sistema. Por lo que en este asistente simplemente creo una cuenta para realizar algunos pasos más de configuración y nunca más suelo utilizarla.


### Configuración general

Un vez el sistema arranca con el usuario administrador abro la aplicación de Terminal y empiezo a ejecutar comandos.


```bash{outputLines:0-1000}
#!/bin/bash

# Cambiar nombre del equipo
sudo scutil --set ComputerName MacBook
sudo scutil --set LocalHostName MacBook

# Ocultar en la pantalla de login al usuario administrador
sudo dscl . create /Users/administrador IsHidden 1

# Cifrar el disco con FileVault
sudo fdesetup enable
# NOTA: la salida de este comando es la clave de descifrado

# Configurar el firewall
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setglobalstate on
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setloggingmode off
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setstealthmode on

# Impedir que las apps puedan recibir conexiones sin mi autorización
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setallowsigned off
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setallowsignedapp off
sudo pkill -HUP socketfilterfw
```

Con esto ya puedo activar la conexión a Internet y prosigo configurando detalles generales:

```bash{outputLines:0-1000}
#!/bin/bash

# Bloquear dominios conocidos de adware y malware
curl https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts | sudo tee -a /etc/hosts

# Deshabilitar que Safari abra una web en caso de conectarme a un portal cautivo
sudo defaults write /Library/Preferences/SystemConfiguration/com.apple.captive.control.plist Active -bool false

# Configurar DNS over HTTPS
curl -o /tmp/cloudflare-https.mobileconfig https://github.com/paulmillr/encrypted-dns/raw/master/cloudflare-https.mobileconfig
open /tmp/cloudflare-https.mobileconfig
```

El último paso exige confirmación ya que el perfil no está firmado. El siguiente paso es acceder a `Preferencias del Sistema` > `Perfiles` y activar el perfil.

Gran parte de las configuraciones anteriores están basadas en las recomendaciones de https://github.com/drduh/macOS-Security-and-Privacy-Guide/blob/master/README.md

Con esto ya tengo preparado el equipo a nivel general. A continuación creo una cuenta de usuario standard (sin privilegios) y proceso a instalar mi entorno de trabajo.


## Configurando mi entorno de trabajo

A partir de aquí tengo mis scripts para instalar y configurar mis herramientas habituales.

```bash{outputLines:0-1000}
#!/bin/bash

xcode-select --install
```

Esto instala las herramientas de desarrollo más básicas necesarias para el resto de pasos.

```bash{outputLines:0-1000}
#!/bin/bash

# Mi directorio de proyectos
mkdir Work

# Instalar homebrew
mkdir ~/Library/homebrew && curl -L https://github.com/Homebrew/brew/tarball/master | tar xz --strip 1 -C ~/Library/homebrew

# Añadir homebrew al PATH
echo 'export PATH=~/Library/homebrew/bin:~/Library/homebrew/sbin:$PATH' > ~/.zprofile.local
. .zprofile.local

# Actualizar brew
brew update
brew upgrade

# Instalar software de desarrollo
brew install neovim node@14 yarn

# Instalar software general
brew cask install --appdir=~/Applications iterm2 firefox spotify slack figma google-chrome zoomus microsoft-teams

# Instalar fuente para la terminal
brew tap homebrew/cask-fonts
brew cask install font-hack-nerd-font

# Instalar software JavaScript
npm i -g expo-cli gatsby-cli @aws-amplify/cli neovim

# Instalar mis dotfiles
cd Work
git clone --recursive https://github.com/chernando/dotfiles.git
cd dotfiles
./install
```

Como puedes ver me apoyo en [mis dotfiles](../dotfiles/) para recuperar mis configuraciones de desarrollo.

Con esto debería poder abrir iTerm2 con las utilidades de CLI listas. Lo único es recuperar la configuración propia del iTerm2 que se puede enganchar al almacenamiento en la nube de iCloud.

### Configuraciones de macOS

El resto de configuraciones son propias de macOS y sus aplicaciones. Aunque no todas pueden ser replicadas en un script gracias a https://github.com/herrbischoff/awesome-macos-command-line hay muchas que son sencillas:

```bash{outputLines:0-1000}
#!/bin/bash

# Dock
# Ocultar
defaults write com.apple.dock autohide -bool true && \
killall Dock
# Mostrar solamente aplicaciones abiertas
defaults write com.apple.dock static-only -bool true && \
killall Dock
# Tamaño
defaults write com.apple.dock tilesize -int 50 && \
killall Dock
# Impedir cambiar el tamaño
defaults write com.apple.Dock size-immutable -bool yes && \
killall Dock

# Finder
# Mostrar extensiones de los ficheros
defaults write -g AppleShowAllExtensions -bool true
# No mostrar iconos en el Escritorio
defaults write com.apple.finder CreateDesktop -bool false && \
killall Finder

# Configurar Home como carpeta inicial
defaults write com.apple.finder NewWindowTarget -string "PfLo" && \
defaults write com.apple.finder NewWindowTargetPath -string "file://${HOME}"
killall SystemUIServer

# Configurar las capturas de pantalla como JPG, sin sombra en Descargas
defaults write com.apple.screencapture location ~/Downloads && \
defaults write com.apple.screencapture disable-shadow -bool true && \
defaults write com.apple.screencapture type -string "jpg"
killall SystemUIServer

# No proponer guardar en la nube por defecto
defaults write -g NSDocumentSaveNewDocumentsToCloud -bool false

# No guardar metainformación (.DS_Store) en USBs y carpetas de red
defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool true
defaults write com.apple.desktopservices DSDontWriteUSBStores -bool true

# Configurar la hora de la barra superior
defaults write com.apple.menuextra.clock DateFormat -string "HH:mm"

# Evitar que Spotlight indexe ficheros de trabajo
mdutil -i off -d ~/Work
```

Y un par de utilidades para configurar el Simulator de X Code. Para este paso necesito esperar a que X Code se instale, que indeferente a tu conexión tarda milenios. Por lo que suelo dejarlo para lo último.

```bash{outputLines:0-1000}
#!/bin/bash

xcrun simctl delete all
xcrun simctl create default "iPhone SE (2nd generation)" com.apple.CoreSimulator.SimRuntime.iOS-14-2
```

## Conclusión

Con el paso de los años estos scripts han ido mejorando pero como puedes ver soy bastante parco a la hora de hacer cambios. Principalmente para ver las nuevas novedades que incluye macOS.

### Referencias

* https://github.com/drduh/macOS-Security-and-Privacy-Guide
* https://paulmillr.com/posts/encrypted-dns/
* https://github.com/StevenBlack/hosts
* https://github.com/herrbischoff/awesome-macos-command-line
