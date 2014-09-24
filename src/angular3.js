'use strict';

//Creamos la app
var myApp;
myApp = angular.module('myApp', []);

//Creamos un controller
myApp.controller('TestController', ['$scope', function($scope){
  $scope.persons = [];

  $scope.add = function(name){
    $scope.persons.push(
      {"id": $scope.persons.length+1, "name": name}
    );
  };

  $scope.delete = function(id){
    $scope.persons.splice(id+1, 1);   
  }
}]);
