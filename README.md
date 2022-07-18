[![NodeSource](https://img.shields.io/badge/N-NodeSource-success)](https://nodesource.com)
[![NPM](https://img.shields.io/badge/npm-v8.1.4-red)](https://www.npmjs.com/)
[![Node.js](https://img.shields.io/badge/Node.js-v17.2.0-brightgreen)](https://nodejs.org/es/)
[![Angular](https://img.shields.io/badge/Angular-v13.0.3-red)](https://angular.io/)


# Portfolio
Realización de Porfolio web para Segunda Etapa de Argentina Programa.

### Install Nodejs

```sh
# Note: https://github.com/nodesource/distributions/blob/master/README.md#deb
curl -fsSL https://deb.nodesource.com/setup_17.x | sudo -E bash -

sudo apt-get install -y nodejs

```

>If have a problem with that so look at this:
>
>https://github.com/nodesource/distributions/issues/1157


### Instal TypeScript

Have two ways:

1. Install TS a general level

```sh

npm install -g typescript

```

2. Install TS how complement of vscode.


### Install Angular 

```sh
# Install the latest version of angular.
sudo npm install -g @angular/cli@latest

```
> The name of the project cannot' have spaces in white or special characters, only letters and numbers. After you have entered the command, asks if you want to add the routing of angular, this is optional as it can be added manually if necessary.

### Uninstall

```sh 
sudo apt remove nodejs
sudo apt remove nodejs-doc
sudo apt autoremove
sudo apt --fix-broken install
sudo apt update 
# Re-install
curl -fsSL https://deb.nodesource.com/setup_17.x | sudo -E bash -
sudo apt-get install -y nodejs
# Check the version, remember the odd numbered versions will not enter LTS status and not be used for production.
node -v
```

**Uninstall something of apt packages**

```sh
# Uninstall name-of-packages.
sudo apt remove name-of-packages

```

### Create a project with angular

```sh

mkdir first-project

cd first-project

ng new first-project

```

### Build and Rebuilding app server

```sh

ng serve

```
### Install Bootstrap

```sh

npm install bootstrap

```


## Use Angular


### Generate component

```sh
# Generate a directory and component nombre-componente
ng g c componentes/'nombre-componente'

```

### Generate service

```sh
# Generate a directory and service nombre-servicio
ng g c servicios/'nombre-servicio'

```

### BD

First install the json-server

```sh
# Start the server for have bd.
npm install json-server

```

> This is for emular a bd, save, update and modify the file .json

```sh
# Start the server for have bd.
npm run server

```


# Deploy

Para instalar las Firebase Tools, necesitas primero tener instalado NodeJS y NPM, una vez que hayas instalado estas dependencias:

```sh
# Intall firebase
npm install -g firebase-tools

```

Ya que tienes una cuenta creada y un proyecto configurado, necesitas enlazar tu cuenta de Firebase con las firebase-tools que previamente instalaste. Para eso debes ejecutar el siguiente comando en la terminal:


```sh
firebase login
```

Inicialmente se te preguntará si quieres que tu información de uso de la herramienta sea compartida con Firebase o no, si decidas compartir tus datos escribe Y, si no, escribe n, luego presiona Enter.

Este comando deberá automáticamente abrir en tu navegador web una página para que selecciones la cuenta con la que enlazarás tu herramienta de la terminal, adicionalmente puedes copiar la URL que aparece en negritas en la terminal, en la barra de direcciones de tu navegador para ver la misma página.

Ahí, selecciona la cuenta con la que quieres enlazar la terminal, debe ser la misma que creaste en el paso anterior, para usar el proyecto que creamos. Una vez que autorices los permisos para la app de Firebase, automáticamente la terminal detectará que ya autorizaste y enlazaste tu aplicación mostrando un mensaje como el siguiente:

```sh
✔ Success! Logged in as argentinaprograma.ar
```


Para subir tu proyecto al hosting cloud de Firebase, debes primero posicionar la terminal en la carpeta que contiene el proyecto. Como este ejemplo está orientado a una aplicación de angular, el primer paso para la subida será genera el build de Angular.

El buid es una versión optimizada de nuestra aplicación, en la que el código fue comprimido, reducido y optimizado para que cargue más rápido, sea de menor tamaño y en general mejore su rendimiento. Para generar el build coloca el siguiente comando en la Terminal o el CMD:


```sh
ng build
```
***

```sh
#result de ng build
Date: 2018-07-15T06:18:49.945Z
Hash: 8ee114542ed8a659f7e1
Time: 7756ms
chunk {main} main.js, main.js.map (main) 55 kB [initial] [rendered]
chunk {polyfills} polyfills.js, polyfills.js.map (polyfills) 227 kB [initial] [rendered]
chunk {runtime} runtime.js, runtime.js.map (runtime) 5.22 kB [entry] [rendered]
chunk {styles} styles.js, styles.js.map (styles) 16.1 kB [initial] [rendered]
chunk {vendor} vendor.js, vendor.js.map (vendor) 3.11 MB [initial] [rendered]
```

Esto quiere decir que el build de tu aplicación fue generado con éxito, para comprobarlo debes verificar que se añadió una carpeta dist en tu proyecto de Angular.


Para comenzar con la subida ejecuta el comando init de Firebase Tools para que la herramienta configure el proyecto como un proyecto de Angular, y además, enlaza el proyecto que previamente creamos en la consola de Firebase con la carpeta actual, para eso coloca el siguiente comando:


```sh
firebase init
```

1. Usando las flechas arriba/abajo selecciona qué característica de Firebase usarás, una vez que hayas seleccionado la del Hosting, presiona la barra espaciadora para activar el uso de esta característica, luego presiona Enter.

2. Usando las flechas arriba/abajo selecciona el proyecto con el que integrarás la carpeta actual, en este paso debes seleccionar el proyecto que creamos con anterioridad en este mismo artículo, presiona Enter cuando hayas seleccionado el proyecto adecuado.

3. El siguiente punto es muy importante cuando trabajamos con un proyecto de Angular, en este paso el asistente de Firebase nos pregunta qué directorio contiene nuestra aplicación, es muy importante que indiquemos que es el directorio dist/nombre-proyecto sustituye la parte de nombre-proyecto por la carpeta que veas dentro de dist:

```sh
? What do you want to use as your public directory? (public) dist/nombre-proyecto
```

4. El siguiente paso, está relacionado con las Single Page Applications, como Angular suele contener su propio router (si no lo contiene, no importa no es necesario), escribiremos y y luego presionaremos Enter. Luego de eso, Firebase notará que ya existe un archivo index.html y te preguntará si quieres que lo sobre escriba, o no, escribe ny luego Enter para indicarle que no debe sobre escribirlo y se conserve el archivo index.html de tu proyecto Angular.


Esto debe completar el asistente de Firebase y habremos configurado con éxito nuestro directorio como una app de Angular que podemos subir al Firebase Hosting. Para terminar, vamos a ejecutar el siguiente comando que se encargará de subir nuestros archivos a Firebase para que podamos visualizar nuestra página:

```sh
firebase deploy
```

***

```sh
# Si todo sale bien
=== Deploying to 'hosting-angular-56167'...

i deploying hosting
i hosting: preparing dist directory for upload...
✔ hosting: 43 files uploaded successfully

✔ Deploy complete!

Project Console: https://console.firebase.google.com/project/hosting-angular-56167/overview
Hosting URL: https://hosting-angular-56167.firebaseapp.com
```

Siendo https://hosting-angular-56167.firebaseapp.com la url a nuestro sitio.

*** 

Lo interesante de Firebase Hosting es que con una configuración muy simple, ahora tienes un flujo de desarrollo en el que cada modificación a tu aplicación puede ser publicada con un solo comando en la terminal.

Si hablamos de un proyecto de Angular, una vez que quieras subir cambios a tu página web, debes ejecutar los siguientes comandos:

```sh
ng build
firebase deploy

```

***

Para subir cambios a Firebase (Front):

```sh
ng build
firebase deploy
```
Para subir cambios Heroku (Back):

```sh
heroku login
git add .
git commit -m""
git push heroku master
```



## TO DO

* Agregar Seguridad https://argentinaprograma.inti.gob.ar/mod/page/view.php?id=139

* No pasar las entidades por las Url, utilizar método find by id.

* Agregar  fotos a las listas de experiencias eduacion etc.

* Añadir scrollspy [boostrapd](https://getbootstrap.com/docs/5.2/components/scrollspy/)


## Fixme

* Futuros:
En la línea:42 del `upgrade-about.component.ts` tenemos lo siguiente:

```js
42    this.peService.getPersonaPorId(this.id).subscribe((dato) => {
43        this.persona = dato
44        this.setValues()    <----
45    });
```

El `subscribe()` de la línea:42 nos devuelve un futuro, osea es asíncrono, por lo tanto si nosotros colocaramos el `setValues()` por fuera del futuro, de ésta forma:

```js
42    this.peService.getPersonaPorId(this.id).subscribe((dato) => {
43        this.persona = dato
44    });
45        this.setValues()    <----
```

Tendríamos un problema, y es que no se setearán con los valores que traiga el futuro, y ubicando el setValues(), dentro, tendremos una pequeña visión de los valores del objeto vacío en nuestro input, con un waitForAsync capaz se solucione, no sé usarlo.

* Skills
Animaciones de los skills, siempre muestran la misma cantidad.
[Usar spinner de angular](https://v13.material.angular.io/components/progress-spinner/examples)

### Errors and Solutions

* [dbname_hibernate_sequence_doesnt_exist](https://www.yawintutor.com/java-sql-sqlsyntaxerrorexception-table-dbname-hibernate_sequence-doesnt-exist/)


## Bibliografía || Rercursos

* Validators.pattern("\(?!\\s).+")  con ésto podemos validar q no se ingresen campos con char vacío. 

* Página para chequear [reguex](https://regex101.com/r/gC0xA6/31)

* Página de [validaciones](https://code.tutsplus.com/es/tutorials/angular-form-validation-with-reactive-and-template-driven-forms--cms-32131)

* [Componentes de angular](https://v13.material.angular.io/components/categories)

* [Componentes de Boostrap](https://getbootstrap.com/docs/5.2/components/accordion/ )
