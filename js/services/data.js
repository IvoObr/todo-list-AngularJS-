angular.module('toDoListApp')
    .service('dataService', function($http) {

        var todoLists;

        // this.getTodos = function(callback) {
        //     $http.get('mock/todos.json')
        //         .then(callback);
        // };

        this.getTodos = function(todoListIndex) {
                if (typeof todoLists.length > 0) {
                    return todoLists[todoListIndex].todos !== 'undefined';
                } else {
                    return [];
                }
           };

        this.getTodoLists = function() {
            todoLists =  localStorage.getItem('allTodoLists');
            if ( todoLists === null) {
                todoLists = [];
            } else {
                todoLists = JSON.parse(todoLists);
            }

            return todoLists;
        };

        this.saveTodoLists = function(todoLists) {
            var allTodoLists = JSON.stringify(todoLists);
            localStorage.setItem("allTodoLists", allTodoLists);
        };

        // this.deleteTodoList = function(todoList) {
        //     console.log(todoList);
        //     console.log(todoList.key, todoList.name, todoList.todos);
        //     localStorage.removeItem(todoList.name);
        // };

    });