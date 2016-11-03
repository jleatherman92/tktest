angular.module('starter.controllers')
.controller('LobbyCtrl',['$scope', 'TKTestQuestionService', '$state', 'TKAnswersService', '$window', 'SSFUsersRest',
function($scope, TKTestQuestionService, $state, TKAnswersService, $window, SSFUsersRest) {
TKTestQuestionService.all();

 $scope.goToTest = function()
   {
        TKAnswersService.resetAnswers();
           $state.go('question',{questionID:1});
   };
   
  $scope.goToHistory = function(){
           $state.go('history');
       };
  


  $scope.logout = function(){
      SSFUsersRest.logout($window.localStorage.token)
      .then(function(response){
       if(response.status === 204){
          $state.go('landing');
       } else {
        alert("Not able to log out");
       }
      });
  
  };
}]);