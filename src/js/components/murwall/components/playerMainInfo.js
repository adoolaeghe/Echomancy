import React from "react";
import ReactTooltip from 'react-tooltip';

export default class PlayerMainInfo extends React.Component {
  render() {
    return(
      <div>
        <div className="player-song-name row">
          <p className="col s12">Song Name</p>
          <div className="dot-right small"></div>
        </div>
        <div className="player-layers row"
             style={{top: this.props.style.artistLayersTop}}>
             <div className="player-layer-line"></div>
             <a className="player-layer-dot" data-tip="lyr 1 info"></a>
             <a className="player-layer-dot" data-tip="lyr 2 info"></a>
             <a className="player-layer-dot" data-tip="lyr 3 info"></a>
             <a className="player-layer-dot" data-tip="lyr 4 info"></a>
             <a className="player-layer-dot" data-tip="lyr 5 info"></a>
             <a className="player-layer-dot" data-tip="lyr 6 info"></a>
             <div className="dot-right small layer-frame-dot"></div>
             <ReactTooltip place="top" type="dark" effect="float"/>
        </div>
      </div>
    )
  }
}
