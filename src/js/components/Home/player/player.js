import React from "react";
import pieData from "../graph/piePlayer";
import FloatingActionButton from "material-ui/FloatingActionButton";
import Tone from "tone";
import {Doughnut} from 'react-chartjs-2';
import bgConfig from "../../ryme-helpers/ryme-background";

var chorus = new Tone.Chorus(4, 2.5, 0.5);

var audio = new Tone.Player({url: "public/content/images/songs/daft_punk.mp3",
  loop  : true,
  loopStart : 70,
  loopEnd : 77,
  autostart: true,
  volume: -60
}).toMaster();

var chorus= new Tone.Freeverb(4, 2.5).toMaster();

audio.connect(chorus);


export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: "pause",
      data: pieData()
    };
  }

  //// TONE FILTER VOLUME LOOP
  softFilter() {
      var x = 0;
      window.setInterval(function(){
        if(x === 70) {
          x = 0;
        } else if (x < 5) {
          audio.volume.value += 10;
          x += 1;
        } else if (x < 10) {
          audio.volume.value += 5;
          x += 1;
        } else if (x === 10) {
          audio.volume.value += 5;
          x += 1;
        } else if (x === 60) {
          audio.volume.value -= 10;
          x += 1;
        } else if (x < 60) {
          x += 1;
        } else if (x < 65) {
          audio.volume.value -= 5;
          x += 1;
        } else {
          audio.volume.value -= 10;
          x += 1;
        }
      }, 100);
  }

  handlePlayClick() {
    this.props.playerClick();
    if (this.state.playing === "pause") {
        this.setState({
          playing: "playing"
        })
        audio.start();
    } else {
      this.setState({
        playing: "pause"
      });
      audio.stop();
    }
  }

  componentDidMount() {
    this.softFilter();
  }

  render() {
    const legend = {
      display: false
    }

    return (
      <div className={`player player-wrapper ${this.props.size}`}>
        <div className={`player-wrapper rotating ${this.props.size} `}>
          <Doughnut data={this.state.data} legend={legend} width={370} height={370} />
        </div>
        {this.state.playing === "playing" && (
          <div style={{height: "60px", width: "60px",borderRadius: "50px", backgroundColor: "black", position: "fixed", bottom: "100px", right: "23px"}}></div>
        )}
        <div
          className={`player-cover ${this.props.size} ${this.state.playing}`}
          onClick={() => {
            this.handlePlayClick();
          }}>
          {this.props.size != "small" && (
            <div className={`player-cover-image ${this.props.size} ${this.state.playing}`}>
              <div className={`player-btn-icon ${this.state.playing}`}
                   style={bgConfig.noRepeat('main/play.svg')}>
                {this.state.playing === "playing" && (
                  <div style={{border: "2px solid red",borderRadius: "50px", width: "30px", height: "30px"}}></div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
