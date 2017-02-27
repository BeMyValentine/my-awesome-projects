angular.module("ponyApp")
    .controller("ponyController", ["ponyService", "$http", "$scope", function (ponyService, $http, $scope) {


        $scope.addPony = function (pony) {
            ponyService.addPony(pony).then(function (response) {
                console.log(response.data);
            })
        };
        $scope.welcome = "LOOK AT ALL THE COLORS!!";
        $scope.ponies = [];

    }]);

