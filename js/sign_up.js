var app = angular.module('myapp', []);
app.controller('sign_up', function($scope) {
    $scope.expenses = [];
    $scope.submitExpense = function(expenseInfo) {
        $scope.expenses.push(expenseInfo);
    }

});

fessmodule.$inject = ['$scope'];