$(document).ready(function() {
  $(window).scroll(function() {
    // checks if window is scrolled more than 500px, adds/removes transparent-nav class
    if ($(this).scrollTop() > 150) {
      $(".header").addClass("transparent-nav");
    } else {
      $(".header").removeClass("transparent-nav");
    }
  });
  $(".owl-carousel").owlCarousel();
});
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});
/*******************************
 * ACCORDION WITH TOGGLE ICONS
 *******************************/
function toggleIcon(e) {
  $(e.target)
    .prev(".panel-heading")
    .find(".more-less")
    .toggleClass("fa-plus fa-minus");
}
$(".panel-group").on("hidden.bs.collapse", toggleIcon);
$(".panel-group").on("shown.bs.collapse", toggleIcon);
/*******************************
 * AOS SCROLL EFFECTSS
 *******************************/
AOS.init({ duration: 1200 });
