$(document).ready(function () {
  $(".introduce-details").hide();
  $("#aboutBtn").click(function () {
    $(".introduce").fadeOut(1200);
    $(".introduce-details").delay(1200).fadeIn(1200);
  });

  $(".close").click(function () {
    $(".introduce-details").fadeOut(1200);
    $(".introduce").delay(1200).fadeIn(1200);
  });
});
