import React from "react";
import Player from "./player/player";
import Drawer from "material-ui/Drawer";
import { Tabs, Tab } from "material-ui/Tabs";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from "react-router-dom";

import Article1 from "./articles/article1";
import Article2 from "./articles/article2";
import Article3 from "./articles/article3";
import Article4 from "./articles/article4";
import Article5 from "./articles/article5";
import Article6 from "./articles/article6";
import Article7 from "./articles/article7";
import NavBar from "./articles/navBar";
import Footer from "./articles/footer";

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.switchPlayingIndex = this.switchPlayingIndex.bind(this);
    this.switchAutoPlay = this.switchAutoPlay.bind(this);
    this.state = {
      autoPlay: false,
      playingIndex: 1,
      menuGrain: 0.05,
      menuDisplay: false,
      article3Anim: false,
      article4Anim: false,
      article1Arrow: true,
    };
  }

  switchAutoPlay() {
    this.setState({
      autoPlay: true
    });
  }

  switchPlayingIndex(index) {
    this.setState({
      playingIndex: index
    });
  }

  browserRedirect(pathName) {
    this.props.props.history.push(pathName);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
    grained('#menu', {grainOpacity: this.state.menuGrain})
  }

  handleScroll(event) {
    if ($(window).scrollTop() > 200) {
      this.setState({
        article1Arrow: false
      });
    } else
    if ($(window).scrollTop() > 700) {
      this.setState({
        article3Anim: true
      });
    } else
    if ($(window).scrollTop() > 1300) {
      this.setState({
        article4Anim: true
      });
    } else {
      this.setState({
        article1Arrow: true,
        article3Anim: false,
        article4Anim: false
      });
    }
  }

  handleMenu() {
    this.setState({
      menuDisplay: !this.state.menuDisplay
    })
  }

  render() {
    const Details1 = () => <div> Hello World </div>;
    return (
      <div className="row">
        <a
          href="#!"
          id="menu"
          onMouseOver={() => {grained('#menu', {grainOpacity: 0.09})}}
          onMouseOut={() => {grained('#menu', {grainOpacity: 0.05})}}
          onClick={() => {this.handleMenu()}}
          className="left-column col s1"
        >
          <div
            className="menu-icon row col s12"
            style={{
              background:
                "url(./public/content/images/articles/hamburger.svg) no-repeat",
            }}
          />

          <Drawer
            width={240}
            openSecondary={false}
            zDepth={15}
            open={this.state.menuDisplay}
            containerStyle={{
            zIndex: "100000",
            backgroundColor: "transparent",
            }}
          >
            <ul className="menu row col s12">
              <li className="menu-item row col s12">About</li>
              <li className="menu-item row col s12">Why</li>
              <li className="menu-item row col s12">For</li>
            </ul>
          </Drawer>
        </a>
        <main className="col s10 push-s1" style={{ zIndex: 100001 }}>
          <NavBar />
          <Article1 article1Arrow={this.state.article1Arrow} />
          <Article2/>
          <Article3 article3Anim={this.state.article3Anim} />
          <Article4 article4Anim={this.state.article4Anim} />
        </main>
        <div className="col s1 side-right">
          <div className="side-nav-bar" />
          <div className="side-article1" />
          <div className="side-article2 auth" id="auth" />
          <div className="side-article3" />
          <div className="side-article4" />
          <div className="side-article5" />
        </div>
        <div
          className="space-between col s10 push-s1"
          onClick={() => {
            this.props.props.history.push("/details1");
          }}
        >
          <div className="space-between-line" />
          <div className="playing-dot" />
        </div>
        <main className="col s10 push-s1">
          <Article5 />
          <Article6 />
          <Article7 />
        </main>
        <Footer />
      </div>
    );
  }
}
