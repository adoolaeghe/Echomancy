import React from "react";
import ReactTooltip from 'react-tooltip';

export default class PlayerBuyInfo extends React.Component {
  render() {
    return(
      <div>
        <div className="player-layers buy row">
          <div className="player-layer-line"></div>
          <a className="player-layer-dot" data-tip="React-tooltip"></a>
          <a className="player-layer-dot" data-tip="React-tooltip"></a>
          <a className="player-layer-dot" data-tip="React-tooltip"></a>
          <a className="player-layer-dot" data-tip="React-tooltip"></a>
          <a className="player-layer-dot" data-tip="React-tooltip"></a>
          <a className="player-layer-dot" data-tip="React-tooltip"></a>
          <div className="dot-right small layer-frame-dot"></div>
          <ReactTooltip place="top" type="dark" effect="float"/>
        </div>
        <div className="player-buy-info row"
             style={{backgroundImage: 'url(./public/content/images/main/hash-background.svg)'}}>
          <p className="col s12">Buy Info</p>
          <div className="dot-right small"></div>
        </div>
      </div>
    )
  }
}
