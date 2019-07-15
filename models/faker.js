module.exports = function(faker, seeds){
    var fakeBakers = [];
    var desiredFakeBakers = 100;
    for (var i = 0; i < desiredFakeBakers; I++) {
        fakeBakers.push(createFakeUser());
    }
}