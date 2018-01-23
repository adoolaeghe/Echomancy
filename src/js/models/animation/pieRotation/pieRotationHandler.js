function eventListenerForEachSlice() {
  const elements = Array.from(document.querySelectorAll('#wrapper1 path'))
  if ((this.props.loop == elements.length) && (this.state.events === 1)){
    elements.forEach(function(el) {
      el.classList.add('path');
      el.addEventListener("click", function(){
        this.setState({
          add: el.getAttribute("fill")
        })
      }.bind(this))
    }.bind(this))
    this.setState({
      events: this.state.events + 1
    })
  }
}

function setPieRotationAngle() {
  const animInterval = setInterval( () => {
    const currentTime = new Date().getTime();
    const pastTime = new Date('Novemeber 23, 1994 03:24:00').getTime();
    const timeDifference = currentTime - pastTime
    const time = (((timeDifference)/1000)*360)/8.5
    this.setState({
      time : time
    })
  }, 50)
}
