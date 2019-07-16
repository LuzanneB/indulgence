require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
//-------------------------------------------------------------------
// CODE HERE FOR SEEDING OUT DATABASE TABLES
//-------------------------------------------------------------------
// var faker = require("faker");

// function generateBakers() {
//   var userObj = {
//     firstName: "",
//     lastName: "",
//     phoneNumber: "",
//     email: "",
//     zipCode: "",
//     streetAddress: "",
//     city: "",
//     state: "",
//     image: ""
//   };
//   // var users = [];
//   for (var i = 0; i < 5000; i++) {
//     userObj.firstName = faker.name.firstName();
//     userObj.lastName = faker.name.lastName();
//     userObj.phoneNumber = faker.phone.phoneNumberFormat();
//     userObj.email = faker.internet.email();
//     userObj.zipCode = faker.address.zipCode();
//     userObj.streetAddress = faker.address.streetAddress();
//     userObj.city = faker.address.city();
//     userObj.state = faker.address.state();
//     userObj.image = faker.image.avatar();
//     console.log(userObj);
//     // users.push(userObj);

//     db.Bakers.create(userObj).then(function(dbExample) {
//       // res.json(dbExample);
//       // console.log(dbExample);
//     });
//   }
// }

// generateBakers();

module.exports = app;
