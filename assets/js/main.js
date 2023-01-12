(function ($) {
  // Header shrink
  // let element = document.querySelector(".my-element");
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 90) {
      $(".menu-bar").addClass("menu-bar-shrink");
    } else {
      $(".menu-bar").removeClass("menu-bar-shrink");
    }
  });
  //

  $(".input").on("click", function () {
    $(".fa-eye-slash").toggleClass("show");
  });
  // Slick slider with 3 coulmn

  $(".slider-col-3").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  // Slick slider with 4 coulmn
  $(".slider-col-4").slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplayspeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 2,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  // Slider V3
  $(".slider-col-2").slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplayspeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        infinite: true,
        dots: false,
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  //
  $(".slider-col-6").slick({
    dots: false,
    infinite: true,
    autoplayspeed: 2000,
    arrows: false,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 410,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  //
  const counterElement = document.querySelector(".counter");

  if (counterElement) {
    const counterUp = window.counterUp.default;
    const callback = (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting && !el.classList.contains("is-visible")) {
          counterUp(el, {
            duration: 2000,
            delay: 16,
          });
          el.classList.add("is-visible");
        }
      });
    };
    const IO = new IntersectionObserver(callback, { threshold: 1 });
    IO.observe(counterElement);
  }
  // Form
  let passwordField = $("[type=password]");

  passwordField.on("input", function () {
    if (this.value) {
      $(this).siblings(".input-group-text").find(".icon").removeClass("d-none");
    } else {
      $(this).siblings(".input-group-text").find(".icon").addClass("d-none");
    }
  });

  $(".icon").on("click", function () {
    let inputField = $(this).parent().siblings("input");
    let attrType = inputField.attr("type");

    if (attrType == "password") {
      inputField.attr("type", "text");
      $(this).removeClass("fa-eye");
      $(this).addClass("fa-eye-slash");
    } else {
      inputField.attr("type", "password");
      $(this).addClass("fa-eye");
      $(this).removeClass("fa-eye-slash");
    }
  });
})(jQuery);

AOS.init();
