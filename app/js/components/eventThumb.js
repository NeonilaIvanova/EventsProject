angular.module('eventsApp').component('eventThumb', {
    templateUrl: '/templates/directives/eventThumbnail.html',
    bindings: {
        event: '='
    },
    controller: 'EventListController'
});


/* '<div class="card-body">' +
'<h5 class="card-title mb-3">{{event.name}}</h5>' +
'<h6 class="card-subtitle mb-4">{{event.creatorName}}</h3>' +
'<span ng-hide=' +

"event.time == null '>Time: {{event.time}}<br></span>" +
'<span ng-hide=' +
"event.duration == null '>Duration: {{event.duration | durations}}<br></span>" +
'<span ng-hide=' +
"event.level == null '>Level: {{event.level}}<br></span>" +
'<span ng-hide=' +
"event.location.address == null '>Location: {{event.location.address}}," +
'{{event.location.city}},' +
'{{event.location.province}}<br></span>' +
'<span>{{event.abstract}}</span>' +
'</div>', */