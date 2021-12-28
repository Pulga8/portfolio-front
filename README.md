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