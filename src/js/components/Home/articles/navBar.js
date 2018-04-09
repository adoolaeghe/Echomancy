import React from "react";
import Card from "material-ui/Card";

export default class NavBar extends React.Component {
  render() {
    return (
      <Card className="nav-bar row">
        <div className="col s1 navBar-logo"></div>
        <a
          className="navBar-logo-title wave-effect waves-light btn col s1 z-depth-1 push-s4"
          style={{
            backgroundImage: "url(./public/content/images/main/logo.svg)"
          }}
        />
        <div className="dot-left" />
        <div className="dot-right" />
      </Card>
    );
  }
}
