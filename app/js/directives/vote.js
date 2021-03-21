eventsApp.directive('vote', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/templates/directives/vote.html',
        scope: {
            upvote: '&',
            downvote: '&',
            count: '='
        }
    }
})