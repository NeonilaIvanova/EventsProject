eventsApp.directive('collapsible', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<div><h5 ng-click="toggleVisibility()" class="card-title"> {{title}} </h5><div ng-show="visible" ng-transclude></div></div>',
        controller: function ($scope) {
            $scope.visible = true;

            $scope.toggleVisibility = function () {
                $scope.visible = !$scope.visible
            }
        },
        transclude: true,
        scope: {
            title: '@'
        }
    }
})