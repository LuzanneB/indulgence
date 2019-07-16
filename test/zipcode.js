var db = require("../models");
var app = require("express");

app.get("/api/bakers/:zipcode", function(req, res) {
  db.bakers
    .findAll({
      where: {
        zipCode: req.params.zipCode
      }
    })
    .then(function(dbBakers) {
      return res.json(dbBakers);
    });
});
