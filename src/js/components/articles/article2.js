import React from "react";

export default class Arcticle2 extends React.Component {
  render() {
    return(
      <section className="article2 row">
        <div className="dot-left" id="12"></div>
        <div className="dot-right" id="13"></div>
        <div className="article2-main col s8 hash-background">
          <h3>We are a new kind of publisher</h3>
        </div>
        <div className="article2-grid-right col s2">
          <div className="dot-left" id="15"></div>
          <div className="article2-media-button-twitter cols12">
            <button>
              <p>TW</p>
            </button>
            <div className="dot-left" id="16"></div>
            <div className="dot-right" id="17"></div>
          </div>
          <div className="article2-media-button-medium cols12">
            <button>
              <p>FB</p>
            </button>
            <div className="dot-left" id="18"></div>
          </div>
        </div>
        <div className="article2-grid-left col s2">
          <div className="dot-left" id="14"></div>
        </div>
      </section>
    )
  }
}
