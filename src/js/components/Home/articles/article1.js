import React from "react";
import Player from "../player/player";

export default class Article1 extends React.Component {
  render() {
    return (
      <section
        className="article1 row"
        style={{
          background:
            "url(./public/content/images/articles/article1-background.svg) no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div className="dot-left" id="6" />
        <div className="dot-right" id="7" />
        <div className="article1-grid-left col s2" />
        <div className="article1-grid-center col s2" />
        <div className="article1-grid-right col s2" />
        <div className="article1-main col s6">
          <Player
            rotation={"rotating"}
            size={"large"}
            key={0}
            id={0}
            slices={[1, 1, 1, 1, 1, 1]}
          />
          <div className="dot-left" id="8" />
        </div>
        <h4 className="row col s6">
          <div className="col s12 header-word" style={{ textAlign: "left" }}>
            Publishing for Everyone
          </div>
          <div className="col s12 sub-header-word">
            Murmur is a platform of <a href="#!"><u>micro-publication</u></a> where you can earn from your discoveries.
          </div>
        </h4>
        <div
          className="article1-bottom col s10 hash-background"
          style={{
            backgroundImage:
              "url(./public/content/images/main/hash-background.svg)",
          }}
        >
          <img
            className="slider-button"
            src={"./public/content/images/articles/article4-button.svg"}
            alt="Kiwi standing on oval"
          />
        </div>
      </section>
    );
  }
}
