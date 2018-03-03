import React from "react";
import ReactTooltip from 'react-tooltip';

export default class PlayerMainInfo extends React.Component {
  renderPlayerLayerDot() {
    let to_return = [];
    for(let i = 0; i < this.props.layersNb; i++) {
      to_return.push(
        <a className="player-layer-dot" data-tip={i}></a>
      )
    }
    return to_return;
  }

  render() {
    return(
      <div>
        <div className="player-song-name row">
          <p className="col s12">Song Name</p>
          <div className="dot-right small"></div>
        </div>
        <div className={`player-layers row ${this.props.mainInfoStyle}`}>
          <div className="player-layer-line"></div>
            {this.renderPlayerLayerDot()}
          <div className="dot-right small layer-frame-dot"></div>
          <ReactTooltip place="top" type="dark" effect="float"/>
        </div>
      </div>
    )
  }
}
