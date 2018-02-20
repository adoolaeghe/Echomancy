import React from "react";

export default class NavBar extends React.Component {
  render() {
    return(
      <section className="navBar row">
        <div className="dot-left" id="1"></div>
        <div className="dot-right" id="2"></div>
        <div className="navBar-logo-title col s6">
          <h3>
            Publishing Together
          </h3>
        </div>
        <div className="navBar-grid-left col s2">
          <div className="dot-left" id="3"></div>
        </div>
        <div className="navBar-grid-center col s2">
          <div className="dot-left" id="4"></div>
        </div>
        <div className="navBar-grid-right col s2">
          <div className="dot-left" id="5"></div>
        </div>
      </section>
    )
  }
}
