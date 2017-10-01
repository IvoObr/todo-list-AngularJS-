angular.module('toDoListApp')
    .service('dataService', function($http) {

        this.testConsole = function() {
            console.log("service test log");
        };

        this.getTodos = function(callback) {
            $http.get('mock/todos.json')
                .then(callback);
        };

        this.deleteTodo = function(todo) {
            console.log('The ' + todo.name + ' todo has been deleted');
        };

        this.saveTodo = function(todo) {
            console.log('The ' + todo.name + ' todo was saved');
            console.log(todo);
            localStorage.setItem(todo.key, todo.name);
        };

        this.moveUp = function(todo) {

        };


        this.moveUp = function(todo) {

        };

    });