(function () {
    'use-strict'
    
    angular.module('myFirstApp', [])

        .controller('MyFirstController', function ($scope) {
            $scope.name = "";
            $scope.companyName = "";
            $scope.sayHello = function () {
                return "Welcome to AngularJS"
            };
        });
})();