import React from "react";

export default class NavBar extends React.Component {
  render() {
    return (
      <section className="nav-bar row">
        <div classNameName="dot-left" id="1" />
        <div classNameName="dot-right" id="2" />
        <div className="col s1"
            style={{
              height: "70px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.25rem",
              paddingLeft: "40px"
            }}>
          RYME
        </div>
        <a
          className="navBar-logo-title wave-effect waves-light btn col s1 z-depth-1 push-s4"
          style={{
            backgroundImage: "url(./public/content/images/main/logo.svg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "50px",
            backgroundPosition: "center",
            backgroundColor: "white",
            height: "90px",
            marginLeft: "35px",
            width: "90px",
            borderRadius: "0px 0px 10px 10px"
          }}
        />
      </section>
    );
  }
}
