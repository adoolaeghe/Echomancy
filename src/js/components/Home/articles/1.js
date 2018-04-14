import React from "react";
import Player from "../player/player";
import bgConfig from "../../ryme-helpers/ryme-background";

export default class Article1 extends React.Component {

  constructor() {
    super()
    this.state = {
      showPlayerSide: false
    }
  }

  render() {
    return (
      <section
        className="ryme-article article1 row"
        id="article1"
        style={bgConfig.noRepeat('articles/1/background.svg')}
      >
        <div className="article-grid-left col s2" />
        <div className="article-grid-center col s2" />
        <div className="article-grid-right col s2" />

        <div className="article-main col s6">
          <Player
            playerClick = {() => {this.setState({showPlayerSide: !this.state.showPlayerSide})}}
            rotation={"rotating"}
            size={"large"}
            key={0}
            id={0}
            slices={[1, 1, 1, 1, 1, 1]}
            slices1={[1]}
          />
          <div className="dot-left" id="8" />
        </div>

        <div className="article-main-text row col s6">
          <div className="text-block-color"></div>
          <div className="col s12 header-word" style={{ textAlign: "left" }}>
            Publishing for Everyone
          </div>
          <div className="col s12 sub-header-word">
            Murmur is a platform of{" "}
            <a href="#!" className="sub-header-link">
              micro-publication
            </a>{" "}
            where you can earn from your discoveries.
          </div>
        </div>
        <div
          className="article-bottom col s10 hash-background"
          style={bgConfig.repeat('main/hash-background.svg')}
        >
          <img
            className="slider-button"
            src={"./public/content/images/articles/article4-button.svg"}
            alt="Kiwi standing on oval"
          />
          <div className={`player-side-info ${this.state.showPlayerSide ? "showPlayerSide" : "hidePlayerSide"}`}>
            This is a description of the the player
          </div>
          <div className="dot-right"/>
          <div className="dot-left"/>
        </div>

        {this.props.article1Arrow && (
          <a
            className="arrow-down"
            href="#!"
            style={bgConfig.noRepeat('icons/arrow-down.svg')}
          />
        )}
        <div className="dot-left" />
        <div className="dot-right" />
      </section>
    );
  }
}
