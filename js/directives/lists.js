angular.module('toDoListApp')
    .directive('lists', function() {
        return {
            templateUrl: 'templates/lists.html',
            controller: 'mainCtrl',
            replace: true
        };
    });