angular.module("bountyApp", [])
    .controller("bountyController", ["$scope", "bountyService", function ($scope, bountyService) {

        $scope.bounties = [];

        $scope.postBounty = function (target) {

            bountyService.addBounty(target).then(function (response) {
                $scope.bounties.push(response.data)
            })
        };

        $scope.showTargets = function () {

            bountyService.showBounties().then(function (response) {
                $scope.bounties = response.data
            })
        };

        $scope.deleteBounty = function(id) {

            bountyService.removeBounty(id).then(function (response) {
                $scope.bounties.splice(response, 1)
            })
        }


    }]);