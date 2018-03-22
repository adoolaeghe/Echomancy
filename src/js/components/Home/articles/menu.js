import React from "react";
import Drawer from "material-ui/Drawer";
import ReactBodymovin from "react-bodymovin";
import animation from "../../../../../public/content/animation/data2.json";
import animation1 from "../../../../../public/content/animation/data2.json";
import Card from "material-ui/Card";

export default class Menu extends React.Component {
  constructor(){
    super();
    this.state = {
      menuHover: false,
      faqDisplay: false
    }
  }

  returnAnimation(a, b) {
    if(this.state.menuHover) {
      return <ReactBodymovin style={{height: "70px"}} key={1} options={b} />
    } else {
      return <ReactBodymovin style={{height: "70px"}} key={2} options={a} />
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
      autoplay: true,
      prerender: false,
      animationData: animation1
    };
    return (
      <Card
        className="nav-menu col s1"
        href="#!"
        id=""
        style={{
          display:"flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
        onClick={() => {
          this.props.handleMenu();
        }}>
          {this.returnAnimation(bodymovinOptions, bodymovinOptions1)}
        </div>
        <div>
        <ul className="row col s12" style = {{top: "70px", position: "absolute"}}>
          <li className="menu-item row col s12" style = {{textAlign: "center", height: "50px", fontWeight: "600", fontSize: "18px"}}>
            Fb
          </li>
          <li className="menu-item row col s12" style = {{textAlign: "center", height: "50px", fontWeight: "600", fontSize: "18px"}}>
            Fb
          </li>
          <li className="menu-item row col s12" style = {{textAlign: "center", height: "50px", fontWeight: "600", fontSize: "18px"}}>
            Fb
          </li>
        </ul>
        </div>
        <div className="menu-drawer">
          <Drawer
            key={2}
            width={240}
            openSecondary={false}
            zDepth={15}
            open={this.props.menuDisplay}
            containerStyle={{
              zIndex: "100000",
              backgroundColor: "transparent"
            }}
            style={{
              backgroundColor: "white"
            }}
          >
            <ul className="menu row col s12">
              <li className="menu-item row col s12">
                  <button onClick={this.props.handleFaq}
                  style={{
                    height: "40px",
                    width: "30px",
                    background:
                      "url(./public/content/images/icons/paper.svg) no-repeat",
                    backgroundSize: "cover"
                  }}></button>
              </li>
              <li className="menu-item row col s12">
                <button style={{
                  height: "30px",
                  width: "30px",
                  background:
                    "url(./public/content/images/icons/alerts.svg) no-repeat",
                  backgroundSize: "cover"
                }}></button>
              </li>
              <li className="menu-item row col s12">
                <button onClick={this.props.handleFaq}
                style={{
                  height: "30px",
                  width: "30px",
                  background:
                    "url(./public/content/images/icons/info.svg) no-repeat",
                  backgroundSize: "cover"
                }}></button>
              </li>
            </ul>
          </Drawer>
        </div>

      </Card>
    );
  }
}
