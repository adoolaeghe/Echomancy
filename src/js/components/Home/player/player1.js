import React from "react";
import pieData from "../graph/piePlayer1";
import FloatingActionButton from "material-ui/FloatingActionButton";
var createPlayer = require("web-audio-player");
import Avatar from 'material-ui/Avatar';
import {Doughnut} from 'react-chartjs-2';
createPlayer.crossOrigin = "anonymous";

export default class Player extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playing: "pause",
      audio: createPlayer("public/content/images/songs/daft_punk.mp3"),
      playerData: this.props.playerData,
      data: pieData()
    };
  }

  handlePlayClick() {
    this.props.playerClick();
    if (this.state.playing === "pause") {
      this.setState({
        playing: "playing"
      });
      var context;
      window.addEventListener('load', init, false);
      function init() {
        try {
          window.AudioContext = window.AudioContext||window.webkitAudioContext;
          context = new AudioContext();
        }
        catch(e) {
          alert('Web Audio API is not supported in this browser');
        }
      }
    } else {
      this.setState({
        playing: "pause"
      });
    }
  }

  render() {
    const legend = {
      display: false
    }
    return (
      <div className={`player player-wrapper ${this.props.size}`}>
        <div
          className={`player-wrapper rotating ${this.props.size} `}
        >
          <Doughnut data={this.state.data} legend={legend} width={370} height={370} />
        </div>
        <div
          className={`player-cover ${this.props.size} ${this.state.playing}`}
          onClick={() => {
            this.handlePlayClick();
          }}
        >
          {this.props.size != "small" && (
            <div
              className={`player-cover-image ${this.props.size} ${this.state.playing}`}
              style={{opacity: "1"}}
            >
              <div className='rotating' style={{width: "340px", opacity: "1", height: "340px", position: 'absolute'}}>
                {this.props.handleAvatar}
              </div>
              <div className={`player-btn-icon ${this.state.playing}`} />
            </div>
          )}
        </div>
      </div>
    );
  }
}
