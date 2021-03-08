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

eventsApp.factory('eventData',
    function ($resource) {
        const resource = $resource('/data/event/1.json')
        return {
            getEvent: function () {
                return resource.get()
            },


            save: function (event) {
                return resource.save(event)
            }
        }

    })