eventsApp.controller('EventController', function eventController($scope) {
    $scope.sortData = function (data, name) {
        $scope.sortBy = data
        $scope.showName = name
    }

    $scope.event = {
        name: 'Angular Boot Camp',
        date: '01.01.2013',
        time: '10:30 am',
        location: {
            address: 'Google Headquarters',
            city: 'Mountain view',
            province: 'CA'
        },
        imgUrl: './imgs/img1.png',
        sessions: [{
                name: 'Directives Masterclass',
                creatorName: 'Bob Smith',
                duration: '1 hour',
                level: 'Advanced',
                abstract: "In this session you will learn the ins and outs of directives!",
                upVoteCount: 0
            },
            {
                name: 'Scopes for fun and profit',
                creatorName: "John Doe",
                duration: '30 mimutes',
                level: "Introductory",
                abstract: "This session will take a closer look at scopes.  Learn what they do, how they do it, and how to get them to do it for you.",
                upVoteCount: 0
            },
            {
                name: 'Well Behaved Controllers',
                creatorName: "Jane Doe",
                duration: '2 hours',
                level: "Intermediate",
                abstract: "Controllers are the beginning of everything Angular does.  Learn how to craft controllers that will win the respect of your friends and neighbors.",
                upVoteCount: 0
            }
        ]
    }

    $scope.upVoteSession = function (session) {
        session.upVoteCount++
    }

    $scope.downVoteSession = function (session) {
        session.upVoteCount--
    }
});