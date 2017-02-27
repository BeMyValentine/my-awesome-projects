angular.module("weatherApp", ["ngRoute", "geolocation", "angular-skycons"])
    .config(function ($routeProvider) {


        $routeProvider
            .when("/home", {
                templateUrl: "content/current.html",
                controller: "mainController"
            })
            .when("/weekly", {
                templateUrl: "content/7-day.html",
                controller: "weatherController"
            })
            .otherwise({
            redirectTo: "/home",
        })




    })