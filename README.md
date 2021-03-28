<p align="center">
    <a href="https://github.com/yiisoft" target="_blank">
        <img src="https://avatars0.githubusercontent.com/u/993323" height="100px">
    </a>
    <h1 align="center">Administrador de Personas en Yii 2</h1>
    <br>
</p>

Bajo el template basico de Yii 2 se realiza el demo de administrador de personas y direcciones.

Este demo incluye un layout personalizado con Bootstrap 4, iconos de Font awesome 5.
Se utiliza Mysql como base de datos y Phpmyadmin como interfaz de administracion.
El demo corre bajo PHP 7.0.

Dentro del proyecto se encuentra el archivo docker-compose.yml para que se pueda inicializar con Docker.
En la carpeta migrations se encuentran 2 archivos los cuales contienen la estructura de las 3 tablas que utiliza este demo.


ESTRUCTURA DE CARPETAS
-------------------
      modules/persona                       contiene el modulo persona
      modules/persona/assets/               contiene todos los archivos css y js
      modules/persona/controllers/          contiene los controladores
      modules/persona/models/               contiene los modelos de la base mysql
      modules/persona/views/persona         contiene las vistas para el apartado de personas
      modules/persona/views/direccion       contiene las vistas para el apartado de direcciones
      modules/persona/views/layouts         contiene el layout personalizado con Bootstrap 4
      

REQUERIMIENTOS
------------
Mysql 5.7.33
PHP 7.0


INSTALACION
------------

### Instalacion con Docker compose

Tener instalado <a href="https://docs.docker.com/engine/install/" target="_blank">Docker</a> y <a href="https://docs.docker.com/compose/install/">Docker-compose</a><br>
Realizar git clone del proyecto.<br>
Entrar en la carpeta del proyecto y ejecutar docker-compose up -d --build

