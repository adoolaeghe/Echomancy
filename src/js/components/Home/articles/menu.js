import React from "react";
import Drawer from "material-ui/Drawer";

export default class Menu extends React.Component {
  render() {
    return (
      <a
        className="nav-menu col s1"
        href="#!"
        id="menu"
        onMouseOver={() => {
          grained("#menu", { grainOpacity: 0.09 });
        }}
        onMouseOut={() => {
          grained("#menu", { grainOpacity: 0.05 });
        }}
        onClick={() => {
          this.props.handleMenu();
        }}
      >
        <div
          className="menu-icon row col s12"
          style={{
            background:
              "url(./public/content/images/icons/hamburger.svg) no-repeat"
          }}
        />

        <Drawer
          width={240}
          openSecondary={false}
          zDepth={15}
          open={this.props.menuDisplay}
          containerStyle={{
            zIndex: "100000",
            backgroundColor: "transparent"
          }}
        >
          <ul className="menu row col s12">
            <li className="menu-item row col s12">About</li>
            <li className="menu-item row col s12">Why</li>
            <li className="menu-item row col s12">For</li>
          </ul>
        </Drawer>
      </a>
    );
  }
}
