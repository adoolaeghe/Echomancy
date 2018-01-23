import React from "react";
import PieChart from "../../player/components/PieChart/pieChart";

export default class Player extends React.Component {

  render() {
    return (
      <div className="player-main-wrapper col xl3 l4 m6 s12">
        <PieChart />
        <div className="player-cover"></div>
        <div>
          <div className="player-song-name row">
            <p className="col s12">Song Name</p>
            <div className="dot-right small"></div>
          </div>
          <div className="player-artist-name">
            <p className="col s12">Artist Name</p>
            <div className="dot-right small"></div>
          </div>
          <div className="player-layers row">
            <div className="player-layer-line"></div>
            <div className="player-layer-dot"></div>
            <div className="player-layer-dot"></div>
            <div className="player-layer-dot"></div>
            <div className="player-layer-dot"></div>
            <div className="player-layer-dot"></div>
            <div className="player-layer-dot"></div>
            <div className="dot-right small layer-frame-dot"></div>
          </div>
        </div>
        <div className="dot-right"></div>
      </div>
    );
  }
}
