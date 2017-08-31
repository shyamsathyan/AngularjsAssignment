var app = angular.module("myApp");

app.controller('homeCtrl',function($scope,movieService){
$scope.movieList=movieService.getResponse();
});