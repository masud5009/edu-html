AOS.init();
//template scroll
$(document).ready(function () {
    $('.template-card').hover(
      function () {
        // Calculate the height of the image to scroll completely out of view
        const imgHeight = $(this).find('.template-img').outerHeight();
        $(this).find('.template-img').stop().animate({ top: `-${imgHeight}px` }, 5000); // Scroll up completely
      },
      function () {
        $(this).find('.template-img').stop().animate({ top: '0' }, 5000); // Scroll back to original position
      }
    );
  });

  //testimonial slider 
  $(document).ready(function () {
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
  });