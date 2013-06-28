'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var rimraf = require('rimraf');

var SailsAngularGenerator = module.exports = function SailsAngularGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);
  
  this.argument('appname', { type: String, required: false });
  this.appname = this.appname || path.basename(process.cwd());
  
  this.env.register('generator-angular','angular');

  this.angularGen = this.env.create('angular:app',{ options: { 'skip-install':true } });

  // Prevent angular:app from running npm install && bower install
  // we'll do that when we're done here
  this.angularGen.removeAllListeners('end');
  
  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};
 
util.inherits(SailsAngularGenerator, yeoman.generators.Base);

SailsAngularGenerator.prototype.askFor = function askFor() {
  var cb = this.async(),
      that = this;

  // have Yeoman greet the user.
  console.log(this.yeoman);
  
  this.angularGen.on('end',function() {
    that.bootstrap = that.angularGen.bootstrap;
    that.compassBootstrap = that.angularGen.compassBootstrap;
    that.resourceModule = that.angularGen.resourceModule;
    that.cookiesModule = that.angularGen.cookiesModule;
    that.sanitizeModule = that.angularGen.sanitizeModule;

    var filesToNix = [
      '.editorconfig',
      '.gitignore',
      '.jshintrc',
      'Gruntfile.js',
      'package.json',
      'bower.json',
      'app/scripts/app.js',
      'app/scripts/controllers/main.js',
      'app/views/main.html',
      'app/index.html',
      'test/spec/controllers/main.js',
      'karma.conf.js'
    ];

    filesToNix.forEach(function(file){
      rimraf.sync(file);
    });

    cb();
  });  
  
  this.angularGen.run();
};

SailsAngularGenerator.prototype.app = function app() {
  
  this.copy('app.js');
  this.template('views/layout.ejs');
  this.copy('views/404.ejs');
  this.copy('views/500.ejs');  
  this.copy('views/main.html','app/views/main.html');
  this.template('scripts/app.js','app/scripts/app.js');
  this.template('scripts/controllers/main.js','app/scripts/controllers/main.js');
  this.template('test/spec/controllers/main.js');
  this.directory('views/home');
  this.directory('api');
  this.directory('assets');
  this.directory('config');
  
};

SailsAngularGenerator.prototype.projectfiles = function projectfiles() {
  this.template('_package.json', 'package.json');
  this.template('_bower.json', 'bower.json');
  
  this.copy('karma.conf.js');
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
  this.copy('gitignore', '.gitignore');
  this.copy('Gruntfile.js');
};
