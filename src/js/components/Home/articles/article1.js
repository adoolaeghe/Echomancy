import React from "react";
import Player from "../player/player"

export default class Article1 extends React.Component {
  render() {
    return(
      <section className="article1 row">
        <div className="dot-left" id="6"></div>
        <div className="dot-right" id="7"></div>
        <div className="article1-main col s6">
          <Player />
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
        <h4 className="row col s6 offset-s6">
          <div className="col s12 header-word">murmur</div>
        </h4>
      </section>
    )
  }
}
