# MEAN Full Stack [![Dependencies](https://david-dm.org/atao60/MEAN-full-Stack.svg)](https://david-dm.org/atao60/MEAN-Full-Stack) [![MIT license](http://img.shields.io/badge/license-MIT-lightgrey.svg)](http://opensource.org/licenses/MIT)


This project uses the [MEAN stack](https://en.wikipedia.org/wiki/MEAN_(software_bundle)):
* [**M**ongoDB](https://www.mongodb.com): database
* [**E**xpress.js](https://expressjs.com): backend web application framework running on top of Node.js
* [**A**ngular 2+](https://angular.io): front-end web app framework; runs your JavaScript code in the user’s browser, allowing your application UI to be dynamic
* [**N**ode.js](https://nodejs.org): JavaScript runtime environment – lets you implement your application back-end in JavaScript

The frontend is generated with [Angular CLI](https://cli.angular.io). The backend is made from scratch. The whole stack is written in [TypeScript](https://www.typescriptlang.org).

Other tools and technologies used:
* [Mongoose.js](https://mongoosejs.com): MongoDB object modeling 
* [Bootstrap](https://getbootstrap.com) with [Ng-Bootstrap](https://ng-bootstrap.github.io): layout, styles and widgets
* [Font Awesome](https://fontawesome.com): icons
* [Google Fonts](https://fonts.google.com/): fonts for the WEB
* [JSON Web Token](https://jwt.io): user authentication
* [Angular 2 JWT](https://github.com/auth0/angular2-jwt): JWT helper for Angular 2+
* [Bcrypt.js](https://github.com/dcodeIO/bcrypt.js): password encryption

## Prerequisites<sup>(1)</sup>

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/en/download/)
* [Npm](https://www.npmjs.com/) - comes with Node.js
* [MongoDB](https://www.mongodb.com/download-center/community)
* [Chrome](https://www.google.com/chrome/)
* [Angular-CLI](https://cli.angular.io/)

Check prerequisites' status:
```bash
git --version
mongod --version
node --version # (2)
npm --version 
google-chrome --version # (2)
npm list -g --depth 0 2>&1 | grep @angular/cli # (3)
```
> <sup>(1)</sup> About installing Git, see [How to Install Git on Linux, Mac or Windows](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/), January 29, 2019 by Linode.  
About installing Node.js, Npm, Node & Angular-CLI, see e.g. [How to Install and Setup Angular 7 on Ubuntu 18.04.1](https://www.techomoro.com/how-to-install-and-setup-angular-7-on-ubuntu-18-04-1/), October 31, 2018 by Syamlal CM. For others OS, adequate similar articles are available on the net.

> <sup>(2)</sup> To avoid trouble with Protractor 5.4.2, Node version should be at least 10.15.3 and Chrome version at least 74.0.3729.131-1. Check that `webdriver-manager` is in version 12.1.4. If needed, run `npm i -D protractor`: with Node 10.15.3+, it will update `webdriver-manager` with the requiered version.

> <sup>(3)</sup> See below about rechecking Angular-CLI's status under the project's folder.

## Installation

```bash
git clone https://github.com/atao60/MEAN-Full-Stack mean-full-stack
cd mean-full-stack
cp .env.example .env
npm install
```
Check @angular/cli and npm packages' status:

```bash
npm outdated # See notes below
npm audit
ng --version
```

> About `typescript`: its version is constrained to ">=3.4 <3.5" to please @angular/compiler-cli and @angular-devkit/build-angular.

## Run

All the npm scripts should work as it under Linux and Windows.

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

## Preview

![Preview](https://raw.githubusercontent.com/atao60/MEAN-Full-Stack/master/demo.gif "Preview")

## Running tests

Run `ng test:start` to execute the backend unit tests (via [Mocha](https://mochajs.org/)) and frontend unit tests (via [Karma](https://karma-runner.github.io)).

Run `npm run test:client:start` to execute the frontend unit tests via [Karma](https://karma-runner.github.io).

Run `npm run test:server:start` to execute the backend unit tests via [Mocha](https://mochajs.org/).

Run `ng e2e:start` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Running linters

Run `npm run lint` to execute both the frontend and backend TS linting via [TSLint](https://github.com/palantir/tslint).

Run `npm run lint:client` to execute the frontend TS linting via [TSLint](https://github.com/palantir/tslint).

Run `npm run lint:server` to execute the backend TS linting via [TSLint](https://github.com/palantir/tslint).

Run `npm run lint:html` to execute the frontend HTML linting via [HTMLHint](https://github.com/htmlhint/HTMLHint).

Run `npm run lint:scss` to execute the frontend SCSS linting via [SASS-Lint](https://github.com/sasstools/sass-lint).

## Running bundle analyser

First run `npm run build` (without AOP) or `npm run client:prod:build` (with AOP).

Then run either `npm run bundle-report-es5`, `npm run bundle-report-es6` or both: each script will open a browser tab with sizes of output files.

## Wiki

To get more help about this project, [visit the project wiki](https://github.com/atao60/MEAN-Full-Stack/wiki).

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Roadmap

* PWA
* Socket.io
* WebComponent
* I18n
* Technical and business logging
* Deployment on a server
* Deployment on Docker

## Credits

* [DavideViolante/Angular-Full-Stack](https://github.com/DavideViolante/Angular-Full-Stack), Angular Full Stack project built using Angular 2+, Express, Mongoose and Node - And Bootstrap. Whole stack in TypeScript. 

* [MEAN](http://mean.io/), without Typescript and with Material, not Bootstrap

* [madhums/node-express-mongoose](https://github.com/madhums/node-express-mongoose), alike MEAN above

* [mkg20001/wait-for-mongo](https://github.com/mkg20001/wait-for-mongo)

* [vielhuber/from-env](https://github.com/vielhuber/from-env)

* [Analyzing bundle size with the Angular CLI and Webpack](https://coryrylan.com/blog/analyzing-bundle-size-with-the-angular-cli-and-webpack), Cory Rylan, Mar 1, 2017, Updated Feb 25, 2018 (with Angular 8).

## License

[MIT License](./LICENSE)



