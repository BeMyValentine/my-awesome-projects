angular.module("bountyApp")

    .service("bountyService", ["$http", function ($http) {

        var url = "/target";


        this.addBounty = function (target) {
            return $http.post(url, target)
        };
        this.showBounties = function () {
            return $http.get(url)
        };
        this.removeBounty = function (id) {
            return $http.delete(url + "/" + id)
        }

    }]);