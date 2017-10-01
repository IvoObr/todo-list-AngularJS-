// 'use strict';

angular.module('toDoListApp')
    .controller('mainCtrl', function($scope, dataService) {

        var index;

        $scope.toDelete = false;

        $scope.addTodo = function() {
            index = $scope.todos.length;
            var todo = { key: index, name: "this is new todo." };
            $scope.todos.push(todo);
            index++;
        };

        $scope.testConsole = dataService.testConsole;

        $scope.testFunc = function() {
            console.log('test log');
        };

        $scope.testNgChange = function() {
            console.log('test ng-change');
        };

        $scope.todos = dataService.getTodos(function(response) {
            console.log(response.data);
            $scope.todos = response.data;
        });

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

        $scope.goToItem = function (todo) {
            // $scope.todos =
            //
            //     response.data;
        }



    });