/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('sails-angular generator', function () {

  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('sails-angular:app', [
        '../../app',
        [helpers.createDummyGenerator(),'angular:app']
      ]);

      this.app.options['skip-install'] = true;
      
      done();

    }.bind(this));
  });

  it('creates expected files', function (done) {
    
    var expected = [
      // add files you expect to exist here.
      '.jshintrc',
      '.editorconfig',
      'bower.json',
      'package.json',
      'Gruntfile.js',
      'views',
      'views/layout.ejs',
      'views/404.ejs',
      'views/500.ejs',
      'views/home/index.ejs',
      'app/views/main.html',
      'app/scripts/app.js',
      'app/scripts/controllers/main.js',
      'api/models/AwesomeThing.js',
      'api/controllers/AwesomeThingsController.js',
      'api/controllers/HomeController.js',
      'api/policies/authenticated.js',
      'assets/mixins/sails.io.js',
      'assets/mixins',
      'config/adapters.js',
      'config/application.js',
      'config/assets.js',
      'config/bootstrap.js',
      'config/io.js',
      'config/local.ex.js',
      'config/local.js',
      'config/locales/english.js',
      'config/policies.js',
      'config/routes.js',
      'config/session.js',
      'config/views.js'
    ];

    this.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
 
  });

});
