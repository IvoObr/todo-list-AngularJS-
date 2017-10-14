angular.module('toDoListApp')
    .directive('todo', function() {
        return {
            templateUrl: 'templates/todo.html',
            controller: 'todoController',
            replace: true
        };
    });