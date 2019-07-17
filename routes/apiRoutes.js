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
        zipCode: req.params.zipCode,
        product: req.params.product
      }
    }).then(function(data) {
      for (var i = 0; i < 10; i++) {
        let firstName = data.Bakers[i].firstName;
        let lastName = data.Bakers[i].lastName;
        let phoneNumber = data.Bakers[i].phoneNumber;
        let email = data.Bakers[i].email;
        let zipCode = data.Bakers[i].zipCode;
        let streetAddress = data.Bakers[i].streetAddress;
        let city = data.Bakers[i].city;
        let state = data.Bakers[i].state;
        let image = data.Bakers[i].image;

      $(".bkrimg").append(image);
      $(".bakerName").append(firstName, lastName);
      $(".bakerLink").html("<a href='./account/profile.html'></a>")
      }
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
