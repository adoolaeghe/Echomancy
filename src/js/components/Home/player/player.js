import React from "react";
import pieData from "../graph/piePlayer";
import FloatingActionButton from "material-ui/FloatingActionButton";
var createPlayer = require("web-audio-player");
createPlayer.crossOrigin = "anonymous";

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: "pause",
      audio: createPlayer("public/content/images/songs/daft_punk.mp3")
    };
  }
  componentDidMount() {
    Highcharts.chart(`container${this.props.id}`, pieData())

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
    return (
      <div className={`player player-wrapper ${this.props.size}`}>
        <div
          className={`player-wrapper ${this.props.size} `}
        >
          <div id={`container${this.props.id}`} className="player-container rotating" />
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
            >
              <div className={`player-btn-icon ${this.state.playing}`} />
            </div>
          )}
        </div>
      </div>
    );
  }
}
