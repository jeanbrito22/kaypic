const kaypic = angular.module('kaypic', ['ngRoute', 'ngAnimate', 'servicesModule', 'layoutDirectives']);

kaypic.config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    
    $routeProvider
        .when("/fotos", {
            templateUrl: "views/fotos.html",
            controller: "FotosController"
        })
        .when("/fotos/new", {
            templateUrl: "views/foto.html",
            controller: "FotoController"
        })
        .when("/fotos/edit/:fotoId", {
            templateUrl: "views/foto.html",
            controller: "FotoController"
        })
        .otherwise({
            redirectTo: "/fotos"
        })
})