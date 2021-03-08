eventsApp.controller(
    "EventController",
    function eventController($scope, eventData, $log) {
        /* eventData.getEvent(function (event) {
          $scope.event = event;
          console.log(event);
        }); */

        /* eventData.getEvent().then(
            function success(response, status, headers, config) {
                $scope.event = response.data;
            },
            function error(response, status, headers, config) {
                $log.warn(response, status, headers, config);
            }
        ); */

        eventData.getEvent()
            .$promise
            .then(function (event) {
                $scope.event = event;
                console.log(event);
            })
            .catch(function (response) {
                console.log(response)
            })




        $scope.filterByDefault = "All";

        $scope.sortData = function (data, name) {
            $scope.sortBy = data;
            $scope.showName = name;
        };

        $scope.filterData = function (name) {
            $scope.filterBy = name;
            if ($scope.filterBy === "All") {
                $scope.filterBy = "";
            } else {
                $scope.filterByDefault = $scope.filterBy;
            }
        };

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };
    });