import React from "react";
import Player from "../player/player"

export default class Arcticle1 extends React.Component {
  render() {
    return(
      <section className="article1 row">
        <div className="dot-left" id="6"></div>
        <div className="dot-right" id="7"></div>
        <div className="article1-main col s6">
          <Player audioContext={this.props.audioContext}
                    database={this.props.database}
                    storage = {this.props.storage.ref('vanishing.mp3').getDownloadURL()}
                    imageSource = {'https://i.imgur.com/N8iL0h5.jpg'}
                    index= {1}
                    playingIndex={this.props.playingIndex}
                    autoPlay={this.props.autoPlay}
          />
          <div className="dot-left" id="8"></div>
        </div>
        <div className="article1-grid-left col s2">
          <div className="dot-left" id="9"></div>
        </div>
        <div className="article1-grid-center col s2">
          <div className="dot-left" id="10"></div>
        </div>
        <div className="article1-grid-right col s2">
          <div className="dot-left" id="11"></div>
        </div>
        <h4>PUBLISHING TOGETHER</h4>
      </section>
    )
  }
}
