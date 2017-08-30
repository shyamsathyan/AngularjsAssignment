var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/create", {
        templateUrl : "html/create.html",
		controller:'createCtrl'
    })
    .when("/delete", {
        templateUrl : "html/delete.html",
		controller:'deleteCtrl'
    })
	
}); 



