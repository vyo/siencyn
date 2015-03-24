'use strict';

/**
 * @ngdoc function
 * @name siencynApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the siencynApp
 */
angular.module('siencynApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
