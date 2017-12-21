import React from "react";

export default class Arcticle6 extends React.Component {
  render() {
    return(
      <section className="article6 row">
        <img className="article6-slider"
             src={"./public/content/images/sliders/article-6-slider-black.svg"}
             alt="Kiwi standing on oval">
        </img>
        <img className="article6-slider small"
             src={"./public/content/images/sliders/article-6-slider-blue.svg"}
             alt="Kiwi standing on oval">
        </img>
        <div className="dot-left" id="21"></div>
        <div className="dot-right" id="22"></div>
        <div className="article5-main col s12"></div>
      </section>
    )
  }
}
