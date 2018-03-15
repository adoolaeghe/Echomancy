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
      "series": [
          {
              "name": "Browsers",
              "colorByPoint": true,
              "data": [
                  {
                      "name": "Chrome",
                      "y": 62.74,
                      "drilldown": "Chrome"
                  },
                  {
                      "name": "Firefox",
                      "y": 10.57,
                      "drilldown": "Firefox"
                  },
                  {
                      "name": "Internet Explorer",
                      "y": 7.23,
                      "drilldown": "Internet Explorer"
                  },
                  {
                      "name": "Safari",
                      "y": 5.58,
                      "drilldown": "Safari"
                  },
                  {
                      "name": "Edge",
                      "y": 4.02,
                      "drilldown": "Edge"
                  },
                  {
                      "name": "Opera",
                      "y": 1.92,
                      "drilldown": "Opera"
                  },
                  {
                      "name": "Other",
                      "y": 7.62,
                      "drilldown": null
                  }
              ]
          }
      ],
      "drilldown": {
          "series": [
              {
                  "name": "Chrome",
                  "id": "Chrome",
                  "data": [
                      [
                          "v65.0",
                          0.1
                      ],
                      [
                          "v64.0",
                          1.3
                      ],
                      [
                          "v63.0",
                          53.02
                      ],
                      [
                          "v62.0",
                          1.4
                      ],
                      [
                          "v61.0",
                          0.88
                      ],
                      [
                          "v60.0",
                          0.56
                      ],
                      [
                          "v59.0",
                          0.45
                      ],
                      [
                          "v58.0",
                          0.49
                      ],
                      [
                          "v57.0",
                          0.32
                      ],
                      [
                          "v56.0",
                          0.29
                      ],
                      [
                          "v55.0",
                          0.79
                      ],
                      [
                          "v54.0",
                          0.18
                      ],
                      [
                          "v51.0",
                          0.13
                      ],
                      [
                          "v49.0",
                          2.16
                      ],
                      [
                          "v48.0",
                          0.13
                      ],
                      [
                          "v47.0",
                          0.11
                      ],
                      [
                          "v43.0",
                          0.17
                      ],
                      [
                          "v29.0",
                          0.26
                      ]
                  ]
              },
              {
                  "name": "Firefox",
                  "id": "Firefox",
                  "data": [
                      [
                          "v58.0",
                          1.02
                      ],
                      [
                          "v57.0",
                          7.36
                      ],
                      [
                          "v56.0",
                          0.35
                      ],
                      [
                          "v55.0",
                          0.11
                      ],
                      [
                          "v54.0",
                          0.1
                      ],
                      [
                          "v52.0",
                          0.95
                      ],
                      [
                          "v51.0",
                          0.15
                      ],
                      [
                          "v50.0",
                          0.1
                      ],
                      [
                          "v48.0",
                          0.31
                      ],
                      [
                          "v47.0",
                          0.12
                      ]
                  ]
              },
              {
                  "name": "Internet Explorer",
                  "id": "Internet Explorer",
                  "data": [
                      [
                          "v11.0",
                          6.2
                      ],
                      [
                          "v10.0",
                          0.29
                      ],
                      [
                          "v9.0",
                          0.27
                      ],
                      [
                          "v8.0",
                          0.47
                      ]
                  ]
              },
              {
                  "name": "Safari",
                  "id": "Safari",
                  "data": [
                      [
                          "v11.0",
                          3.39
                      ],
                      [
                          "v10.1",
                          0.96
                      ],
                      [
                          "v10.0",
                          0.36
                      ],
                      [
                          "v9.1",
                          0.54
                      ],
                      [
                          "v9.0",
                          0.13
                      ],
                      [
                          "v5.1",
                          0.2
                      ]
                  ]
              },
              {
                  "name": "Edge",
                  "id": "Edge",
                  "data": [
                      [
                          "v16",
                          2.6
                      ],
                      [
                          "v15",
                          0.92
                      ],
                      [
                          "v14",
                          0.4
                      ],
                      [
                          "v13",
                          0.1
                      ]
                  ]
              },
              {
                  "name": "Opera",
                  "id": "Opera",
                  "data": [
                      [
                          "v50.0",
                          0.96
                      ],
                      [
                          "v49.0",
                          0.82
                      ],
                      [
                          "v12.1",
                          0.14
                      ]
                  ]
              }
          ]
      }
    })

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
