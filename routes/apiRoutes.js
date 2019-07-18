// Requiring our models
var db = require("../models");

// Routes
module.exports = function(app) {
  // GET all groups
  app.get("/api/bakers", function(req, res) {
    db.findAll({}).then(function(data) {
      res.json(data);
    });
  });

  // GET all bakers in a zipcode by product
  app.get("/api/bakers/:zipcode/:product", function(req, res) {
    db.findAll({
      where: {
        zipCode: req.body.zipInput,
        product: req.body.productInput
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  // POST a new Baker
  app.post("/api/newBaker", function(req, res) {
    console.log(req.body);
    db.Bakers.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      zipCode: req.body.zipCode,
      streetAddress: req.body.streetAddress,
      city: req.body.city,
      state: req.body.state,
      image: req.body.image
    }).then(function(data) {
      res.json(data);
    });
  });
};
