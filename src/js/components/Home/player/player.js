import React from "react";
import pieData from "../graph/piePlayer";
import FloatingActionButton from "material-ui/FloatingActionButton";
import Tone from "tone";
import {Doughnut} from 'react-chartjs-2';
import bgConfig from "../../ryme-helpers/ryme-background";


export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: "pause",
      showPlayBtn: false,
      data: pieData(),
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
        playing: "playing",
        showPlayBtn: true
      })
      this.state.audio.start();
    } else {
      this.setState({
        playing: "pause"
      });
      this.state.audio.stop();
    }
  }

  componentWillMount() {
    this.setState({
      audio: new Tone.Player({url: "public/content/images/songs/daft_punk.mp3",
        loop  : true,
        loopStart : 70,
        loopEnd : 77,
        autostart: false,
        retrigger: true,
        volume: 0
      }).toMaster()
    })
  }

  componentDidMount(){

  }

  render() {
    this.state.audio.context.resume();

    const legend = {
      display: false
    }

    return (
      <div className={`player player-wrapper ${this.props.size}`}>
        <div className={`player-wrapper rotating ${this.props.size} `}>
          <Doughnut data={this.state.data} legend={legend} width={370} height={370} />
        </div>
        {this.state.showPlayBtn && (
          <div className= "row"style={{borderTop: "1px solid lightgrey",width: "100%", height: "60px", left: "0", position: "fixed", backgroundColor: "white", bottom: "0px"}}>
            <div className="col row s2" style={{height: "100%", display: "flex", justifyContent: "space-between", flexDirection: "row", alignItems: "center"}}>
              <div style={{height: "30px", cursor: "pointer", width: "30px",borderRadius: "50px", backgroundColor: "black"}}
                   onClick={() => {this.handlePlayClick()}}></div>
              <div style={{height: "40px", cursor: "pointer", width: "40px",borderRadius: "50px", backgroundColor: "black"}}
                   onClick={() => {this.handlePlayClick()}}></div>
              <div style={{height: "30px", cursor: "pointer", width: "30px",borderRadius: "50px", backgroundColor: "black"}}
                   onClick={() => {this.handlePlayClick()}}></div>
            </div>
          </div>
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
                  <div style={{border: "1px solid red",borderRadius: "50px", width: "73px", height: "73px"}}></div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
