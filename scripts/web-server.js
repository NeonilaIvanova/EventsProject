// Require express and create an instance of it
const express = require('express');
const path = require('path')
const app = express();
const rootPath = path.normalize(__dirname + '/../')

app.get('/', function (req, res) {
  res.send('');
});

app.get('/welcome', function (req, res) {
  res.send('');
});

app.use(express.static(rootPath + '/app'))

// Change the 404 message modifing the middleware
app.use(function (req, res, next) {
  res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

// start the server in the port 3000 !
app.listen(8000, function () {
  console.log('Listening on port 8000');
});