var faker = require("faker");

function generateBakers() {
  let users = [];  
  for (var i = 0; i < 100000; i++) {
    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();
    var phoneNumber = faker.phone.phoneNumberFormat();
    var image = faker.image.avatar();
    var email = faker.internet.email();
    var zipCode = faker.address.zipCode();
    var streetAddress = faker.address.streetAddress();
    var city = faker.address.city();
    var state = faker.address.state();

    users.push({});
    console.log(
      "Name: " + firstName,
      lastName,
      "\nPhone Number: " + phoneNumber,
      "\nAvatar: " + image,
      "\nEmail: " + email,
      "\nZip Code: " + zipCode,
      "\nStreet Address: " + streetAddress,
      "\nCity: " + city,
      "\nState: " + state + "\n-------------------------"
    );
  }
}
generateBakers();
