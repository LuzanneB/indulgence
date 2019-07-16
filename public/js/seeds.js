var faker = require("faker");
console.log("yes");

var bakers = [];

for (var i = 0; i < 50000; i++) {
  var firstName = faker.name.firstName();
  var lastName = faker.name.lastName();
  var phoneNumber = faker.phone.phoneNumberFormat();
  var image = faker.image.avatar();
  var email = faker.internet.email();
  var zipCode = faker.address.zipCode();
  var streetAddress = faker.address.streetAddress();
  var city = faker.address.city();
  var state = faker.address.state();

  bakers.push([
    firstName,
    lastName,
    phoneNumber,
    image,
    email,
    zipCode,
    streetAddress,
    city,
    state
  ]);
}

for (var j = 0; j < bakers.length; j++) {
  $.post("/api/bakers", bakers[j], function(err) {
    console.log(err);
  });
}
