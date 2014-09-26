'use strict';

//Creamos la app
var myApp;
myApp = angular.module('myApp', []);

//Creamos un controller
myApp.controller('TestController', ['$scope', function($scope){
  $scope.submitted = false;
  
  $scope.submit = function(){
    $scope.submitted = true;
  };
}]);