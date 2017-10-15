// 'use strict';

angular.module('toDoListApp')
    .controller('todoController', ['$scope', 'dataService', '$location',
        function($scope, dataService, $location) {

        var index;

        $scope.toDelete = false;
        $scope.todos = dataService.getTodos(getTodoListIndex());
        $scope.todoList = dataService.getTodoLists()[getTodoListIndex()];
        $scope.todoLists = dataService.getTodoLists();

        function getTodoListIndex() {
            var UrlPathArr = $location.path().split('/');
            var todoListIndex = Number(UrlPathArr[UrlPathArr.length - 1].replace('"',''));
            console.log(todoListIndex);
            return todoListIndex;
        }

        if (typeof $scope.todoList !== 'undefined') {
            $scope.todoListName = $scope.todoList.name;
        }

        $scope.addTodo = function() {
            index = $scope.todos.length;
            var todo = { key: index, name: "this is new todo." };
            $scope.todoLists[getTodoListIndex()].todos.push(todo);
            $scope.todos = $scope.todoLists[getTodoListIndex()].todos.slice();
            index++;
            dataService.saveTodoLists($scope.todoLists);
        };

        $scope.saveTodos = function() {
            $scope.todoLists[getTodoListIndex()].todos = $scope.todos.slice();
            dataService.saveTodoLists($scope.todoLists);
        };

        $scope.deleteTodo = function(todo, index) {
            $scope.toDelete = true;

            $scope.deleteConfirmed = function() {
                $scope.todoLists[getTodoListIndex()].todos.splice(index, 1);
                $scope.todos = $scope.todoLists[getTodoListIndex()].todos.slice();
                dataService.saveTodoLists($scope.todoLists);
            };
        };

        $scope.moveItem = function (origin, destination) {
            if (destination < 0) {
                return;
            }
            if (destination >= $scope.todos.length) {
                return;
            }
            var tempTodos = $scope.todos[destination];
            $scope.todos[destination] = $scope.todos[origin];
            $scope.todos[origin] = tempTodos;
        };

        $scope.moveUp = function (itemIndex) {
            $scope.moveItem(itemIndex, itemIndex - 1);
        };

        $scope.moveDown = function (itemIndex) {
            $scope.moveItem(itemIndex, itemIndex + 1);
        };

    }]);