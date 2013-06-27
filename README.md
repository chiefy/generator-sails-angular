# AngularJS / SailsJS / Restangular generator
[![Build Status](https://secure.travis-ci.org/chiefy/generator-sails-angular.png?branch=master)](https://travis-ci.org/chiefy/generator-sails-angular)

Generates a scaffold of a project based off of the latest generator-angular:app and includes: SailsJS for creating a simple RESTful API backend, Restangular for consuming it inside of AngularJS & Twitter Bootstrap. 

## Getting started
- Make sure you have [yo](https://github.com/yeoman/yo) installed:
    `npm install -g yo`
- Install the generators: `npm install -g generator-sails-angular generator-angular`
- Create project directory and `cd` into it: `mkdir my-new-project && cd $_`
- Run: `yo sails-angular [app-name]`

## Known Issues
 * Grunt live-reload, server, test do not work.
 * Since I'm using Restangular the generator-angular questions re: ng-resource are redundant since it's never used.
 * Need to fix Karma testing setup.

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)
