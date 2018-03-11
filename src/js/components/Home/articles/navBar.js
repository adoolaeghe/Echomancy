import React from "react";

export default class NavBar extends React.Component {
  render() {
    return (
      <section className="nav-bar row">
        <div className="dot-left" id="1" />
        <div className="dot-right" id="2" />
        <div className="navBar-logo-title col s6" />
        <div className="navBar-grid-left col s4" />
        <div
          className="navBar-grid-right col s2"
          style={{
            backgroundImage:
              "url(./public/content/images/main/hash-background.svg),url(./public/content/images/main/hash-background-reverse.svg)"
          }}
        >
          <div>WHITE</div>
          <div>PAPER</div>
          <div className="dot-left" id="5" />
        </div>
      </section>
    );
  }
}
