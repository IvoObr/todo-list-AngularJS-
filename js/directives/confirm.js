angular.module('toDoListApp')
    .directive('confirm', function() {
        return {
            templateUrl: 'templates/confirm.html',
            controller: 'todoController',
            replace: true
        };
    });