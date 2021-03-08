const fs = require("fs");
const {
    json
} = require("express");

module.exports.get = function (req, res) {
    let event = fs.readFileSync(
        "../app/data/event/1.json",
        "utf8"
    );
    res.setHeader("Content-Type", "application/json");
    res.send(event);
};


/* module.exports.save = function (req, res) {
    const event = req.body;
    fs.writeFileSync(
        "../app/data/event/" + req.params.id + ".json",
        JSON.stringify(event)
    );

    res.send(event);
}; */


module.exports.save = function (req, res) {
    const event = req.body;

    fs.readFile("../app/data/event/1.json", (err, data) => {
        function getEventID() {
            var json = JSON.parse(data)
            let sessions = json.sessions
            let getID = sessions.length
            event.id = ++getID
            setEventData(json)
        }

        function setEventData(json) {
            event.upVoteCount = 0
            event.time = setStartTime(event.time)
            // event.duration = setDuration(event.time)

            json.sessions.push(event)
            console.log(json)

            fs.writeFileSync(
                "../app/data/event/1.json",
                JSON.stringify(json)
            );
        }

        function setStartTime(time) {
            const startEndTime = time.split('/')
            return startTime = startEndTime[0]
        }

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


        getEventID()

    })


    res.send(event);
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