import React from "react";
import Player from "../player/player"

export default class Article1 extends React.Component {
  render() {
    return(
      <section className="article1 row"
        style={{background: 'url(./public/content/images/articles/article1-background.svg) no-repeat',
                backgroundSize: 'cover'}}>
        <div className="dot-left" id="6"></div>
        <div className="dot-right" id="7"></div>
        <div className="article1-grid-left col s2">
        </div>
        <div className="article1-grid-center col s2">
        </div>
        <div className="article1-grid-right col s2">
        </div>
        <div className="article1-main col s6">
        <Player size={"large"} id={0}/>
        <div className="dot-left" id="8"></div>
        </div>
        <h4 className="row col s6">
          <div className="col s12 header-word" style={{textAlign: "left"}}>
            Publishing for Everyone
          </div>
          <div className="col s12 sub-header-word">
            Eco est un tout nouveau type de monnaie que vous pouvez utiliser partout dans le monde.
          </div>
        </h4>
        <div className="article1-bottom col s10 hash-background"
          style={{backgroundImage: 'url(./public/content/images/main/hash-background.svg)'}}>
          <img className="slider-button"
               src={"./public/content/images/articles/article4-button.svg"}
               alt="Kiwi standing on oval">
          </img>
        </div>
      </section>
    )
  }
}
