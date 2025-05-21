export const sliderProps = {
  testimonials: {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    speed: 400,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    autoplay: false,
    autoplaySpeed: 5000,
  },
  destination: {
    infinite: true,
    speed: 400,
    arrows: false,
    dots: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
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
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  },
  hotDeals: {
    infinite: true,
    speed: 400,
    arrows: false,
    dots: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  },
  client: {
    infinite: true,
    speed: 400,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  },
  gallery: {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      }
    ]
  },
  product: {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    speed: 400,
    arrows: false,
    dots: true,
    centerMode: false,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  },
};
