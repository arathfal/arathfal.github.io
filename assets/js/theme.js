$(document).ready(function () {
  $("#profile").hide();
  $(".name").click(function () {
    $(".name").fadeOut(1200);
    $(".profession").fadeOut(1200);
    $(".arrow-left").fadeOut(1200);
    $(".arrow-right").fadeOut(1200);
    $("#profile").delay(1200).fadeIn(1200);
  });

  $(".close-button").click(function () {
    $("#profile").fadeOut(1200);
    $(".name").delay(1200).fadeIn(1200);
    $(".profession").delay(1200).fadeIn(1200);
    $(".arrow-left").delay(1200).fadeIn(1200);
    $(".arrow-right").delay(1200).fadeIn(1200);
  });
});
