angular.module('toDoListApp')
    .directive('todoList', function() {
        return {
            templateUrl: 'templates/todoList.html',
            controller: 'todoController',
            replace: true
        };
    });