"use strict";
/*======= navbar js =======*/
$('.navbar-toggler').on('click', function () {
    const offcanvasMenuItems = $('#navbarMenu .nav-item').clone();
    $('#offcanvasMenuItems').empty().append(offcanvasMenuItems);
});
//  trigger resize base on window size
$(window).resize(function () {
    if ($(window).width() <= 992) {
        $('#offcanvasMenuItems').empty().append(offcanvasMenuItems);
    }else{
        $('.btn-close').trigger('click');
    }
}).trigger('resize');


/*======= Initialize AOS animations =======*/
AOS.init();

/*========== template scroll =======*/
$(function () {
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
});

$(document).ready(function(){
    let breadcrumbImage = $('.breadcrumb-section').data('image');
    $('.breadcrumb-section').css('background-image', 'url(' + breadcrumbImage + ')');
});
