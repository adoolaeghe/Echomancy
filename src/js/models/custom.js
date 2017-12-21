var $window = $(window);
var $layer1 = $('#layer-1');
var $layer2 = $('#layer-2');
var $layer3 = $('#layer-3');
var $layer4 = $('#layer-4');
var $layer5 = $('#layer-5');

function animateBack() {
  $layer1.css('left', 0);
  $layer2.css('left', 0);
  $layer3.css('left', 0);
  $layer4.css('left', 0);
  $layer5.css('left', 0);
  $layer1.css('opacity', 0);
  $layer2.css('opacity', 0);
  $layer3.css('opacity', 0);
  $layer4.css('opacity', 0);
  $layer5.css('opacity', 0);
}

function animateRight() {
  $layer1.css('left', 0);
  $layer2.css('left', 0);
  $layer3.css('left', 0);
  $layer4.css('left', 0);
  $layer5.css('left', 0);
  $layer1.css('opacity', 1);
  $layer2.css('opacity', 1);
  $layer3.css('opacity', 1);
  $layer4.css('opacity', 1);
  $layer5.css('opacity', 1);
}

function drawLineHeight() {
  $('.line-background-1').css('height', 170);
  $('.line-background-2').css('height', 200);
}

function removeLineheight() {
  $('.line-background-1').css('height', 0);
  $('.line-background-2').css('height', 0);
}

function article3HeaderDisplay() {
  $('.article3-header>h2').css('opacity', 1);
  $('.article3-header>h1').css('opacity', 1);
}

function article3HeaderRemove() {
  $('.article3-header>h2').css('opacity', 0);
  $('.article3-header>h1').css('opacity', 0);
}

function article4HeaderDisplay() {
  $('h1.article4-header').css('opacity', 1);
  $('h2.article4-sub-header').css('opacity', 1);
}

function article4HeaderRemove() {
  $('h1.article4-header').css('opacity', 0);
  $('h2.article4-sub-header').css('opacity', 0);
}


$window.on('scroll', function() {
  if($window.scrollTop() > 550) {
    article3HeaderDisplay();
    drawLineHeight()
    if ($window.scrollTop() > 1200) {
      article4HeaderDisplay()
    } else if ($window.scrollTop() < 1200) {
      article4HeaderRemove()
    }
  } else if ($window.scrollTop() < 550) {

    article3HeaderRemove();
    removeLineheight();
  }
})
