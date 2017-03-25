/**
 * Created by Niyas on 12/12/2016.
 */
var angularApp = angular.module('angularApp', []);

angularApp.controller('mainController', ['$scope','$timeout',function ($scope, $timeout) {
    $scope.name = "Henry";

    $timeout(function(){
        $scope.name = "Tony";
    }, 3000);
}]);