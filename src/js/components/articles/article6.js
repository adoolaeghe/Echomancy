import React from "react";

export default class Arcticle6 extends React.Component {
  render() {
    return(
      <section className="article6 row">
        <div className="article6-text-content col s12">
          <h1 className="article6-header col s12">Predict</h1>
          <h2 className="article6-sub-header col s12">
            The future popularity of songs
          </h2>
        </div>
        <div className="article6-text-content col s12">
          <h1 className="article6-header col s12">Earn</h1>
          <h2 className="article6-sub-header col s12">
            From your discoveries
          </h2>
        </div>
        <img className="article6-slider"
             src={"./public/content/images/sliders/article-6-slider-black.svg"}
             alt="Kiwi standing on oval">
        </img>
        <img className="article6-slider small"
             src={"./public/content/images/sliders/article-6-slider-blue.svg"}
             alt="Kiwi standing on oval">
        </img>
        <img className="slider-button"
             src={"./public/content/images/sliders/slider-button-1.svg"}
             alt="Kiwi standing on oval">
        </img>
        <div className="dot-left" id="21"></div>
        <div className="dot-right" id="22"></div>
        <div className="article5-main col s12"></div>
      </section>
    )
  }
}
