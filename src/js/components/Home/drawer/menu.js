import React from "react";
import Drawer from "material-ui/Drawer";
import ReactBodymovin from "react-bodymovin";
import menuAnimDataA from "../../../../../public/content/animation/menuAnimData.json";
import menuAnimDataB from "../../../../../public/content/animation/menuAnimData.json";
import Card from "material-ui/Card";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

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

      <Card style={{zIndex:"1000"}} className="nav-menu col s1" href="#!">
        <div>
          <div
            className="menu-icon"
            onClick={() => {
              this.props.handleMenu();
            }}>
              {this.returnAnimation(menuAnimOptionA, menuAnimOptionB)}
              <div className="dot-right" />
          </div>
          <div>
            <ul className="menu-icon-media row col s12">
              <li className="no-border row col s12">
                <FloatingActionButton zDepth={2} mini={true} iconStyle={{width: "30px", backgroundColor: "#2AA3F0", height: "30px"}}>
                  <div style={{
                    backgroundImage:
                      "url(./public/content/images/icons/twitter.svg)",
                    backgroundSize: "60%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                  }}></div>
                </FloatingActionButton>
              </li>
              <li className="menu-item no-border row col s12">
                <FloatingActionButton zDepth={2} mini={true} iconStyle={{width: "30px", height: "30px",  backgroundColor: "white"}}>
                <div style={{
                  backgroundImage:
                    "url(./public/content/images/icons/slack.svg)",
                  backgroundSize: "70%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat"
                }}></div>
                </FloatingActionButton>
              </li>
              <li className="menu-item no-border row col s12">
                <FloatingActionButton zDepth={2} mini={true} iconStyle={{width: "30px", height: "30px", backgroundColor: "white"}}>
                  <div style={{
                    backgroundImage:
                      "url(./public/content/images/icons/medium.svg)",
                    backgroundSize: "100%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                  }}></div>
                </FloatingActionButton>
              </li>
            </ul>
          </div>
        </div>

        <div className="menu-drawer">
          <Drawer
            key={3}
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
          <div
            className="menu-icon"
            onClick={() => {
              this.props.handleMenu();
            }}>
              {this.returnAnimation(menuAnimOptionA, menuAnimOptionB)}
              <div className="dot-right" />
          </div>
            <ul className="menu row col s12">
              <li className="menu-item main-item row col s12">
                <button
                  onClick={this.props.handleFaq}>
                  WHITE
                </button>
                <div className="dot-right small" />
              </li>
              <li className="menu-item main-item row col s12">
                <button>
                  ALERTS
                </button>
                <div className="dot-right small" />
              </li>
              <li className="menu-item main-item row col s12">
                <button
                    onClick={this.props.handleFaq}>
                  FAQ
                </button>
                <div className="dot-right small" />
              </li>
            </ul>
          </Drawer>
        </div>
      </Card>
    );
  }
}
