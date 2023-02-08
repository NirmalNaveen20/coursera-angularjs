(function () {
    'use-strict'
    
    angular.module('myFirstApp', [])

        .controller('MyFirstController', function ($scope) {
            $scope.name = "Nirmal";
            $scope.sayHello = function () {
                return "Welcome to AngularJS"
            };
        });
})();