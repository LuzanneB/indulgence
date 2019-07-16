var faker = require("faker");

var Bakers = [];

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

  Bakers.push([
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
  // console.log(
  //   "Name: " + firstName,
  //   lastName,
  //   "\nPhone Number: " + phoneNumber,
  //   "\nAvatar: " + image,
  //   "\nEmail: " + email,
  //   "\nZip Code: " + zipCode,
  //   "\nStreet Address: " + streetAddress,
  //   "\nCity: " + city,
  //   "\nState: " + state + "\n-------------------------"
  // );
}
module.exports = Bakers;
