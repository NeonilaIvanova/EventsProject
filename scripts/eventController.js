const fs = require("fs");
const {
    json
} = require("express");

module.exports.get = function (req, res) {
    var event = fs.readFileSync('../app/data/event/' + req.params.id + '.json', 'utf8');
    res.setHeader('Content-Type', 'application/json');
    res.send(event);
};


module.exports.save = function (req, res) {
    var event = req.body;

    function setEventData(event, count) {
        event = event[0]
        event.upVoteCount = 0
        event.time = setStartTime(event.time)
        event.id = count
        // event.duration = setDuration(event.time)

        // json.sessions.push(event)

        fs.writeFileSync('../app/data/event/' + count + '.json', JSON.stringify(event));
    }

    function setStartTime(time) {
        console.log('here')
        const startEndTime = time.split('/')
        return startTime = startEndTime[0]
    }

    setEventData(event, count);

    res.send(event);
}

/* module.exports.save = function (req, res) {
    const event = req.body;



    fs.readFile("../app/data/event/1.json", (err, data) => {
        function getEventID() {

            var json = JSON.parse(data)
            let sessions = json.sessions
            let getID = sessions.length
            event.id = ++getID
            let eventID = event.id
            setEventData(event, eventID)
        }



        function setStartTime(time) {
            const startEndTime = time.split('/')
            return startTime = startEndTime[0]
        } */

/*         function setDuration(time) {
            const startEndTime = time.split('/')
            const startTime = startEndTime[0]
            const endTime = startEndTime[1]
            const startHoursMinutes = startTime.split(';')
            const startHour = startHoursMinutes[0]
            const startMinutes = startHoursMinutes[1]
            const endHoursMinutes = endTime.split(':')
            const endHour = endHoursMinutes[0]
            const endMinutes = endHoursMinutes[1]
            const durationHours = 0
            const durationMinutes = 0

            if (endHour < 12) {
                endHour += 12
                durationHours = endHour - startHour
            } else {
                endHour - startHour
            }

            if (startMinutes === '30') {
                durationHours--
            } else {
                durationMinutes = '5'
            }

        } */

/* 
        getEventID()

    })


    res.send(event);
}; */

module.exports.getAll = function (req, res) {
    var path = '../app/data/event/';

    var files = [];
    try {
        files = fs.readdirSync(path);
    } catch (e) {
        console.log(e)
        res.send('[]');
        res.end();
    }
    var results = "[";
    for (var idx = 0; idx < files.length; idx++) {
        if (files[idx].indexOf(".json") == files[idx].length - 5) {
            results += fs.readFileSync(path + "/" + files[idx]) + ",";
        }
    }
    results = results.substr(0, results.length - 1);
    results += "]";

    console.log(results)

    res.setHeader('Content-Type', 'application/json');
    res.send(results);
    res.end();
};




/* module.exports.save = function (req, res) {

    fs.readFile("../app/data/event/1.json", (err, data) => { // READ
        const event = req.body;
        console.log(data)
        console.log(event)
        if (err) {
            return console.error(err);
        };
        data = JSON.parse(data.toString());
        /*       fs.writeFile("../app/data/event/1.json", JSON.stringify(event), (err, result) => { // WRITE
              if (err) {
                  return console.error(err);
              } else {
                  console.log(result);
                  console.log("Success");
              }

          });
    });



    res.send(event);
}; */