function playerSwitch() {
  if(this.state.mute === 1){
    this.setState({
      mute: 0,
    })
    handleCircleReducer();
  } else {
    this.setState({
      mute: 1
    })
    handleCircleEnlarger();
  }
}
