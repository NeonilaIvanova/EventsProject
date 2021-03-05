eventsApp.factory('eventData', function () {
    return {
        event: {
            name: 'Angular Boot Camp',
            date: '01.01.2013',
            time: '10:30 am',
            level: 'Introductory',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain view',
                province: 'CA'
            },
            imgUrl: './imgs/img1.png',
            sessions: [{
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    time: '11:00',
                    duration: 6,
                    level: 'Advanced',
                    abstract: "In this session you will learn the ins and outs of directives!",
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: "John Doe",
                    time: '10:00',
                    duration: 4,
                    level: "Introductory",
                    abstract: "This session will take a closer look at scopes.  Learn what they do, how they do it, and how to get them to do it for you.",
                    upVoteCount: 0
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: "Jane Doe",
                    time: '19:00',
                    duration: 2,
                    level: "Intermediate",
                    abstract: "Controllers are the beginning of everything Angular does.  Learn how to craft controllers that will win the respect of your friends and neighbors.",
                    upVoteCount: 0
                }
            ]
        }
    }

})