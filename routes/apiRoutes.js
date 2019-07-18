// Requiring our models
var db = require("../models");

// Routes
module.exports = function(app) {
  // GET all groups
  app.get("/api/bakers", function(req, res) {
    db.Bakers.findAll({}).then(function(data) {
      res.json(data);
    });
  });

  // GET all bakers in a zipcode by product
  app.get("/api/bakers/:zipcode", function(req, res) {
    console.log(req.params.zipcode);

    db.Bakers.findAll({
      where: {
        zipCode: req.params.zipcode
      }
    }).then(function(data) {
      console.log(data[0]);

      // var dataObj = {
      //   dbData: data[0]
      // };
      // res.render("results", dataObj);
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
  app.post("/api/newProduct", function(req, res) {
    console.log(req.body);
    db.Products.create({
      category: req.body.category,
      bakerId: req.body.bakerId
    }).then(function(data) {
      res.json(data);
    });
  });
};
