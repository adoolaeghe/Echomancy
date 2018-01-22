let h = document.getElementsByClassName("auth");
let stuck = false;
let stickPoint = getDistance();

function getDistance() {
  let topDist = h.offsetTop;
  return topDist;
}

window.onscroll = function(event) {
  event.preventDefault()
  var distance = h[0].offsetTop - window.pageYOffset;
  var offset = window.pageYOffset;
  console.log(offset)
  if ( (offset > 750) && !stuck) {
    h[0].classList.add("sticky");
  } else if (offset <= 750){
    h[0].classList.remove("sticky");
  }
}
