import React from "react";

import Palette from "./components/palette/Palette";
import PieChart from "./components/PieChart/pieChart";

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.db = this.props.database.child(this.props.index);
    this.state = {
      slices: [],
      userNames: [],
      audioContext: this.props.audioContext,
      index: this.props.index,
      image: new Image(),
      timer: Math.round(new Date().getTime() / 1000),
      loop: 1,
      mute: 0,
      time: 0,
      autoPlay: true
    };
  }

  componentWillMount() {
    this.state.image.crossOrigin = "anonymous";
    this.state.image.src = this.props.imageSource;

    /// DEFINE NEW ROTATION ANGLE EVERY AMOUNT OF TIME
    setPieRotationAngle.bind(this)();

    /// LOAD ALL THE SLICE FROM DATABASE => SHOULD BE REFACTORED TO REDUX
    loadSlicesFromDatabase.bind(this)();

    updateLoopFromDatabase.bind(this)();
  }

  addSlice(color, value) {
    addSliceToDatabase.bind(this)(color, value);
  }

  /// ON/OFF SWITCH TRIGERED BY PLAY BUTTON PLUS ANIMATION
  onOffSwitch() {
    playerSwitch.bind(this)();
    browserHistory.push('/details1')
  }

  render() {

    return (
      <Palette image={this.state.image}>
        {palette => (
          <div className="player">
            <PieChart
              addSlice={this.addSlice.bind(this)}
              storage={this.props.storage}
              db={this.db}
              slices={this.state}
              color={palette}
              loop={this.state.loop}
              mute={this.state.mute}
              audioContext={this.state.audioContext}
              time={this.state.time}
              index={this.state.index}
            />
            <div className="player-cover"></div>
        </div>
      )}
      </Palette>
    );
  }
}
