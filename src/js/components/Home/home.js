import React from "react";
import Player from "./player/player";

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
import Menu from "./articles/menu";

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
      article3Text: false,
      article4Anim: false,
      article4Text: false,
      article1Arrow: true,
      article2Main: false
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
    const scroll = $(window).scrollTop();

    if (scroll > 200) {
      this.setState({
        article1Arrow: false,
        article2Main: true
      });
    }

    if (scroll > 500) {
      this.setState({
        article3Anim: true,
        article3Text: true
      });
    }

    if (scroll > 1100) {
      this.setState({
        article4Anim: true,
        article4Text: true
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
        <Menu menuDisplay= {this.state.menuDisplay}
              handleMenu= {() => {this.handleMenu()}}/>
        <main className="col s10 push-s1" style={{ zIndex: 100001 }}>
          <NavBar />
          <Article1 article1Arrow={this.state.article1Arrow} />
          <Article2 article2Main={this.state.article2Main}/>
          <Article3 article3Anim={this.state.article3Anim}
                    article3Text={this.state.article3Text}/>
          <Article4 article4Anim={this.state.article4Anim}
                    article4Text={this.state.article4Text}/>
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
