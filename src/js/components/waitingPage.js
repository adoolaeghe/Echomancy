import React from "react";
import Main from "./main";
import Player from "./player/player";
import fire from "../firebase";
import WaitingPageMain from "./articles/waitingPageMain"

export default class WaitingPage extends React.Component {
  constructor() {
    super();
    this.audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    this.database = fire.database().ref();
    this.storage = fire.storage();
  }

  render() {
    return (
      <WaitingPageMain
        audioContext={this.audioContext}
        database={this.database}
        storage={this.storage}
      />
    );
  }
}
