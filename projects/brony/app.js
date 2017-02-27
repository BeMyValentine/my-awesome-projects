angular.module("ponyApp", ["ngRoute"])
    .config(function ($routeProvider) {

        $routeProvider
            .when("/home", {
                templateUrl: "content/home.html",
                controller: "mainController"
            })
            .when("/ponies", {
                templateUrl: "content/pony-page/pony.html",
                controller: "ponyController"
            })
            .otherwise({
                redirectTo: "/home"
            });

    });










