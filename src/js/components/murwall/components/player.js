import React from "react";
import PlayerBuy from "./playerBuy.js";
import PlayerBuyInfo from "./playerBuyInfo.js";
import PlayerInfo from "./playerInfo.js";
import PlayerGraph from "./playerMain.js";
import PlayerMain from "./playerMain.js";
import PlayerMainInfo from "./playerMainInfo.js";

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
              style={this.state.style}
              handlePlayClick= {this.handlePlayClick.bind(this)}/>)
    } else if(this.state.playerStage === 'info') {
      return(<PlayerInfo />)
    } else if(this.state.playerStage === 'buy'){
      return(<PlayerBuy />)
    } else {
      return(<PlayerGraph />)
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.onKey === this.props.uKey) {
      this.setState({
        style: {
          backgroundColor: "red",
          artistLayersTop: "82%",
          songPriceDisplay: "block"
        }
      })
    } else {
      this.setState({
        playerStage: 'main',
        style: {}
      })
    }
  }

  render() {
    const playerStage = this.state.playerStage;
    return (
      <div className="player-main-wrapper col xl4 l4 m6 s12">
        {this.handlePlayerMain()}
        <div>
          <div className="player-artist-name">
            <p className="col s12">Artist Name</p>
            <div className="dot-right small"></div>
          </div>
          {playerStage === 'main' ? (
            <PlayerMainInfo style= {this.state.style}/>
          ) : (
            <PlayerBuyInfo style= {this.state.style}/>
          )}
          {playerStage === 'main' ? (
            <div className="player-price"
               style={{backgroundImage: 'url(./public/content/images/main/hash-background.svg)',
                       display: this.state.style.songPriceDisplay}}>
            </div>
          ) : (
            <div></div>
          )}
          <button className="player-redirect right"
               style={{backgroundImage: 'url(./public/content/images/player/player-redirect-button-info.svg)',
                       display: this.state.style.songPriceDisplay}}
               onClick={() => {this.handleRedirectClickRight()}}>
          </button>
          <button className="player-redirect left"
               style={{backgroundImage: 'url(./public/content/images/player/player-redirect-button-buy.svg)',
                       display: this.state.style.songPriceDisplay}}
               onClick={() => {(this.handleRedirectClickLeft())}}>
          </button>
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
