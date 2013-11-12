'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'ngRoute',
  'firebase'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/home', {
      templateUrl: 'partials/home',
      controller: 'HomeCtrl'
    }).
    when('/overview', {
      templateUrl: 'partials/overview',
      controller: 'OverviewCtrl'
    }).
    when('/angularjs', {
      templateUrl: 'partials/angularjs',
      controller: 'AngularJSCtrl'
    }).
    when('/demo', {
      templateUrl: 'partials/demo',
      controller: 'DemoCtrl'
    }).
    when('/more-demo', {
      templateUrl: 'partials/more-demo',
      controller: 'MoreDemoCtrl'
    }).
    when('/forge', {
      templateUrl: 'partials/forge',
      controller: 'ForgeCtrl'
    }).
    when('/end', {
      templateUrl: 'partials/end',
      controller: 'EndCtrl'
    }).
    otherwise({
      redirectTo: '/home'
    });

  $locationProvider.html5Mode(true);
});

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function($scope, $location) {
    
    $scope.$on('$viewContentLoaded', function() {
      prettyPrint();
    });

    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

  }).
  controller('HomeCtrl', function ($scope) {

  }).
  controller('OverviewCtrl', function ($scope) {

  }).
  controller('AngularJSCtrl', function ($scope) {

  }).
  controller('DemoCtrl', function ($scope, angularFire) {
    $scope.mystring = "";
    var ref = new Firebase("https://examples.firebaseio.com/mystring");
    angularFire(ref, $scope, "mystring", "");
  }).
  controller('MoreDemoCtrl', function ($scope) {

  }).
  controller('ForgeCtrl', function ($scope) {
    
  }).
  controller('EndCtrl', function ($scope) {

  });
