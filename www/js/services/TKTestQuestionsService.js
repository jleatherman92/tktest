angular.module('TKTestQuestions', [])
.service('TKTestQuestionService', ['QuestionsRest', '$window', 
function (QuestionsRest, $window){
    var service = this;
    var questions = [];
    service.all = function () {
        QuestionsRest.get($window.localStorage["token"])
        .then(function(response){
            if(response.status == 200)
            {
                questions = response.data;
                $window.localStorage.token=response.data.token;
                $window.localStorage.userID=response.data.ID;
            }
        });
    };

service.getQuestion = function(questionID)
{
        var results = [];
        questions.forEach(function(question){
            //Search for questions with the specified question ID
            if(question.Question_Number == questionID)
                results.push(question);
        });
        return results;
};
}]);