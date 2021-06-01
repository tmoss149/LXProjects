$(document).ready(function(){


  var $header = $('header');
  var $sticky = $header.before($header.clone().addClass("sticky"));

  $(window).on("scroll", function(){
    var scrollFromTop = $(window).scrollTop();
    $("body").toggleClass("scroll", (scrollFromTop > 350));
  });



// masonry

  $('.grid').masonry({
      //options
      itemSelector: '.grid-item',
      columnWidth: 120,
      fitWidth: true,
      gutter : 0
  });



//slick Slider
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 1300,
    arrows: true,
    centerMode: true,
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
  });
});
