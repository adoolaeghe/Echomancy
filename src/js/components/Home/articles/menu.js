import React from "react";
import Drawer from "material-ui/Drawer";
import ReactBodymovin from "react-bodymovin";
import animation from "../../../../../public/content/animation/data2.json";
import animation1 from "../../../../../public/content/animation/data2.json";

export default class Menu extends React.Component {
  constructor(){
    super();
    this.state = {
      menuHover: false
    }
  }

  returnAnimation(a, b) {
    if(this.state.menuHover) {
      return <ReactBodymovin key={1} options={b} />
    } else {
      return <ReactBodymovin key={2} options={a} />
    }
  }

  render() {
    const bodymovinOptions = {
      loop: false,
      autoplay: true,
      prerender: false,
      animationData: animation
    };
    const bodymovinOptions1 = {
      loop: false,
      autoplay: false,
      prerender: false,
      animationData: animation1
    };
    return (
      <a
        className="nav-menu col s1"
        href="#!"
        id="menu"
        onMouseOver={() => {
          grained("#menu", { grainOpacity: 0.09 });
          this.setState({menuHover: true})
        }}
        onMouseOut={() => {
          grained("#menu", { grainOpacity: 0.05 });
          this.setState({menuHover: false})
        }}
        onClick={() => {
          this.props.handleMenu();
        }}
      >
        {this.returnAnimation(bodymovinOptions, bodymovinOptions1)}

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
