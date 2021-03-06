const fs = require("fs");

module.exports.get = function (req, res) {
  let event = fs.readFileSync(
    "../app/data/event/" + req.params.id + ".json",
    "utf8"
  );
  console.log(event);
  res.setHeader("Content-Type", "application/json");
  res.send(event);
};

module.exports.save = function (req, res) {
  const event = req.body;
  fs.writeFileSync(
    "../app/data/event/" + req.params.id + ".json",
    JSON.stringify(event)
  );
  console.log("here");

  res.send(event);
};
