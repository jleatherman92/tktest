angular.module('starter.controllers')
.controller('RegisterCtrl', ['$scope', '$state', 'SSFUsersRest', '$window', '$ionicHistory',
function($scope, $state, SSFUsersRest, $window, $ionicHistory){

    $scope.user = {};
        
    $scope.signupForm = function(form) { 
        if(form.$invalid) return alert("Please complete the form before proceeding.");
        
        
    SSFUsersRest.post($scope.user)
        .then(function(response) {
           // handle different responses and decide what happens next
           $window.localStorage.token=response.data.token;
           $window.localStorage.userID=response.data.id;
           
           if(response.data === null){
               return alert("user is offline");
           }else if (response.status === 200){
              $state.go('lobby');
           }
        }, function(error) {
           // inform the user of any known problems that arose, otherwise give a generic 
           // failed message
           if(error.status === 404){
            return alert('Not found.');
           }else if (error.status === 422){
            return alert('Email is already taken.');
           } else if(error.status === 500){
            return alert('Server is offline');
           } else {
               return alert("Failed")
           }
        });
        $ionicHistory.nextViewOptions({
        historyRoot: true
      });
    };
    }])