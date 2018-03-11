import React from "react";
import Palette from "./components/palette/Palette";
import PieChart from "./components/PieChart/pieChart";
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
    Highcharts.chart(`container${this.props.id}`, {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        height: "400px",
        backgroundColor: "transparent",
        type: "pie"
      },
      title: {
        text: ""
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          size: this.props.size === "small" ? 180 : 320,
          dataLabels: {
            enabled: true,
            format: "",
            style: {
              color:
                (Highcharts.theme && Highcharts.theme.contrastTextColor) ||
                "black"
            }
          }
        }
      },
      series: [
        {
          colorByPoint: true,
          data: this.props.slices
        }
      ]
    });
  }
  handlePlayClick() {
    if (this.state.playing === "pause") {
      this.setState({
        playing: "playing"
      });
      this.state.audio.play();
      this.state.audio.node.connect(this.state.audio.context.destination);
    } else {
      this.setState({
        playing: "pause"
      });
      this.state.audio.pause();
    }
  }

  render() {
    return (
      <div className={`player player-wrapper ${this.props.size}`}>
        <div
          className={`player-wrapper ${this.props.size} ${this.props.rotation}`}
        >
          <div id={`container${this.props.id}`} className="player-container" />
        </div>
        <div
          className={`player-cover ${this.props.size} ${this.state.playing}`}
          onClick={() => {
            this.handlePlayClick();
          }}
        >
          {this.props.size != "small" && (
            <div
              className={`player-cover-image ${this.props.size} ${
                this.state.playing
              }`}
            >
              <div className={`player-btn-icon ${this.state.playing}`} />
            </div>
          )}
        </div>
      </div>
    );
  }
}
