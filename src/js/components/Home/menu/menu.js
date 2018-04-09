import React from "react";
import Drawer from "material-ui/Drawer";
import ReactBodymovin from "react-bodymovin";
import menuAnimDataA from "../../../../../public/content/animation/menuAnimData.json";
import menuAnimDataB from "../../../../../public/content/animation/menuAnimData.json";
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
    const menuAnimOptionA = {
      loop: false,
      autoplay: true,
      prerender: false,
      animationData: menuAnimDataA
    };
    const menuAnimOptionB = {
      loop: false,
      autoplay: true,
      prerender: false,
      animationData: menuAnimDataB
    };
    return (

      <Card className="nav-menu col s1" href="#!">
        {!this.props.menuDisplay &&
        <div>
          <div
            className="menu-icon"
            onClick={() => {
              this.props.handleMenu();
            }}>
              {this.returnAnimation(menuAnimOptionA, menuAnimOptionB)}
          </div>
          <div>
            <ul className="menu row col s12">
              <li className="menu-item no-border row col s12">
                Fb
              </li>
              <li className="menu-item no-border row col s12">
                Md
              </li>
              <li className="menu-item no-border row col s12">
                Sl
              </li>
            </ul>
          </div>
        </div>
        }
        <div className="menu-drawer">
          <Drawer
            key={2}
            width={240}
            openSecondary={false}
            zDepth={0}
            open={this.props.menuDisplay}
            containerStyle={{
              zIndex: "100000",
              backgroundColor: "transparent"
            }}
            style={{
              backgroundColor: "transparent"
            }}
          >
            <ul className="menu row col s12">
              <li className="menu-item main-item row col s12">
                  <button onClick={this.props.handleFaq}
                  style={{
                    background:
                      "url(./public/content/images/icons/paper.svg) no-repeat"
                  }}></button>
              </li>
              <li className="menu-item main-item row col s12">
                <button style={{
                  background:
                    "url(./public/content/images/icons/alerts.svg) no-repeat"
                }}></button>
              </li>
              <li className="menu-item main-item row col s12">
                <button onClick={this.props.handleFaq}
                style={{
                  background:
                    "url(./public/content/images/icons/info.svg) no-repeat"
                }}></button>
              </li>
            </ul>
          </Drawer>
        </div>

      </Card>
    );
  }
}
