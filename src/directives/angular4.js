'use strict';

//Creamos la app
var myApp;
myApp = angular.module('myApp', []);

//Creamos la directiva
myApp.directive("myGrid", function(){
    return {
        restrict: "E",
        scope:{
            data: "="
        },
        link: function($scope, $element, $attrs) {
          $scope.id = 0;

          $scope.add = function(name){
            $scope.data.push(
              {"id": ++$scope.id, "name": name}
            );
            $scope.newItem = "";
          };

          $scope.delete = function(id){
            for (var i = 0; i < $scope.data.length; i++) {
              if ($scope.data[i].id === id){
                $scope.data.splice(i,1);
              }
            }
          }
        },
        templateUrl: 'myGrid.html'
    }
});

//Creamos un controller
myApp.controller('TestController', ['$scope', function($scope){
  $scope.persons = [];
}]);
