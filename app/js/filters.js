eventsApp.filter('durations', function () {
    return function (duration) {
        switch (duration) {
            case 0.5:
                return "Half Hour"
            case 1:
            case 2:
            case 3:
                if (duration === 1) {
                    return `${duration} Hour`
                } else {
                    return `${duration} Hours`
                }

                case 4:
                case 5:
                    return `Half a day (${duration} Hours)`
                case 6:
                    return `Full day`
        }
    }
})