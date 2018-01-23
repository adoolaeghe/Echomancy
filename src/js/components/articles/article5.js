import React from "react";

export default class Arcticle5 extends React.Component {
  render() {
    return(
      <section className="article5 row">
        <div className="article5-text-content col s12">
          <div className="col s6"></div>
          <h1 className="article5-header col s6">Progressive</h1>
          <h2 className="article5-sub-header col s4 push-s8">Publication</h2>
        </div>
        <img className="article5-slider"
             src={"./public/content/images/sliders/article-5-slider-yellow.svg"}
             alt="Kiwi standing on oval">
        </img>
        <img className="article5-slider small"
             src={"./public/content/images/sliders/article-5-slider-red.svg"}
             alt="Kiwi standing on oval">
        </img>
        <img className="slider-button"
             src={"./public/content/images/sliders/slider-button-2.svg"}
             alt="Kiwi standing on oval">
        </img>
        <div className="dot-left" id="21"></div>
        <div className="dot-right" id="22"></div>
        <div className="article5-main col s12"></div>
      </section>
    )
  }
}
