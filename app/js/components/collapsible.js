angular.module('eventsApp').component('collapsible', {
    template: '<h5 class="card-title"> {{title}} </h5>',
    bindings: {
        title: ''
    }
})