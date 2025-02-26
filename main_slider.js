// Main Slider
$(document).ready(function () {
  $(".single-item").slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2700,
  });
});

// Magazine Slider
$(document).ready(function () {
  $(".fade").slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
  });
});
