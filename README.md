# MEAN Full Stack [![MIT license](http://img.shields.io/badge/license-MIT-lightgrey.svg)](http://opensource.org/licenses/MIT)


The frontend is generated with [Angular CLI](https://github.com/angular/angular-cli). The backend is made from scratch. The whole stack is written in [TypeScript](https://www.typescriptlang.org).

This project uses the [MEAN stack](https://en.wikipedia.org/wiki/MEAN_(software_bundle)):
* [**M**ongoDB](https://www.mongodb.com): database
* [**E**xpress.js](https://expressjs.com): backend web application framework running on top of Node.js
* [**A**ngular 2+](https://angular.io): front-end web app framework; runs your JavaScript code in the user’s browser, allowing your application UI to be dynamic
* [**N**ode.js](https://nodejs.org): JavaScript runtime environment – lets you implement your application back-end in JavaScript

Other tools and technologies used:
* [Mongoose.js](https://mongoosejs.com): MongoDB object modeling 
* [Angular CLI](https://cli.angular.io): frontend scaffolding
* [Bootstrap](https://getbootstrap.com): layout and styles
* [Font Awesome](https://fontawesome.com): icons
* [JSON Web Token](https://jwt.io): user authentication
* [Angular 2 JWT](https://github.com/auth0/angular2-jwt): JWT helper for Angular 2+
* [Bcrypt.js](https://github.com/dcodeIO/bcrypt.js): password encryption

## Prerequisites
1. [Git](https://git-scm.com/)
2. [Node.js](https://nodejs.org/en/download/) 
3. npm - comes with Node.js
4. [MongoDB](https://www.mongodb.com/download-center/community)
5. [Angular-CLI](https://cli.angular.io/)

About Git, see [How to Install Git on Linux, Mac or Windows](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/), January 29, 2019 by Linode

About Angular-CLI, run `npm i -g @angular/cli`

## Installation

```bash
git clone https://github.com/atao60/MEAN-Full-Stack mean-full-stack
cd mean-full-stack
npm install
npm dev:start
```

## Run

### Development mode

Run the application:

```bash
npm run dev:start
```
With [concurrently](https://github.com/kimmobrunfeldt/concurrently), it will launch MongoDB and execute the application with Angular build, TypeScript compiler and Express server.

Open a browser at [localhost:4200](http://localhost:4200). Angular and Express files are being watched. Any change automatically creates a new bundle, restart Express server and reload your browser.

### Production (Stage) mode

Run the application:

```bash
npm run stage:start
```
It will launch MongoDB, build the project with a production bundle and AOT compilation then run it with server listening at [localhost:3000](http://localhost:3000).

## Deploy on Docker

***TODO***

## Preview

![Preview](https://raw.githubusercontent.com/atao60/MEAN-Full-Stack/master/demo.gif "Preview")

## Running tests

Run `ng test:start` to execute the backend tests (via [Mocha](https://mochajs.org/)) and frontend unit tests (via [Karma](https://karma-runner.github.io)).

Run `ng e2e:start` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Running linters

Run `npm run lint` to execute both the frontend and backend TS linting via [TSLint](https://github.com/palantir/tslint).

Run `npm run lint:client` to execute the frontend TS linting via [TSLint](https://github.com/palantir/tslint).

Run `npm run lint:server` to execute the backend TS linting via [TSLint](https://github.com/palantir/tslint).

Run `npm run lint:html` to execute the frontend HTML linting via [HTMLHint](https://github.com/htmlhint/HTMLHint).

Run `npm run lint:scss` to execute the frontend SCSS linting via [SASS-Lint](https://github.com/sasstools/sass-lint).

## Wiki

To get more help about this project, [visit the official wiki](https://github.com/atao60/MEAN-Full-Stack/wiki).

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Credits & License

[DavideViolante/Angular-Full-Stack](https://github.com/DavideViolante/Angular-Full-Stack), Angular Full Stack project built using Angular 2+, Express, Mongoose and Node - And Bootstrap. Whole stack in TypeScript. 

[MEAN](http://mean.io/), without Typescript, with Material, not Bootstrap

[madhums/node-express-mongoose](https://github.com/madhums/node-express-mongoose), alike MEAN above

[mkg20001/wait-for-mongo](https://github.com/mkg20001/wait-for-mongo)


[MIT License](./LICENSE)



