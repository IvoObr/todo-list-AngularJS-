angular.module('toDoListApp')
    .directive('confirm', function() {
        return {
            templateUrl: 'templates/confirm.html',
            // controller: 'todoController',
            replace: true,
            transclude: true,
            link: function (scope, element, attrs) {

                scope.buttonsNum = Number(attrs.numberOfButtons);
                scope.buttonName1 = attrs.buttonOneName;
                scope.buttonName2 = attrs.buttonTwoName;
                scope.title = attrs.title;
            }
        };
    });

