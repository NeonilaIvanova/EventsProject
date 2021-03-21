angular.module('eventsApp').controller('NewEventController',
    function NewEventController($scope, eventData) {

        $scope.event = {};

        $scope.saveEvent = function (event, newEventForm) {
            if (newEventForm.$valid) {
                eventData.save(event)
                    .$promise
                    .then(function (response) {
                        console.log('success', response)
                    })
                    .catch(function (response) {
                        console.log('failure', response)
                    });
            }
        };

        $scope.cancelEvent = function () {
            window.location = 'events';
        }

    }
);


/* eventsApp.controller('NewEventController', function NewEventController($scope, eventData) {


    $scope.saveEvent = function (event, newEventForm) {
$scope.event = {};

$scope.saveEvent = function (event, newEventForm) {
    if (newEventForm.$valid) {
        eventData.save(event)
            .$promise
            .then(function (response) {
                console.log('success', response)
            })
            .catch(function (response) {
                console.log('failure', response)
            });
    }
};


        if (newEventForm.$valid) {

            eventData.save(event)
                .$promise
                .then(function (response) {
                    console.log('success', response)
                })
                .catch(function (response) {
                    console.log('failure', response)
                })
        }
    }


    $scope.cancelAddingEvent = function () {
        window.location = "#!/EventDetails.html"
    }

}) */
// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.prototype.slice.call(forms)
    .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })