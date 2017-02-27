angular.module("weatherApp")
    .service("locationService", function () {



        this.options = {
            enableHighAccuracy: true,
            maximumAge: 0
        };

        this.position = ""

        this.success = function (pos) {
            var crd = pos.coords;
            var coord = crd.latitude + "," + crd.longitude;
            this.position = coord



        };

        this.error = function (err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        };


        navigator.geolocation.getCurrentPosition(this.success, this.error, this.options);


    })