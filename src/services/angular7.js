'use strict';

//Creamos la app
var myApp;
myApp = angular.module('myApp', []);

//Definimos el service
myApp.service('myService', ['$http', function($http){
  this.getData = function(callback){
    $http.get('customers.json').success(function (data){
      callback(data)
    });
  }
}]);

//Creamos un controller
myApp.controller('TestController', ['$scope', 'myService', function($scope, myService){
  $scope.customers = [];

  $scope.get = function(){
    myService.getData(function(jsonData){
      $scope.customers = jsonData;
    });
  }
}]);