'use strict';

var app = angular.module('demoApp',['ngRoute', 'ngAnimate']);

app.config(function($routeProvider) {
    $routeProvider.when('/',
    {
        controller: 'CustomersController',
        templateUrl: 'views/customers.html'
    })
    .when('/orders/:customerId',
    {
        controller: 'OrdersController',
        templateUrl: 'views/orders.html'
    })
});

app.controller('CustomersController', function($scope, customersFactory) {
    $scope.customers = null;
    
    function init() {
        customersFactory.getCustomers().success(function(custs) {
            $scope.customers = custs;
            alert(custs.data.length);
        });
    }
    
    init();
});

app.controller('OrdersController', function($scope, $routeParams) {
    $scope.customerId = $routeParams.customerId;
});

app.factory('customersFactory', function($http) { 
    var factory = {};
    factory.getCustomers = function() {
        return $http.get('customers.json');
    };
    return factory;
});
