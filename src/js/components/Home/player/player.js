import React from "react";
import pieData from "../graph/piePlayer";
import FloatingActionButton from "material-ui/FloatingActionButton";
import Tone from "tone";
import Card from "material-ui/Card";
import Slider from "material-ui/Slider";
import bgConfig from "../../ryme-helpers/ryme-background";
import {Doughnut} from 'react-chartjs-2';
import smoothfade from 'smoothfade';
import CircularProgress from 'material-ui/CircularProgress';

var audioCtx = new AudioContext();
var source = audioCtx.createBufferSource();
var request = new XMLHttpRequest();

request.open('GET', 'public/content/images/songs/daft_punk.mp3', true);

request.responseType = 'arraybuffer';

request.onload = function() {
  var audioData = request.response;

  audioCtx.decodeAudioData(audioData, function(buffer) {
    var myBuffer = buffer;
    var gainNode = audioCtx.createGain();
    var x = 0;

    gainNode.gain.value = 1;
    gainNode.connect(audioCtx.destination);

    source.buffer = myBuffer;
    source.loop = true;
    source.loopStart = 34;
    source.loopEnd = 44;
    source.start(0,34);
    source.connect(gainNode);
    var sm = smoothfade(audioCtx, gainNode, {fadeLength: 3})
    sm.fadeIn();

  },
  function(e){"Error with decoding audio data" + e.err});
}
request.send();


export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: "pause",
      showPlayBtn: false,
      data: pieData(),
      trackPosition: 0,
      trackPosition1: 0,
      trackPosition2: 0,
      track1: 1,
      zIndex1: 3,
      zIndex2: 2,
      zIndex3: 1,
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
    setInterval(() => {
    if(this.state.track1 === 1){
      if(this.state.trackPosition < 100){
        this.setState({
          trackPosition: this.state.trackPosition + 1,
        })
      } else {
        this.setState({
          trackPosition2: 0,
          track1: 2,
          zIndex1: 2,
          zIndex2: 1,
          zIndex3: 3,
        })
      }
    } else if (this.state.track1 === 2) {
      if(this.state.trackPosition1 < 100){
        this.setState({
          trackPosition1: this.state.trackPosition1 + 1
        })
      } else {
        this.setState({
          trackPosition: 0,
          track1: 3,
          zIndex1: 1,
          zIndex2: 3,
          zIndex3: 2,
        })
      }
    } else if (this.state.track1 === 3) {
      if(this.state.trackPosition2 < 100){
        this.setState({
          trackPosition2: this.state.trackPosition2 + 1
        })
      } else {
        this.setState({
          trackPosition1: 0,
          track1: 1,
          zIndex1: 3,
          zIndex2: 2,
          zIndex3: 1,
        })
      }
    }
  }, 150)
  }


  render() {
    // this.state.audio.fadeOut;
    // this.state.audio.fadeIn;
    // this.state.audio.context.resume();
    // console.log(this.state.audio.playbackRate,this.state.audio.position,this.state.audio.fadeOut,this.state.audio.fadeIn);
    const legend = {
      display: false
    }

    return (
      <div className={`player player-wrapper ${this.props.size}`}>
        <div className={`player-wrapper rotating ${this.props.size} `}>
          <Doughnut data={this.state.data} legend={legend} width={370} height={370} />
        </div>
        {this.state.showPlayBtn && (
          <div className= "row"style={{border: "1px solid lightgrey", backgroundColor: "blue", width: "25.2%", height: "100px", left: "8.3%", position: "fixed", bottom: "0px"}}>
            <div className="" style={{height: "100%", display: "flex", justifyContent: "center", flexDirection: "row", alignItems: "center"}}>
              <div style={{height: "30px", cursor: "pointer", width: "30px",borderRadius: "50px",backgroundColor: "white", border: "1px solid lightgrey", margin: "10px"}}
                   onClick={() => {this.handlePlayClick()}}></div>
              <div style={{height: "40px", cursor: "pointer", width: "40px",borderRadius: "50px",backgroundColor: "white", border: "1px solid red", margin: "10px"}}
                   onClick={() => {this.handlePlayClick()}}></div>
              <div style={{height: "30px", cursor: "pointer", width: "30px",borderRadius: "50px",backgroundColor: "white", border: "1px solid lightgrey", margin: "10px"}}
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
                  <div style={{borderRadius: "50px", width: "73px", height: "73px"}}></div>
                )}
              </div>
              <CircularProgress
                style={{position: "absolute", zIndex: this.state.zIndex1}}
                mode="determinate"
                value={this.state.trackPosition}
                size={90}
                key={1}
                color={"#0F3FD5"}
                thickness={5}
              />
              <CircularProgress
                style={{position: "absolute", zIndex: this.state.zIndex2}}
                mode="determinate"
                value={this.state.trackPosition2}
                size={90}
                key={2}
                color={"#FEBE65"}
                thickness={5}
              />
              <CircularProgress
                style={{position: "absolute", zIndex: this.state.zIndex3}}
                mode="determinate"
                value={this.state.trackPosition1}
                size={90}
                key={3}
                color={"#6884FB"}
                thickness={5}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
