var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/list", {
        templateUrl : "html/list.html",
		controller:'homeCtrl'
    })
    .when("/home", {
        templateUrl : "index.html",
		controller:'mainCtrl'
    })
	
}); 



