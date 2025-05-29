$(document).ready(()=>{
  $('.slick-slider').on('init afterChange', function (event, slick) {
  
    $('.slick-slide').each(function () {
      if ($(this).hasClass('slick-active')) {
        $(this).find('.slider-overlay').removeClass('d-flex').addClass('d-none');
      } else {
        $(this).find('.slider-overlay').removeClass('d-none').addClass('d-flex');
      }
    });
  });
  $('.slick-slider').slick({
    dots: false,
    infinite: true, 
    speed: 300,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: false,
    variableWidth: true,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1
        }
      }
    ]

  });
});