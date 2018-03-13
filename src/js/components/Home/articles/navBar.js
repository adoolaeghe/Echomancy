import React from "react";

export default class NavBar extends React.Component {
  render() {
    return (
      <section className="nav-bar row">
        <div className="dot-left" id="1" />
        <div className="dot-right" id="2" />
        <div className="navBar-logo-title col s10 push-s1"
              style={{
                backgroundImage:
                  "url(./public/content/images/articles/article3-icon.svg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "40px",
                  backgroundPosition: "center",
                  height: "70px"
              }}>

        </div>
      </section>
    );
  }
}
