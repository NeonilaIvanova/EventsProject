/* eventsApp.factory("eventData", function ($http, $log) {
  return {
    getEvent: function (successcb) {
      $http({
        method: "GET",
        url: "/data/event/1",
      }).then(
        function success(response, status, headers, config) {
          successcb(response.data);
        },
        function error(response, status, headers, config) {
          $log.warn(response, status, headers(), config);
        }
      );
    },
  };
});
 */

/* eventsApp.factory("eventData", function ($http) {
  return {
    getEvent: function () {
      return $http({
        method: "GET",
        url: "/data/event/1",
      });
    },
  };
});
 */

angular.module('eventsApp').factory('eventData',
  function ($resource) {
    const resource = $resource('/data/event/:id', {
      id: '@id'
    }, {
      "getAllEvents": {
        method: "GET",
        isArray: true,

      }
    })

    let count = 8;

    return {

      getEvent: function (eventId) {
        return resource.get({
          id: eventId
        });
      },


      save: function (event) {
        console.log(event)
        event.id = count
          ++count
        return resource.save(event)
      },

      getAllEvents: function () {
        return resource.query();
      }



    }

  })