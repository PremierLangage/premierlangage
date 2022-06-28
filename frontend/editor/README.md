# Editor

This is the editor of the project [premierlangage](https://github.com/PremierLangage/premierlangage).

## Requirements

- [Node.js & npm](https://www.npmjs.com/get-npm)
- [Angular CLI](https://cli.angular.io)

## Installation

- Run the script `install.sh` **FROM THIS DIRECTORY**

## Development server

Run the script `build-dev` **FROM THIS DIRECTORY** for an Angular dev server. Run `python3 manage.py runserver` in the folder of your local copy of premierlangage server and navigate to `http://127.0.0.1:8000`.  The app will automatically rebuild if you change any of the source files.
If you don't see the changes in your browser, restart the django server or clean your browser cache

## Build

Run the script **FROM THIS DIRECTORY** `build-prod.sh` to build the project in a production mode. The build artifacts will be stored in the `../../apps/editor/static` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
