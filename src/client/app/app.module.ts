import * as angular from 'angular';

var app = angular.module("NewsApp", []);
app.controller("NewsController", ["$scope", function($scope){
    $scope.helloWorld = "Hello from AngularJS world!";
}]);