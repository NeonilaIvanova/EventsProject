// Require express and create an instance of it
const express = require("express");
const path = require("path");
const events = require("./eventController");
const app = express();
const rootPath = path.normalize(__dirname + "/../");
const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(express.static(rootPath + "/app"));

app.get('/data/event/:id', events.get);
app.post('/data/event/:id', events.save);
app.get('/data/event', events.getAll);

// Change the 404 message modifing the middleware
app.use(function (req, res, next) {
  res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

// start the server in the port 3000 !
app.listen(8000, function () {
  console.log("Listening on port 8000");
});