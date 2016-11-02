angular.module("RESTServices", [])
.service('SSFUsersRest', function($http){
 var SSFUsersRest = this;
 
SSFUsersRest.post = function(newUserData) {
 return $http({
   url: "https://strongloop-backend-jleatherman92.c9users.io:8080/api/SSFUsers/",
   method: "POST",
   data: newUserData
 });
};

SSFUsersRest.login = function(newUserData) {
 return $http({
   url: "https://strongloop-backend-jleatherman92.c9users.io:8080/api/SSFUsers/login",
   method: "POST",
   data: newUserData
 });
};

SSFUsersRest.logout = function(token) {
 return $http({
  headers: {
   Authorization: token  
},
   url: "https://strongloop-backend-jleatherman92.c9users.io:8080/api/SSFUsers/logout",
   method: "POST",
 });
};

});