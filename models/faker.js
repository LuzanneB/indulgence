module.exports = function() {
  var fakeBakers = [];
  var desiredFakeBakers = 25000;
  for (var i = 0; i < desiredFakeBakers; I++) {
    fakeBakers.push(createFakeBaker());
  }
};
