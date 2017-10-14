angular.module('toDoListApp', ['ngRoute',])
    .config(['$routeProvider',
        function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/todo-lists-page.html',
                controller: 'todoListController',
            })
            .when('/todos-page/:index', {
                templateUrl: 'views/todos-page.html',
                controller: 'todoController',
            })
            .when('/bot-page', {
                templateUrl: 'views/bot-page.html',
            })

        .otherwise({
            redirectTo: '/'
        });
    }]);
