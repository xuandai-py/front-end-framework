angular.module('quiz', [])
    .controller('timerController', ['$scope', '$interval', function($scope, $interval) {
        $scope.remainingTime = 60;
        $scope.timeInterval = $interval(function() {
            $scope.remainingTime = $scope.remainingTime - 1;
            if ($scope.remainingTime == 0) {
                $interval.cancel($scope.timeInterval);
                // $scope.remainingTime = 60;
            }
        }, 1000);
    }]);