(function () {
  "use strict";

  /* Slider section */

  $(document).ready(function () {
    $(".slider").slick({
      // autoplay
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
      dots: true,

      // fade
      useTransform: true,
      speed: 2000,
      fade: true,
      cssEase: "cubic-bezier(0.22, 1, 0.36, 1)",
    });

    /* Development slider */

    let blocks = document.getElementsByClassName("development__block").length;

    let sl = document.getElementById("mark");
    let bt = document.getElementsByClassName("development__block");

    /* Mentor's slider */
    $(".slider-bottom").slick({
      // autoplay
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
      dots: true,
      rows: 0,
    });

    if (blocks > 3) {

      $(".slider-top").slick({
        // autoplay
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
      });
      sl.style.display = "block";
      sl.style.padding = "0";
      sl.style.verticalAlign = "top";
    }

    window.addEventListener("resize", function () {
      if (window.innerWidth <= 850) {
        $(".slider-top").slick({
          // autoplay
          arrows: false,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          dots: true,
          responsive: [{
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          }, ]
        });
        sl.style.display = "block";
        sl.style.padding = "0";
        sl.style.verticalAlign = "top";
      }
    });

    let show_burger = document.getElementById('burger');
    let burger_button = document.getElementById('burger-button');
    burger_button.addEventListener('click', function () {
      if (show_burger.style.display == 'none') {
        show_burger.style.display = 'flex';
      } else {
        show_burger.style.display = 'none';
      }

    })
  });








})();