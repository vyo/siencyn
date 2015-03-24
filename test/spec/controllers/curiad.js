'use strict';

describe('Controller: CuriadCtrl', function () {

  // load the controller's module
  beforeEach(module('siencynApp'));

  var CuriadCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CuriadCtrl = $controller('CuriadCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
