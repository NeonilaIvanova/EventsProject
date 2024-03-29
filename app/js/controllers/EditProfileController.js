angular.module('eventsApp').controller('EditProfileController', function EditProfileController($scope, gravatarUrlCreator) {
    $scope.user = {}

    $scope.getGravatarUrl = function (email) {
        return gravatarUrlCreator.createGravatarUrl(email)
    }

    $scope.cancelEvent = function () {
        window.location = 'events';
    }

});