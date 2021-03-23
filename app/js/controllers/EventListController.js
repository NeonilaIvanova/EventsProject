/* angular.module('eventsApp').controller('EventListController', function EventListController($scope, eventData) {
    $scope.events = [];
    eventData.getAllEvents().$promise.then(result => {
        $scope.events = result
    })
}) */

angular.module('eventsApp').controller('EventListController', function EventListController($scope, eventData) {
    $scope.events = [];
    eventData.getAllEvents().$promise.then(result => {
        $scope.events = result
    })
})