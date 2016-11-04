angular.module('starter.controllers')
.controller('LobbyCtrl',['$scope', 'TKTestQuestionService', '$state', 'TKAnswersService', '$window', 'SSFUsersRest', '$ionicHistory', 
function($scope, TKTestQuestionService, $state, TKAnswersService, $window, SSFUsersRest, $ionicHistory) {
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
      SSFUsersRest.logout($window.localStorage.token);
      $ionicHistory.nextViewOptions({
        historyRoot: true
      });
      $window.localStorage.clear();
      $state.go('landing');
  };
}]);