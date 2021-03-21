/* const eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
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

        $locationProvider.html5Mode(true)

    }); */

/* const {
    resolve
} = require("path") */

const eventsApp = angular.module('eventsApp', ['ngResource', 'ui.router', "oc.lazyLoad"])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/events')

        $stateProvider.state("events", {
            name: 'events',
            url: '/events',
            templateUrl: 'templates/EventList.html',
            controller: 'EventListController',
            resolve: {
                loadAsset: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        './js/services/EventData.js', './js/components/eventThumb.js', './js/filters.js',
                        './js/controllers/EventListController.js'
                    ])
                }]
            }
        })

        $stateProvider.state("event", {
            name: 'events/{eventId}',
            url: '/events/{eventId}',
            templateUrl: 'templates/EventDetails.html',
            controller: 'EventController',
            resolve: {
                loadAsset: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        './js/services/EventData.js', './js/filters.js', './js/directives/vote.js',
                        './js/controllers/EventController.js'
                    ])
                }]
            }
        })

        $stateProvider.state("newEvent", {
            name: 'newevent',
            url: '/newevent',
            templateUrl: 'templates/CreateNewEvent.html',
            controller: 'NewEventController',
            resolve: {
                loadAsset: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        './js/controllers/NewEventController.js', './js/directives/datekeys.js', './js/services/EventData.js'
                    ])
                }]
            }
        })

        $stateProvider.state("editProfile", {
            name: 'editprofile',
            url: '/editprofile',
            templateUrl: 'templates/EditProfile.html',
            controller: 'EditProfileController',
            resolve: {
                loadAsset: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        './js/services/GravatarUrlCreator.js', './js/controllers/EditProfileController.js'
                    ])
                }]
            }
        })




        $locationProvider.html5Mode(true)

    })