import React from "react";
import Drawer from "material-ui/Drawer";
import ReactBodymovin from "react-bodymovin";
import menuAnimDataA from "../../../../../public/content/animation/menuAnimData.json";
import menuAnimDataB from "../../../../../public/content/animation/menuAnimData.json";
import Card from "material-ui/Card";
import ReactTooltip from 'react-tooltip';
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
      <ReactTooltip place="left" effect="solid"/>
      <div className="fixed-action-btn">
        <a className="menu-btn" data-position="bottom" data-tooltip="I am a tooltip">
          MENU
          <div className="dot-right" />
        </a>
        <ul>
          <li onClick= {this.props.handleFaq}>
            <a className="btn-floating white"
            style={{
              background:
                "url(./public/content/images/icons/paper.svg) no-repeat",
              backgroundSize: "50%",
              backgroundPosition: "center"
            }}>
            </a>
          </li>
          <li onClick= {this.props.handleFaq}>
            <a className="btn-floating white"
            style={{
              background:
                "url(./public/content/images/icons/alerts.svg) no-repeat",
              backgroundSize: "50%",
              backgroundPosition: "center"
            }}>
            </a>
          </li>
          <li onClick= {this.props.handleFaq}>
            <a className="btn-floating white"
            style={{
              background:
                "url(./public/content/images/icons/faq.svg) no-repeat",
              backgroundSize: "100%",
              backgroundPosition: "center"
            }}>
            </a>
          </li>
        </ul>
      </div>
        <div>
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
      </Card>
    );
  }
}
