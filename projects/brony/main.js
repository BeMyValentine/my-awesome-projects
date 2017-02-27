angular.module("ponyApp")
    .controller("mainController", ["ponyService", "$http", "$scope", function (ponyService, $http, $scope) {

        $scope.hello = "Welcome to the wonderful world of MY LITTLE PONY!!!";


    }]);


