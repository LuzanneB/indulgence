$(document).ready(function() {
  function updatePage(res) {
    $.ajax({
      method: "PUT",
      url: "/api/bakers",
      data: res
    }).then(function() {
      $(".bkrimg").append(res.image);
    });
  }

  updatePage();
});
