import React from "react";
import AlbumCover from "./components/albumCover/AlbumCover";
import TrackChart from "./components/PieChart/trackChart";
import Palette from "./components/palette/Palette";
import Timer from "./components/timer/timer";
import PlayButton from "./components/playButton/playButton";
import BackCircle from "./components/playButton/BackCircle";
import PlayerBackground from "./components/playerBackground";
import ReactBodymovin from "react-bodymovin";
import animation from "../../models/animation/bodymovin/data.json";
import animation1 from "../../models/animation/bodymovin/data1.json";

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
      sometime: new Date().getTime(),
      timer: Math.round(new Date().getTime() / 1000),
      loop: 1,
      mute: 0,
      time: 0,
      autoPlay: true
    };
    this.bodymovinOptions = {
      loop: false,
      autoplay: false,
      prerender: false,
      animationData: animation1
    };
    this.bodymovinOptions1 = {
      loop: false,
      autoplay: true,
      prerender: true,
      animationData: animation
    };
  }

  componentWillMount() {
    this.state.image.crossOrigin = "anonymous";
    this.state.image.src = this.props.imageSource;

    setTimeInterval.bind(this)();

    loadSlicesFromDatabase.bind(this)();

    updateLoopFromDatabase.bind(this)();
  }

  addSlice(color, value) {
    addSliceToDatabase.bind(this)(color, value);
  }

  handleClick() {
    if (this.state.autoPlay == true) {
      this.setState({
        autoPlay: false
      });
    } else {
      this.setState({
        autoPlay: true
      });
    }
    playerSwitch.bind(this)();
  }

  render() {
    if (this.state.autoPlay) {
      return (
        <Palette image={this.state.image}>
          {palette => (
            <div id="player">
              <div id="wrapper" class={"container" + this.state.index}>
                <TrackChart
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

                <AlbumCover index={this.state.index} />

              </div>
            </div>
          )}
        </Palette>
      );
    } else {
      return (
        <Palette image={this.state.image}>
          {palette => (
            <div id="player">
              <div id="wrapper" class={"container" + this.state.index}>

                <TrackChart
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

                <AlbumCover index={this.state.index} />

              </div>
            </div>
          )}
        </Palette>
      );
    }
  }
}
