jQuery(document).ready(function ($) {
  $(window).scroll(function () {
    // Intoduction
    if ($(document).scrollTop() > 80) {
      $("#introduction").addClass("animated fadeInUp");
    } else {
      $("#introduction").removeClass("fadeInUp");
    }
    if ($(document).scrollTop() > 180) {
      $(".art-intro").removeClass("fadeOutLeft");
      $(".img-intro").removeClass("fadeOutRight");
      $(".art-intro").addClass("animated fadeInLeft");
      $(".img-intro").addClass("animated fadeInRight");
    } else {
      $(".art-intro").removeClass("fadeInLeft");
      $(".img-intro").removeClass("fadeInRight");
      $(".art-intro").addClass("animated fadeOutLeft");
      $(".img-intro").addClass("animated fadeOutRight");
    }

    // Navigation Bar
    if ($(document).scrollTop() > 600) {
      $(".navbar").removeClass("fadeIn");
      $("body").addClass("shrink");
      $(".navbar").addClass("animated fadeInDown");
    } else {
      $(".navbar").removeClass("fadeInDown");
      $("body").removeClass("shrink");
      $(".navbar").addClass("animated fadeIn");
    }

    // Element
    if ($(document).scrollTop() > 500) {
      $("#element").addClass("animated fadeInUp");
    } else {
      $("#element").removeClass("fadeInUp");
    }
    if ($(document).scrollTop() > 710) {
      $(".element-box").removeClass("fadeOutDown");
      $(".element-box").addClass("animated fadeInUp");
    } else {
      $(".element-box").removeClass("fadeInUp");
      $(".element-box").addClass("animated fadeOutDown");
    }

    // Kind
    if ($(document).scrollTop() > 1400) {
      $("#kind").addClass("animated fadeInUp");
    } else {
      $("#kind").removeClass("fadeInUp");
    }
    if ($(document).scrollTop() > 1600) {
      $(".two-D").removeClass("fadeOutLeft");
      $(".three-D").removeClass("fadeOutRight");
      $(".two-D").addClass("animated fadeInLeft");
      $(".three-D").addClass("animated fadeInRight");
    } else {
      $(".two-D").removeClass("fadeInLeft");
      $(".three-D").removeClass("fadeInRight");
      $(".two-D").addClass("animated fadeOutLeft");
      $(".three-D").addClass("animated fadeOutRight");
    }

    // Types
    if ($(document).scrollTop() > 2000) {
      $(".anim-title").removeClass("fadeOut");
      $(".anim-left").removeClass("fadeOutLeft");
      $(".anim-right").removeClass("fadeOutRight");
      $(".anim-title").addClass("animated fadeIn");
      $(".anim-left").addClass("animated fadeInLeft");
      $(".anim-right").addClass("animated fadeInRight");
    } else {
      $(".anim-title").removeClass("fadeIn");
      $(".anim-left").removeClass("fadeInLeft");
      $(".anim-right").removeClass("fadeInRight");
      $(".anim-title").addClass("animated fadeOut");
      $(".anim-left").addClass("animated fadeOutLeft");
      $(".anim-right").addClass("animated fadeOutRight");
    }
  });
});
