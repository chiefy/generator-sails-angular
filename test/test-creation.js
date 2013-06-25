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
      'views'
    ];

    this.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
 
  });

});
