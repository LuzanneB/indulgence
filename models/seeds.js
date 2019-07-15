var faker = require("faker");

var firstName = faker.name.firstName();
var lastName = faker.name.lastName();
var phoneNumber = faker.phone.phoneNumberFormat();
var image = faker.image.avatar();
var email = faker.internet.email();
var zipCode = faker.address.zipCode();
var streetAddress = faker.address.streetAddress();
var city = faker.address.city();
var state = faker.address.state();

console.log(firstName, lastName, phoneNumber, image, email, zipCode,streetAddress, city, state);