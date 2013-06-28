'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('<%= _.camelize(appname) %>App'));

  var scope,
    controller,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
    
    scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    controller = $controller;

    $httpBackend.when('GET','/awesomethings').respond([
      { id: 1, name: 'one' },
      { id: 2, name: 'two' },
      { id: 3, name: 'three' },
      { id: 4, name: 'four' },
      { id: 5, name: 'five'} ]);
  
  }));

  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

  it('should attach a list of awesomeThings to the scope', function () {
    $httpBackend.expectGET('/awesomethings');
   
    var MainCtrl = controller('MainCtrl', {
      $scope: scope
    });

    $httpBackend.flush();
    expect(scope.awesomeThings.length).toBe(5);
  });

});
