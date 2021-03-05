eventsApp.controller('NewEventController', function NewEventController($scope) {

    $scope.saveEvent = function (event, newEventForm) {
        if (newEventForm.$valid) {
            window.alert(`event ${event.name} saved!`)
        }
    }

    $scope.cancelAddingEvent = function () {
        window.location = "/EventDetails.html"
    }
})
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