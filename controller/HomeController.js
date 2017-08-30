var app = angular.module("myApp");
app.controller('homeCtrl',function($scope,$http,$window,$timeout){
$scope.formData={};	
$scope.submit=function(){
	var moviesRef = firebase.database().ref("movies/");
	moviesRef.set ({
	  movie_name:"DDLJ",
	  character_name:"Raj Malhotra",
	  user_voted_count:100000,
	  average_rating:8.2
	},
	{
	  movie_name:"Raees",
	  character_name:"Raees Alam",
	  user_voted_count:10000,
	  average_rating:7.1
	},
	{
	  movie_name:"Dilwale",
	  character_name:"Raj",
	  user_voted_count:5000,
	  average_rating:5.3
	},
	{
	  movie_name:"Kuch Kuch Hota Hai",
	  character_name:"Rahul Khanna",
	  user_voted_count:70000,
	  average_rating:7.8
	},
	{
	  movie_name:"My Name is Khan",
	  character_name:"Rizwan Khan",
	  user_voted_count:45000,
	  average_rating:8
	},
	{
	  movie_name:"Baazigar",
	  character_name:"Ajay Sharma",
	  user_voted_count:15999,
	  average_rating:7.8
	},
	{
	  movie_name:"Happy New Year",
	  character_name:"Chandramohan Sharma",
	  user_voted_count:3200,
	  average_rating:5.7
	},
	{
	  movie_name:"Kabhi Khushi Kabhie Gham",
	  character_name:"Rahul Y. Raichand",
	  user_voted_count:78000,
	  average_rating:7.5
	},
	{
	  movie_name:"Darr",
	  character_name:"Rahul Mehra",
	  user_voted_count:342365,
	  average_rating:7.9
	},
	{
	  movie_name:"Kal ho Naa ho",
	  character_name:"Aman Mathur",
	  user_voted_count:54000,
	  average_rating:8
	});
	alert("Movie added successfully.");
}
});