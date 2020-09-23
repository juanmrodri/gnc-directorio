jQuery(document).ready(function($){
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

function parallax() {
        var scrolled = $(window).scrollTop() + 1;
        $('#benner').css('background-position', '0' + -(scrolled * 0.3) + 'px');
}
$(window).scroll(function() {
        parallax();
});

$('.icono')
  .css('opacity', 0) // immediately hide element
  .waypoint(function(direction) {
    if (direction === 'down') {
      $(this.element).animate({ opacity: 1 })
    }
    else {
      $(this.element).animate({ opacity: 0 })
    }
  }, {
    offset: 'bottom-in-view'
  })

});