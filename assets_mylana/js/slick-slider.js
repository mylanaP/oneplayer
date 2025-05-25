$(document).ready(()=>{
  $('.slick-slider').slick({
    dots: false,
    infinite: true, 
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: false,
    variableWidth: true,
    prevArrow: false,
    nextArrow: false
  });
});