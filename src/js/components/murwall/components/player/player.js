import React from "react";
import PlayerBuy from "./playerBuy.js";
import PlayerBuyInfo from "./playerBuyInfo.js";
import PlayerInfo from "./playerInfo.js";
import PlayerGraph from "./playerMain.js";
import PlayerMain from "./playerMain.js";
import PlayerMainInfo from "./playerMainInfo.js";
import RaisedButton from 'material-ui/RaisedButton';

export default class Player extends React.Component {

  constructor() {
    super()
    this.state = {
      style: {
        songPriceDisplay: 'none'
      },
      playerStage: 'main',
      redirectRight: 'info',
      redirectLeft: 'buy',
      songPriceDisplay: 'none'
    }
  }

  handlePlayClick() {
    this.props.handleOnOff(this.props.uKey);
  }

  handleRedirectClickLeft() {
    this.setState({playerStage: this.state.redirectLeft})
    if(this.state.redirectLeft === 'buy'){
      this.setState({redirectLeft: 'main'})
    } else {
      this.setState({redirectLeft: 'buy'})
    }
  }

  handleRedirectClickRight() {
    this.setState({playerStage: this.state.redirectRight})
    if(this.state.redirectRight === 'info'){
      this.setState({redirectRight: 'main'})
    } else {
      this.setState({redirectRight: 'info'})
    }
  }

  handlePlayerMain() {
    if(this.state.playerStage === 'main') {
      return(<PlayerMain
              playingStyle={this.state.coverPlayinhStyle}
              handlePlayClick= {this.handlePlayClick.bind(this)}/>)
    } else if(this.state.playerStage === 'info') {
      return(<PlayerInfo />)
    } else if(this.state.playerStage === 'buy'){
      return(<PlayerBuy />)
    } else {
      return(<PlayerGraph />)
    }
  }

  handleWrapperClass() {
    if((this.props.uKey % 2)===0) {
      return "red"
    } else if((this.props.uKey % 3)===0) {
      return "green"
    } else {
      return "black"
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.onKey === this.props.uKey) {
      this.setState({
        mainInfoStyle: "main-info",
        coverPlayinhStyle: "playing",
        style: {
          songPriceDisplay: "block"
        }
      })
    } else {
      this.setState({
        coverPlayinhStyle: "default",
        playerStage: 'main',
        style: {}
      })
    }
  }

  render() {
    const playerStage = this.state.playerStage;
    return (
      <div className={`player-main-wrapper ${this.props.color} col xl4 l4 m6 s12`}>
        {this.handlePlayerMain()}
        <div>
          <div className="player-artist-name">
            <p className="col s12">Artist Name</p>
            <div className="dot-right small"></div>
          </div>
          {playerStage === 'main' ? (
            <PlayerMainInfo mainInfoStyle= {this.state.mainInfoStyle}
                            layersNb={5}/>
          ) : (
            <PlayerBuyInfo style= {this.state.style}/>
          )}
          {playerStage === 'main' ? (
            <div className="player-price"
               style={{background: "white",
                       display: this.state.style.songPriceDisplay}}>
              <div>5.5</div>
            </div>
          ) : (
            <div></div>
          )}
          <div className="player-redirect right"
               style={{display: this.state.style.songPriceDisplay}}
               onClick={() => {this.handleRedirectClickRight()}}>
            <RaisedButton fullWidth={true} style={{height: "50px"}}/>
          </div>
          <div className="player-redirect left"
               style={{display: this.state.style.songPriceDisplay}}
               onClick={() => {(this.handleRedirectClickLeft())}}>
            <RaisedButton fullWidth={true}  style={{height: "50px"}}/>
          </div>
      </div>
      <div className="dot-right"
           style={{backgroundColor: this.state.style.backgroundColor}}>
      </div>
      <div className="dot-left"
           style={{backgroundColor: this.state.style.backgroundColor,
                   display: this.state.style.songPriceDisplay}}>
      </div>
      <div className="dot-left hide"
           style={{backgroundColor: this.state.style.backgroundColor,
                   display: this.state.style.songPriceDisplay}}>
      </div>
      <div className="dot-right hide"
           style={{backgroundColor: this.state.style.backgroundColor,
                   display: this.state.style.songPriceDisplay}}>
      </div>
    </div>
    );
  }
}
