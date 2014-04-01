# AngularJS / SailsJS / Restangular generator
[![Build Status](https://secure.travis-ci.org/chiefy/generator-sails-angular.png?branch=master)](https://travis-ci.org/chiefy/generator-sails-angular)

## Coming Soon (0.2.0)!
- Sails 0.9.x / 0.10 support
- angularSails integration
- browserify support
- ui-router integration
- gulp / grunt improvements

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
