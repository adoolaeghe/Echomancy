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
              "name": "hello",
              "colorByPoint": true,
              "data": [

                  {
                      "name": "Chrome",
                      "y": 1,
                      "color": "#FA47A9",
                      "drilldown": "Chrome"
                  },
                  {
                      "name": "Chrome",
                      "y": 1,
                      "color": "#FA47A9",
                      "drilldown": "Chrome"
                  },
                  {
                      "name": "Firefox",
                      "y": 1,
                      "color": "#6781FE",
                      "drilldown": "Firefox"
                  },
                  {
                      "name": "Firefox",
                      "y": 1,
                      "color": "#6781FE",
                      "drilldown": "Firefox"
                  },
                  {
                      "name": "Firefox",
                      "y": 1,
                      "color": "#6781FE",
                      "drilldown": "Firefox"
                  },
                  {
                      "name": "Firefox",
                      "y": 1,
                      "color": "#6781FE",
                      "drilldown": "Firefox"
                  },
                  {
                      "name": "Internet Explorer",
                      "y": 1,
                      "color": "#FFBF5D",
                      "drilldown": "Internet Explorer"
                  },
                  {
                      "name": "Internet Explorer",
                      "y": 1,
                      "color": "#FFBF5D",
                      "drilldown": "Internet Explorer"
                  },
                  {
                      "name": "Internet Explorer",
                      "y": 1,
                      "color": "#FFBF5D",
                      "drilldown": "Internet Explorer"
                  },
                  {
                      "name": "Internet Explorer",
                      "y": 1,
                      "color": "#FFBF5D",
                      "drilldown": "Internet Explorer"
                  },
                  {
                      "name": "Internet Explorer",
                      "y": 1,
                      "color": "#FFBF5D",
                      "drilldown": "Internet Explorer"
                  },
                  {
                      "name": "Internet Explorer",
                      "y": 1,
                      "color": "#FFBF5D",
                      "drilldown": "Internet Explorer"
                  },
                  {
                      "name": "Internet Explorer",
                      "y": 1,
                      "color": "#FFBF5D",
                      "drilldown": "Internet Explorer"
                  },
                  {
                      "name": "Internet Explorer",
                      "y": 1,
                      "color": "#FFBF5D",
                      "drilldown": "Internet Explorer"
                  },
                  {
                      "name": "Safari",
                      "y": 1,
                      "color": "#0637D8",
                      "drilldown": "Safari"
                  },
                  {
                      "name": "Safari",
                      "y": 1,
                      "color": "#0637D8",
                      "drilldown": "Safari"
                  },{
                      "name": "Safari",
                      "y": 1,
                      "color": "#0637D8",
                      "drilldown": "Safari"
                  },{
                      "name": "Safari",
                      "y": 1,
                      "color": "#0637D8",
                      "drilldown": "Safari"
                  },{
                      "name": "Safari",
                      "y": 1,
                      "color": "#0637D8",
                      "drilldown": "Safari"
                  },{
                      "name": "Safari",
                      "y": 1,
                      "color": "#0637D8",
                      "drilldown": "Safari"
                  },{
                      "name": "Safari",
                      "y": 1,
                      "color": "#0637D8",
                      "drilldown": "Safari"
                  },{
                      "name": "Safari",
                      "y": 1,
                      "color": "#0637D8",
                      "drilldown": "Safari"
                  },{
                      "name": "Safari",
                      "y": 1,
                      "color": "#0637D8",
                      "drilldown": "Safari"
                  },{
                      "name": "Safari",
                      "y": 1,
                      "color": "#0637D8",
                      "drilldown": "Safari"
                  },{
                      "name": "Safari",
                      "y": 1,
                      "color": "#0637D8",
                      "drilldown": "Safari"
                  },{
                      "name": "Safari",
                      "y": 1,
                      "color": "#0637D8",
                      "drilldown": "Safari"
                  },{
                      "name": "Safari",
                      "y": 1,
                      "color": "#0637D8",
                      "drilldown": "Safari"
                  },{
                      "name": "Safari",
                      "y": 1,
                      "color": "#0637D8",
                      "drilldown": "Safari"
                  },{
                      "name": "Safari",
                      "y": 1,
                      "color": "#0637D8",
                      "drilldown": "Safari"
                  },{
                      "name": "Safari",
                      "y": 1,
                      "color": "#0637D8",
                      "drilldown": "Safari"
                  },{
                      "name": "Safari",
                      "y": 1,
                      "color": "#0637D8",
                      "drilldown": "Safari"
                  },

              ]
          }
      ],
      "drilldown": {
        "drillUpButton": {
          "position": {

          },
          "align": "left"
        },
          "series": [
              {
                  "name": "Chrome",
                  "id": "Chrome",
                  "data": [
                      [
                          "v65.0",
                          1
                      ],
                      [
                          "v64.0",
                          1
                      ]
                  ]
              },
              {
                  "name": "Firefox",
                  "id": "Firefox",
                  "data": [
                      [
                          "v58.0",
                          1
                      ],
                      [
                          "v57.0",
                          1
                      ],
                      [
                          "v56.0",
                          1
                      ],
                      [
                          "v55.0",
                          1
                      ],

                  ]
              },
              {
                  "name": "Internet Explorer",
                  "id": "Internet Explorer",
                  "data": [
                      [
                          "#0637D8",
                          1
                      ],
                      [
                          "v10.0",
                          1
                      ],
                      [
                          "v9.0",
                          1
                      ],
                      [
                          "v8.0",
                          1
                      ],
                      [
                          "v10.0",
                          1
                      ],
                      [
                          "v9.0",
                          1
                      ],[
                          "v10.0",
                          1
                      ],
                      [
                          "v9.0",
                          1
                      ],
                  ]
              },
              {
                  "name": "Safari",
                  "id": "Safari",
                  "data": [
                      [
                          "v11.0",
                          1
                      ],
                      [
                          "v10.1",
                          1
                      ],
                      [
                          "v10.0",
                          1
                      ],
                      [
                          "v9.1",
                          1
                      ],
                      [
                          "v9.0",
                          1
                      ],
                      [
                          "v5.1",
                          1
                      ]
                  ]
              },
              {
                  "name": "Edge",
                  "id": "Edge",
                  "data": [
                      [
                          "v16",
                          1
                      ],
                      [
                          "v15",
                          1
                      ],
                      [
                          "v14",
                          1
                      ],
                      [
                          "v13",
                          1
                      ]
                  ]
              },
              {
                  "name": "Opera",
                  "id": "Opera",
                  "data": [
                      [
                          "v50.0",
                          1
                      ],
                      [
                          "v49.0",
                          1
                      ],
                      [
                          "v12.1",
                          1
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
      var context;
      window.addEventListener('load', init, false);
      function init() {
        try {
          // Fix up for prefixing
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
