---
title: "3 proyectos Python para empezar con Serverless"
description: "Charla para Python Madrid en la que introduzco las arquitecturas Serverless y propongo tres proyectos con los que empezar en Python."
publishDate: 2017-09-06
lastModified: 2019-06-13
tags: ["charlas", "python", "serverless"]
language: "es"
image: ./charla-python-madrid-serverless.jpg
imageAlt: "Portada de la grabación de la charla"
imageDescription: "Screenshot of a technical presentation about Serverless Python, showing the speaker introducing three practical projects for getting started with serverless architecture"
readingTime: 7
featured: false
draft: false
translationKey: "python-serverless-projects"
---

---

El [meetup de Python Madrid](https://www.meetup.com/python-madrid/) me invitó a dar una charla sobre Python y cómo empezar a utilizar Serverless.

En este artículo puedes ver la grabación de la charla y las transparencias.

## Contenidos de la charla

La charla comienza introduciendo [qué es Serverless](../que-es-serverless-baas-y-faas/).

Pasamos al bloque principal que propone tres proyectos o acercamientos sencillos para empezar a utilizar Python.

1. Refinar scripts de mantenimiento.  
Con el fin de proteger los scripts de mantenimiento y controlar su ejecución se plantea cómo migrarlos dentro de una AWS Lambda.

1. Migrar un crontab o un Celery Beat a CloudWatch Events.  
Tener un ejecutor de tareas periódicas es operacionalmente complejo. Solamente podemos tener uno en ejecución. En este proyecto planteamos cómo delegar esa responsabilidad a CloudWatch Events.

1. Propocionar un interfaz HTTP a pequeños servicios.  
Es habitual desarrollar pequeños fragmentos de código que requieren ser ejecutados con llamadas HTTP / REST. Llevar estos servicios a producción suele ser más trabajoso que el propio desarrollo. Por ello planteamos cómo moverlos a Serverless.

1. FaaS como pegamento entre eventos.  
El planteamiento de orientación a eventos de las arquitecturas Serverless nos permiten utilizar Lambda (u otra solución FaaS) para poder incluir el código exclusívamente necesario para poder encadenarlos. Este es el ejemplo más clásico.

Cada escenario presenta una herramienta relacionada con Serverless y incluye mis comentarios personales.

## Vídeo

https://youtu.be/BPJI2zApuug


## Transparencias

<iframe id="talk_frame_405882" class="speakerdeck-iframe" src="//speakerdeck.com/player/9684a936bb7f4173a72f382c7f5f47f2" width="710" height="399" style="aspect-ratio:710/399; border:0; padding:0; margin:0; background:transparent;" frameborder="0" allowtransparency="true" allowfullscreen="allowfullscreen"></iframe>


## Referencias

1. Tendencia de Serverless <https://trends.google.com/trends/explore?date=2014-01-01%202017-08-27&q=serverless>

1. Serverless Computing and Applications <https://aws.amazon.com/serverless/>

1. Serverless beyond Functions <https://medium.com/cloud-academy-inc/serverless-beyond-functions-cd81ee4c6b8d>

1. Serverless Framework <https://serverless.com>

1. AWS Serverless Application Model (AWS SAM) prescribes rules for expressing Serverless applications on AWS. <https://github.com/awslabs/serverless-application-model>

1. Python Serverless Microframework for AWS <https://github.com/aws/chalice>

1. Serverless Image resizing (AWS Lambda and AWS s3) <http://blog.kaliloudiaby.com/index.php/serverless-image-resizing-aws-lambda-and-aws-s3/>
