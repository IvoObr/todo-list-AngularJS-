angular.module('toDoListApp')
    .directive('item', function() {
        return {
            templateUrl: 'templates/item.html',
            controller: 'mainCtrl',
            replace: true
        };
    });