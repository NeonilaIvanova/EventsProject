eventsApp.controller('EventController', function eventController($scope, eventData) {
    $scope.event = eventData.event;
    $scope.filterByDefault = 'All'

    $scope.sortData = function (data, name) {
        $scope.sortBy = data
        $scope.showName = name
    }

    $scope.filterData = function (name) {
        $scope.filterBy = name;
        if ($scope.filterBy === 'All') {
            $scope.filterBy = '';
        } else {
            $scope.filterByDefault = $scope.filterBy
        }
    }


    $scope.upVoteSession = function (session) {
        session.upVoteCount++
    }

    $scope.downVoteSession = function (session) {
        session.upVoteCount--
    }
});