/* angular.module('eventsApp').controller('EventListController', function EventListController($scope, eventData) {
    $scope.events = eventData.getAllEvents()
}) */

angular.module('eventsApp').controller('EventListController', function EventListController($scope, eventData) {
    let ctrl = this;
    ctrl.events = eventData.getAllEvents()
    console.log(ctrl.events)
})