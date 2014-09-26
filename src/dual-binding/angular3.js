'use strict';

//Creamos la app
var myApp;
myApp = angular.module('myApp', []);

//Creamos un controller
myApp.controller('TestController', ['$scope', function($scope){
  $scope.persons = [];
  $scope.id = 0;

  $scope.add = function(name){
    $scope.persons.push(
      {"id": ++$scope.id, "name": name}
    );
    $scope.newPerson = "";
  };

  $scope.delete = function(id){
    for (var i = 0; i < $scope.persons.length; i++) {
      if ($scope.persons[i].id === id){
        $scope.persons.splice(i,1);
      }
    }
  }
}]);
