angular.module('toDoListApp', ['ngRoute',])
    .config(['$routeProvider',
        function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home-page.html',
                controller: 'mainCtrl',
            })
            .when('/todos-page', {
                templateUrl: 'views/todos-page.html',
                controller: 'mainCtrl',
            })
            .when('/bot-page', {
                templateUrl: 'views/bot-page.html',
            })

        .otherwise({
            redirectTo: '/'
        });
    }]);

