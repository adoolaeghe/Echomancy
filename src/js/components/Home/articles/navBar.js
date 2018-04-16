import React from "react";
import Card from "material-ui/Card";

export default class NavBar extends React.Component {
  render() {
    return (
      <Card className="nav-bar col s10 row">
        <a
          className="navBar-logo-title wave-effect waves-light btn z-depth-1 push-s4"
          style={{
            backgroundImage: "url(./public/content/images/main/logo.svg)"
          }}
        />
        <div className="dot-right" />
      </Card>
    );
  }
}
