import React from "react";
import Palette from "./components/palette/Palette";
import PieChart from "./components/PieChart/pieChart";
import FloatingActionButton from 'material-ui/FloatingActionButton';
var createPlayer = require('web-audio-player')
createPlayer.crossOrigin = "anonymous";

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: "pause",
      audio: createPlayer('public/content/images/songs/daft_punk.mp3')
    };
  }

  handlePlayClick() {
    if(this.state.playing === "pause"){
      this.setState({
        playing: "playing",
      })
      this.state.audio.play();
      this.state.audio.node.connect(this.state.audio.context.destination)
    } else {
      this.setState({
        playing: "pause"
      })
      this.state.audio.pause();
    }
  }

  render() {
    return (
      <div className="player player-wrapper">
        <PieChart />
        <div className={`player-cover large ${this.state.playing}`}
             onClick={() => {this.handlePlayClick()}}>
          <div className={`player-cover-image large ${this.state.playing}`}>
            <div className={`player-btn-icon ${this.state.playing}`}></div>
          </div>
        </div>
      </div>
    );
  }
}
