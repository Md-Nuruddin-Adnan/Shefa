$(document).ready(function () {

    // testimonial
    $('.client-single').on('click', function (event) {
       event.preventDefault();

       var active = $(this).hasClass('active');

       var parent = $(this).parents('.testi-wrap');

       if (!active) {
           var activeBlock = parent.find('.client-single.active');

           var currentPos = $(this).attr('data-position');

           var newPos = activeBlock.attr('data-position');

           activeBlock.removeClass('active').removeClass(newPos).addClass('inactive').addClass(currentPos);
           activeBlock.attr('data-position', currentPos);

           $(this).addClass('active').removeClass('inactive').removeClass(currentPos).addClass(newPos);
           $(this).attr('data-position', newPos);

       }
   });



// input function
$('.form-control').on('focusin', function() {
    $(this).parent().find('label').addClass('active');
  });
  
  $('.form-control').on('focusout', function() {
    if (!this.value) {
      $(this).parent().find('label').removeClass('active');
    }
});

}(jQuery));
