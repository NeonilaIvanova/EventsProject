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

        $routeProvider.when('/event/:eventId', {
            template: 'templates/EventDetails.html',
            controller: 'EventController'
        })

    });