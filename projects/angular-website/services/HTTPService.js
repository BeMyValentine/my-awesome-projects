angular.module("weatherApp")
    .service("HTTPService", ["$http", "$sce", "geolocation", function ($http, $sce, geolocation) {


        var url = "https://api.darksky.net/forecast/40060965fc9611af86b2b08dde10fcd2/";



        this.getRequest = function () {

            return geolocation.getLocation().then(function (data) {
                var coords = data.coords.latitude + "," + data.coords.longitude;
                var totalUrl = url + coords;
                

                return $http.jsonp($sce.trustAsResourceUrl(totalUrl));
                


            });
        }
    }]);