$(document).ready(function() {

    /* Scrolling Effects */
    $('.js--scroll-to-services').click(function() {
      $('html,body').animate({scrollTop:$('.js--section-services').offset().top},1000);
    });
});