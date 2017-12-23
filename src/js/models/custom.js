var $window = $(window);

$('.playing-dot')

$window.on('scroll', function() {
  if($window.scrollTop() > 550) {
    // article 1 animation
    if ($window.scrollTop() > 1200) {
    // article 2 animation
    } else if ($window.scrollTop() < 1200) {
    // other article aanimation
    }
  } else if ($window.scrollTop() < 550) {

  }
})

$(document).ready(function() {
    function loop() {
        $('.playing-dot').css({left:-300});
        $('.playing-dot').animate ({
            left: '+=120vw',
        }, 6000, 'linear', function() {
            loop();
        });
    }
    loop();
});
