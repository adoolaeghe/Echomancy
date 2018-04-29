import React from "react";
import Player from "../player/player";
import bgConfig from "../../ryme-helpers/ryme-background";
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import moment from 'moment'

export default class Article1 extends React.Component {

  constructor() {
    super();
    this.state = {
      showPlayerSide: true,
      time: 0
    }
  }

  render() {
    return (
      <section
        className="ryme-article article1 row"
        id="article1"
        style={bgConfig.noRepeat('articles/1/background.svg')}
      >
        <div className="article-grid-left col s2 hide-on-med-and-down" />
        <div className="article-grid-center col s2 hide-on-med-and-down" />
        <div className="article-grid-right col s2 hide-on-med-and-down" />

        <div className="article-main col m12 l6">
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

        <div className="article-main-text row col m12 l6">
          <div className="text-block-color"></div>
          <div className="col s12 header-word" style={{ textAlign: "left" }}>
            Publishing for Everyone.
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
          className="article-bottom col s10 hash-background hide-on-med-and-down"
          style={bgConfig.repeat('main/hash-background.svg')}
        >
          <img
            className="slider-button"
            src={"./public/content/images/articles/1/button.svg"}
            alt="Kiwi standing on oval"
          />
          <div className="player-side-info showPlayerSide">
             <Chip style={{ margin: "10px"}} backgroundColor={"#6884FB"} labelColor={"white"}>
               <Avatar src="./public/content/images/main/avatar.jpg" />
               Bob 1.3
             </Chip>
             <Chip style={{ margin: "10px"}} backgroundColor={"#0F3FD5"} labelColor={"white"}>
               <Avatar src="./public/content/images/main/avatar.jpg" />
               Bob 1.3
             </Chip>
             <Chip style={{ margin: "10px"}} backgroundColor={"#FEBE65"} labelColor={"white"}>
               <Avatar src="./public/content/images/main/avatar.jpg" />
               Bob 1.3
             </Chip>
             <p className="article-1-time">
              {this.state.time}|10
             </p>
            <img
              className="slider-button"
              src={"./public/content/images/articles/1/button.svg"}
              alt="Kiwi standing on oval"
            />
          </div>
          <div className="dot-right"/>
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
