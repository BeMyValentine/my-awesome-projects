angular.module("ponyApp")
    .service("ponyService", ["$http", function ($http) {


        this.ponyValidator = function (pony) {
            if (pony.name.length <= 3) {
                $scope.message("You need to input a longer pony name")
            } else if (pony.name === "" || pony.username === "" || pony.imgURL === "") {
                $scope.message("Fill out the entire form")
            } else if (pony.name == number) {
                $scope.message("None of MY little ponies have numbers in their names. Fix yourself Brony")
            } else {
                addPony(pony)
            }

        };

        this.addPony = function (pony) {
            return $http.post("http://api.vschool.io/gabehare/pony", pony)
        }

    }]);




