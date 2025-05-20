
$(document).ready(function () {
  // Run on scroll
  $(window).on("scroll", function () {
    checkScroll();
  });

  // Also run on load in case the page starts scrolled
  checkScroll();
  // menu bg add
  function checkScroll() {
    if ($(window).scrollTop() > 50) {
      $(".header-area").addClass("menu-bg");
    } else {
      $(".header-area").removeClass("menu-bg");
    }
  }
  $(".mobile-bars").click(function () {
    $(".nav").slideToggle();

    // Toggle icon
    const icon = $(this).find("i");
    if (icon.hasClass("fa-bars-staggered")) {
      icon.removeClass("fa-bars-staggered").addClass("fa-xmark");
    } else {
      icon.removeClass("fa-xmark").addClass("fa-bars-staggered");
    }
  });

  $(".ecm-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    dots: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 3000,
    navText: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 20">
        <path d="M8.33464 18.3327L5.39635 15.4205C3.05313 13.0981 1.88152 11.9369 1.70112 10.5216C1.65692 10.1748 1.65692 9.8239 1.70112 9.47713C1.88152 8.06181 3.05313 6.9006 5.39635 4.5782L8.33464 1.66602" stroke-width="1.5" stroke-linecap="round"/>
        </svg>`,
      '<img src="./assets/images/right.svg" alt="Next">',
    ],
    // autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1.4,
      },
      667: {
        items: 2.4,
        margin: 20,
      },
      1000: {
        items: 3.4,
        margin: 30,
      },
      1300: {
        items: 4.4,
        margin: 30,
      },
    },
  });

  $(".owl-carousel").on("initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel", function (event) {
    setTimeout(function () {
      $(".owl-item").removeClass("first-active-item");
      $(".owl-item.active").first().addClass("first-active-item");
    }, 100);
  });
});
