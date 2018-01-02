import React from "react";

import AlbumCover from "./components/albumCover/AlbumCover";
import Palette from "./components/palette/Palette";
import PieChart from "./components/PieChart/pieChart";
import PlayButton from "./components/playButton/playButton";
import PlayerBackground from "./components/playerBackground";
import Timer from "./components/timer/timer";


import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
  hashHistory,
 withRouter
} from 'react-router-dom'

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

            <div className="btn"
                 onClick={() => {this.onOffSwitch()}}>
                hello
            </div>

            <div className="wrapper"
                 id={"container" + this.state.index}>
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

            <PlayButton color={"white"}
                        opacity={1}
                        size={"40%"}
                        index={this.state.index}/>

            <AlbumCover index={this.state.index} />

          </div>
        </div>
      )}
      </Palette>
    );
  }
}
