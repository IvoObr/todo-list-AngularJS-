// 'use strict';

angular.module('toDoListApp')
    .controller('todoListController', function($scope, dataService) {

        var indexLists;

        $scope.toDelete = false;

        $scope.addTodoList = function() {
            indexLists = $scope.todoLists.length;
            var todoList = { key: indexLists, name: "this is new todo list.", todos: [] };
            $scope.todoLists.push(todoList);
            indexLists++;
        };


        $scope.todoLists = dataService.getTodoLists();
        console.log('$scope.todoLists:', $scope.todoLists);


        $scope.deleteTodoList = function(todoList, index) {
            $scope.toDelete = true;

            $scope.deleteConfirmed = function() {
                $scope.todoLists.splice(index, 1);
                dataService.saveTodoLists($scope.todoLists);

            };
        };

        $scope.saveTodoLists = function(todoLists) {
            dataService.saveTodoLists(todoLists);
        };

        $scope.moveListItem = function (origin, destination) {
            if (destination < 0) {
                return;
            }
            if (destination >= $scope.todoLists.length) {
                return;
            }
            var tempTodoList = $scope.todoLists[destination];
            $scope.todoLists[destination] = $scope.todoLists[origin];
            $scope.todoLists[origin] = tempTodoList;
        };

        $scope.moveUpList = function (itemIndex) {
            $scope.moveListItem(itemIndex, itemIndex - 1);
        };

        $scope.moveDownList = function (itemIndex) {
            $scope.moveListItem(itemIndex, itemIndex + 1);
        };

        // $scope.goToTodoList = function (todoList) {
        //     $scope.todoLists
        //     //
        //
        //
        //     // 2D array
        //
        //     //     response.data;
        // }


    //         <li ng-repeat="todo in todolist">
    //         <a href="#/{{$index}}" class="item">
    //
    // .when('/:todoId', {
    //         templateUrl: 'templates/views/categories-page.html',
    //         controller: 'CategoriesController'



    });