import React from "react";

export default class NavBar extends React.Component {
  render() {
    return (
      <section className="nav-bar row">

        <div classNameName="dot-left" id="1" />
        <div classNameName="dot-right" id="2" />
        <a className="navBar-logo-title wave-effect waves-light btn col s1 z-depth-1 push-s5"
              style={{
                backgroundImage:
                "url(./public/content/images/articles/article3-icon.svg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "50px",
                backgroundPosition: "center",
                backgroundColor: "white",
                height: "90px",
                marginLeft:"35px",
                borderRadius: "0px 0px 10px 10px"
              }}>

        </a>
      </section>
    );
  }
}
