import React from "react";
import Player from "./player/player";
import ReactBodymovin from "react-bodymovin";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom'

import Article1 from "./articles/article1"
import Article2 from "./articles/article2"
import Article3 from "./articles/article3"
import Article4 from "./articles/article4"
import Article5 from "./articles/article5"
import Article6 from "./articles/article6"
import NavBar from "./articles/navBar"
import SideArticles from "./articles/sides-articles"

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.switchPlayingIndex = this.switchPlayingIndex.bind(this);
    this.switchAutoPlay = this.switchAutoPlay.bind(this);
    this.state = {
      autoPlay: false,
      playingIndex: 1
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

  render() {

    const Details1 = () => (
      <div> Hello World </div>
    )
    return (
      <div className="row">
        <div className="left-column col s1">
          <SideArticles title={"r"} right={""}/>
        </div>
        <main className="col s10">
          <NavBar />
          <Article1 audioContext={this.props.audioContext}
                    database={this.props.database}
                    storage={this.props.storage}
                    playingIndex={this.state.playingIndex}
                    autoPlay={this.state.autoPlay}/>
          <Article2 />
          <Article3 />
          <Article4 />
        </main>
        <div className="col s1">
          <SideArticles title={""} right={" align-right"}/>
        </div>
        <div className="space-between col s10"
             onClick={() => {this.props.props.history.push('/details1')}}>
          <div className="space-between-line"></div>
          <div className="playing-dot"></div>
        </div>
        <main className="col s10">
          <Article5 />
          <Article6 />
        </main>
      </div>
    );
  }
}
