# AngularJS / SailsJS / Restangular generator

## Deprecation notice!
This project is being deprecated and replaced with [sails-generate-frontend-angular](https://github.com/chiefy/sails-generate-frontend-angular) / [sails-generate-controller-angular](https://github.com/chiefy/sails-generate-controller-angular), please use with `sails 0.10.x`.

[![Build Status](https://secure.travis-ci.org/chiefy/generator-sails-angular.png?branch=master)](https://travis-ci.org/chiefy/generator-sails-angular)

## Requires Sails 0.8.x
I am aware that the project isn't compatible with the latest versions of SailsJS, I am planning on fixing this ASMKLM (As Soon As My Kids Let Me)

Generates a scaffold of a project based off of the latest generator-angular:app and includes: SailsJS for creating a simple RESTful API backend, Restangular for consuming it inside of AngularJS & Twitter Bootstrap. 

## Getting started
- Make sure you have [yo](https://github.com/yeoman/yo) installed:
    `npm install -g yo`
- Install the generators: `npm install -g generator-sails-angular generator-angular`
- Create project directory and `cd` into it: `mkdir my-new-project && cd $_`
- Run: `yo sails-angular [app-name]`
- To run project: `sails lift`
- To test: `grunt test`


## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)
