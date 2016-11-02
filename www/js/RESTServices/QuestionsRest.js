angular.module("RESTServices")
    .service('QuestionsRest', function($http, $window) {
        var QuestionsRest = this;

        QuestionsRest.get = function(token) {
            $window.localStorage[token];
            return $http({
                headers: {
                    Authorization: token
                },
                url: "https://strongloop-backend-jleatherman92.c9users.io/api/Questions/",
                method: "GET"
            });
        };
    });
