"use strict";
/*======= navbar js =======*/
$('.navbar-toggler').on('click', function () {
  const offcanvasMenuItems = $('#navbarMenu .nav-item').clone();
  $('#offcanvasMenuItems').empty().append(offcanvasMenuItems);
});
document.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  // Check if the scroll position is greater than 50px (or any value you prefer)
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

//  trigger resize base on window size
$(window).resize(function () {
  if ($(window).width() <= 992) {
    $('#offcanvasMenuItems').empty().append(offcanvasMenuItems);
  } else {
    $('.btn-close').trigger('click');
  }
}).trigger('resize');


/*======= Initialize AOS animations =======*/
AOS.init();

/*========== template scroll =======*/
$(function () {
  $('.template-card').hover(
    function () {
      let templateImg = $(this).find('.template-img');

      if (templateImg.length) {
        let imgHeight = templateImg.outerHeight();
        templateImg.stop(true, true).animate({ top: `-${imgHeight}px` }, 5000);
      }
    },
    function () {
      let templateImg = $(this).find('.template-img');

      if (templateImg.length) {
        templateImg.stop().animate({ top: '0' }, 5000);
      }
    }
  );

  /*========== testimonial slider =======*/
  $('.testimonial-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
    adaptiveHeight: true,
  });
  /*========== user profile slider =======*/
  $('.user-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

});

$(document).ready(function () {
  let breadcrumbImage = $('.breadcrumb-section').data('image');
  $('.breadcrumb-section').css('background-image', 'url(' + breadcrumbImage + ')');
});
