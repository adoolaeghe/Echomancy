import React from "react";

export default class Arcticle4 extends React.Component {
  render() {
    return(
      <section className="article4 row">
        <div className="article4-text-content col s12">
          <div className="header-line-left col s2"></div>
          <h1 className="article4-header col s4">Reveal</h1>
          <h2 className="article4-sub-header col s6">New songs</h2>
          <div className="slider-btn">
            <p>+</p>
          </div>
        </div>
        <img className="article4-slider"
             src={"./public/content/images/sliders/article-4-slider-black.svg"}
             alt="Kiwi standing on oval">
        </img>
        <img className="article4-slider small"
             src={"./public/content/images/sliders/article-4-slider-blue.svg"}
             alt="Kiwi standing on oval">
        </img>
        <img className="slider-button"
             src={"./public/content/images/sliders/slider-button-1.svg"}
             alt="Kiwi standing on oval">
        </img>
        <img className="text-background"
          src={"./public/content/images/r-reveal.svg"}
          alt="Kiwi standing on oval">
        </img>
        <div className="dot-left" id="21"></div>
          <div className="dot-right" id="22"></div>
          <div className="article4-main col s12">
        </div>
      </section>
    )
  }
}
