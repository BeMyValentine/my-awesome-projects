angular.module("weatherApp")
    .controller("weatherController", ["$scope", "HTTPService", function ($scope, HTTPService) {

        HTTPService.getRequest().then(function (response) {


            $scope.info = response.data.daily.data;
            $scope.info.pop();
            $scope.day.icon.color = "white";
            console.log($scope.info);

        })


            }])