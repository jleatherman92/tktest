angular.module("RESTServices")
.service('TestResultsRest', function($http, $window){
    var TestResultsRest = this;
   TestResultsRest.save = function(test, token) {
       return $http({
           url: "https://strongloop-backend-jleatherman92.c9users.io/api/TestResults",
           method: 'POST',
           data: test,
           headers:{
                 Authorization: token
            }
       });
    };
       
    TestResultsRest.getAll = function(token) {
       return $http({
           headers:{
                 Authorization: token
            },
            url: "https://strongloop-backend-jleatherman92.c9users.io:8080/api/TestResults?filter[where][userID]=" + $window.localStorage.userID,
           method: 'GET',
       });
   };
   });