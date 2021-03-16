const eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/newEvent', {
            templateUrl: 'templates/CreateNewEvent.html',
            controller: 'NewEventController'
        });
        $routeProvider.when('/events', {
            templateUrl: 'templates/EventList.html',
            controller: 'EventListController'
        });

        $routeProvider.when('/editProfile', {
            templateUrl: 'templates/EditProfile.html',
            controller: 'EditProfileController'
        });

        $routeProvider.when('/event/:id', {
            templateUrl: 'templates/EventDetails.html',
            controller: 'EventController'
        });

        $routeProvider.otherwise({
            redirectTo: '/events'
        })

    });