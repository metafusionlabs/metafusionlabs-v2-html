 
//   tsParticles.load("tsparticles", {
//     background: {
//       color: {
//         value: "#000"
//       }
//     },
//     particles: {
//       number: {
//         value: 100
//       },
//       color: {
//         value: "#fdd085"
//       },
//       shape: {
//         type: "circle"
//       },
//       opacity: {
//         value: 0.5
//       },
//       size: {
//         value: 3
//       },
//       move: {
//         enable: true,
//         speed: 2
//       }
//     },
//     interactivity: {
//       events: {
//         onhover: {
//           enable: true,
//           mode: "repulse"
//         }
//       }
//     }
//   }); 


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
    $('.mobile-bars').click(function () {
      $('.nav').slideToggle();  

      // Toggle icon
      const icon = $(this).find('i');
      if (icon.hasClass('fa-bars-staggered')) {
        icon.removeClass('fa-bars-staggered').addClass('fa-xmark');
      } else {
        icon.removeClass('fa-xmark').addClass('fa-bars-staggered');
      }
    });


	$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay:true,
    dots: false,
    autoplayTimeout:3000,
    autoplayHoverPause: true,
    smartSpeed: 3000,
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
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

$(".owl-carousel").on(
    "initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel",
    function (event) {
      setTimeout(function () {
        $(".owl-item").removeClass("first-active-item");
        $(".owl-item.active").first().addClass("first-active-item");
      }, 100);
    }
  );


  });