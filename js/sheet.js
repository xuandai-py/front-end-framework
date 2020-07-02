angular.module("quiz", [])
    .controller("myctrl", function($scope, $http) {
        $scope.subjects = [];
        $http.get("../db/ob/Subjects.js").then(function(response) {
            $scope.subjects = response.data;
        });
    })
    /*    
        app.controller("QuizController", function($scope, $http) {
            $scope.questions = que;
        });

        app.controller("QuizController2", function($scope, $http) {
            $scope.quizss = [];
            $http.get("../db/Quizs/ADAV3.js").then(function(response) {
                $scope.quizss = response.data;
            });
        });
    */
    .controller("QuizController3", function($scope, $http) {
        $scope.questions = [];
        $http.get("../db/Quizs/ADAV.js").then(function(response) {
            $scope.questions = response.data;


            $scope.prop = "Id";
            $scope.begin = 0;
            $scope.pageCount = Math.ceil($scope.questions.length);



            $scope.prev = function() {
                if ($scope.begin > 0) {
                    $scope.begin -= 1;
                }
            }

            $scope.next = function() {
                if ($scope.begin < ($scope.pageCount - 1)) {
                    $scope.begin += 1;

                }
            }
            $scope.answers = {};
            $scope.correctCount = 0;
            $scope.showResult = function() {
                $scope.correctCount = 0;
                var qLength = $scope.questions.length;
                console.log(qLength);
                for (var i = 0; i < qLength; i++) {
                    var answers = $scope.questions[i].Answers;
                    var checked_to = $scope.questions[i].AnswerId;
                    console.log(answers); //>>>>>

                    $scope.questions[i].userAnswerCorrect = false;
                    $scope.questions[i].userAnswer = $scope.answers[i];
                    console.log($scope.answers[i]);

                    for (var j = 0; j < answers.length; j++) {
                        answers[j].selected = "donno";
                        if ($scope.questions[i].userAnswer === answers[j].Text && answers[j].Id === checked_to) {
                            $scope.questions[i].userAnswerCorrect = true;
                            answers[j].selected = "true";
                            $scope.correctCount++;
                            break;
                        } else if ($scope.questions[i].userAnswer === answers[j].Text && answers[j].Id !== checked_to) {
                            answers[j].selected = "false";
                            break;
                        }
                    }
                }

                //console.log($scope.answers);

            };
        });

    })

.controller('timerController', ['$scope', '$interval', function($scope, $interval) {
    $scope.remainingTime = 60;
    $scope.timeInterval = $interval(function() {
        $scope.remainingTime = $scope.remainingTime - 1;
        if ($scope.remainingTime == 0) {
            $interval.cancel($scope.timeInterval);
            //$scope.remainingTime = 60;
        }
    }, 1000);
}]);