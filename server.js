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

// let generateProducts = function () {

//   let productObj = {
//       category: '',
//       foreignKey: 0
//   };

//   const categoryChoices = {
//       1: 'Cake',
//       2: 'Pie',
//       3: 'Cookies',
//       4: 'Donuts',
//       5: 'Cupcakes',
//       6: 'Brownies'
//   };

//   let incrementerStart = 1;
//   let incrementerStop = 50;

//   for (let i = incrementerStart; i <= incrementerStop; i++) {

//       //This is the random number of products the baker gets.
//       let randomProducts = (Math.floor(Math.random() * 6) + 1);
//       let thisBakersProducts = [];

//       for (j = 0; j < randomProducts; j++) {
//           // let newProductTableLine = [];
//           let randomProductID = (Math.floor(Math.random() * 6) + 1);
//           let randomProduct = categoryChoices[randomProductID]
//           let bakerID = i;
//           //If the product is already in the baker's list of products, decrease incrementer so that it will run again.
//           if (thisBakersProducts.includes(randomProduct)) {
//               j--;
//           }
//           else {
//               thisBakersProducts.push(randomProduct);
//               // newProductTableLine.push(randomProduct, bakerID);
//               productObj.category = randomProduct;
//               productObj.foreignKey = bakerID

//               console.log(productObj);

//               db.Products.create(productObj).then(function (dbExample) {
//                   res.json(dbExample);
//                   console.log(dbExample);
//               });
//           }
//       }
//   }
// }

// generateProducts();




module.exports = app;
