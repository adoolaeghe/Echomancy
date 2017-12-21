import React from "react";

export default class Arcticle3 extends React.Component {
  render() {
    return(
      <section className="article3 row">
      <img className="text-background"
        src={"./public/content/images/p-publisher.svg"}
        alt="Kiwi standing on oval">
      </img>
      <div className="line-background-1"></div>
      <div className="line-background-2"></div>
      <div className="col s5">
        <img className="article3-content-background layer-1"
             id="layer-1"
             src={"./public/content/images/layers/brand-layers-1.svg"}
             alt="Kiwi standing on oval">
        </img>
        <img className="article3-content-background layer-2"
             id="layer-2"
             src={"./public/content/images/layers/brand-layers-2.svg"}
             alt="Kiwi standing on oval">
        </img>
        <img className="article3-content-background layer-3"
             id="layer-3"
             src={"./public/content/images/layers/brand-layers-3.svg"}
             alt="Kiwi standing on oval">
        </img>
        <img className="article3-content-background layer-4"
             id="layer-4"
             src={"./public/content/images/layers/brand-layers-4.svg"}
             alt="Kiwi standing on oval">
        </img>
        <img className="article3-content-background layer-5"
             id="layer-5"
             src={"./public/content/images/layers/brand-layers-5.svg"}
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
      <div className="article3-main col s12"></div>
    </section>
    )
  }
}
