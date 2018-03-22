import React from "react";
import Card from "material-ui/Card";

export default class NavBar extends React.Component {
  render() {
    return (
      <Card className="nav-bar row" style={{top:"0px", zIndex: "9999999999"}}>
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
            borderRadius: "0px 0px 5px 5px"
          }}
        />
      </Card>
    );
  }
}
