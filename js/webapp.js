var app = angular.module("myapp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "home.html"

        })
        .when("/sign_up", {
            templateUrl: "sign_up.html"
        })
        .when("/update", {
            templateUrl: "update.html"
        })
        .when("/sheet", {
            templateUrl: "sheet.html"
        })


    .otherwise({
        redirectTo: "/home"
    });
});

app.run(function($rootScope) {
    $rootScope.$on('$routeChangeStart', function() {
        $rootScope.loading = true;
    });
    $rootScope.$on('$routeChangeSuccess', function() {
        $rootScope.loading = false;
    });
    $rootScope.$on('$routeChangeError', function() {
        $rootScope.loading = false;
        alert("Lỗi, Không tải được template");
    });
});