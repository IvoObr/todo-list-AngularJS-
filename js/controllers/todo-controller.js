// 'use strict';

angular.module('toDoListApp')
    .controller('todoController', ['$scope', 'dataService', '$location',
        function($scope, dataService, $location) {

        var index;

        $scope.toDelete = false;

        $scope.addTodo = function() {
            index = $scope.todos.length;
            var todo = { key: index, name: "this is new todo." };
            $scope.todos.push(todo);
            index++;
        };


        // $scope.todos = dataService.getTodos(function(response) {
        //     console.log(response.data);
        //     $scope.todos = response.data;
        // });

        function getTodoListIndex() {
            var UrlPathArr = $location.path().split('/');
            var todoListIndex = Number(UrlPathArr[UrlPathArr.length - 1].replace('"',''));
            console.log(todoListIndex);
            return todoListIndex;
        }


        $scope.todos = dataService.getTodos(getTodoListIndex());
        console.log('$scope.todos:', $scope.todos);


        $scope.deleteTodo = function(todo, index) {
            $scope.toDelete = true;

            $scope.deleteConfirmed = function() {
                dataService.deleteTodo(todo);
                $scope.todos.splice(index, 1);
            };
        };

        $scope.saveTodo = function(todo) {
            dataService.saveTodo(todo);
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