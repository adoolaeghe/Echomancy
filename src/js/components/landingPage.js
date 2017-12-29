import React from "react";
import Main from "./main";
import Player from "./player/player";
import fire from "../firebase";

import {
  BrowserRouter as Router,
  Route,
  Link,
  hashHistory,
  BrowserRouter,
  Switch
} from 'react-router-dom'

export default class LandingPage extends React.Component {
  constructor() {
    super();
    this.audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    this.database = fire.database().ref();
    this.storage = fire.storage();
  }

  render() {

    const Home = (props) => (
      <Main
        props= {props}
        audioContext={this.audioContext}
        database={this.database}
        storage={this.storage}
      />
    )

    const Details1 = () => (
      <div>Hello</div>
    )

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />}/>
          <Route exact path="/details1" component={Details1}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
