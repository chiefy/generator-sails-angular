'use strict';

angular.module('<%= _.camelize(appname) %>App', ['restangular'])
  .config(function ($routeProvider, RestangularProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      RestangularProvider.setBaseUrl('');
  });
