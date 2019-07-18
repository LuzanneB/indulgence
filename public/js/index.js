$(window).on("load", function() {
  //logic for routing
  var zipInput = $("#zipcode").val();
  console.log(zipInput);

  $(".iconbutton").on("click", function() {
    var productInput = $(this).attr("value");
    console.log(productInput);
  });

  //Click events
  $(document).on("click", "button.search", getBakers);

  function getBakers() {
    $.get("/api/bakers/:" + zipInput + "/:" + productInput, function(data) {
      console.log("Bakers", data);
    }).then(function() {
      window.location.href = "/results";
    });
  }
});
