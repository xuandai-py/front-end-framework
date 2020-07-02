angular.module('myapp', [])

.controller("validateCtrl", function($scope, $http) {
    $scope.users = [];
    $http.get("../db/ob/Students.js").then(function(response) {
        $scope.users = response.data;

        $scope.showResult = function() {
            var qLength = $scope.users.length;
            for (var i = 0; i < qLength; i++) {
                var checked_to_email = $scope.users[i].email;
                var checked_to_password = $scope.users[i].password;
                if ($scope.email === checked_to_email && $scope.password === checked_to_password) {
                    alert("Đăng nhập thành công!");
                    break;
                } else if ($scope.email !== checked_to_email || $scope.password !== checked_to_password) {
                    alert("Tài khoản hoặc mật khẩu không đúng!");
                    break;
                }
            }
        }
    });
    $scope.email = 'john.doe@gmail.com';
});