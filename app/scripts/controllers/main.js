'use strict';

/**
 * @ngdoc function
 * @name siencynApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the siencynApp
 */
angular.module('siencynApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
