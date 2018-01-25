import React from "react";

export default class Article3 extends React.Component {
  render() {
    return(
      <section className="article3 row"
               style={{background: 'url(./public/content/images/article3-background.svg) no-repeat',
                       backgroundSize: 'cover'}}>
      <div className="article3-hash col s5"
           style={{backgroundImage: 'url(./public/content/images/hash-background.svg)'}}>
        <div className="article3-hash-line"
             style={{backgroundImage: 'url(./public/content/images/hash-background.svg)'}}></div>
        <img className="slider-button"
             src={"./public/content/images/article3-button.svg"}
             alt="Kiwi standing on oval">
        </img>
      </div>
      <div className="acticle3-text-content col s7">
        <div className="article3-header">
          <h2>Become a music</h2>
          <h1>Publisher</h1>
        </div>
      </div>
      <div className="dot-left" id="19"></div>
      <div className="dot-right" id="20"></div>
      <div className="article3-main bottom-info col s12"
           style={{backgroundImage: 'url(./public/content/images/hash-background.svg)'}}>
        <div className="bottom-info-content">
          Content is first published with limited number of shares.
        </div>
      </div>
    </section>
    )
  }
}
