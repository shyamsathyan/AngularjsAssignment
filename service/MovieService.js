var app = angular.module("myApp");
app.service('movieService',function(){
this.responseValue;
this.setResponse=function(inputVal){
 this.responseValue=inputVal;
}
this.getResponse=function(){
return this.responseValue;
}

});