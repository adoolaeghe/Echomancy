import React from "react";
import Main from "./main";
import Player from "./player/player";
import MurWall from "./murwall/murwall"
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
      // <MurWall players={8}/>
    )

    const SignIn = () => (
      <div>
        <div>Welcome to Murmur.fm</div>
        <div>Sign In Now</div>
      </div>
    )

    const SignUp = () => (
      <div>
        <div>Welcome to Murmur.fm</div>
        <div>Sign Up Now</div>
      </div>
    )

    const murmur = () => (
      <MurWall players={8}/>
    )

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/murwall" component={murmur} />
        </Switch>
      </BrowserRouter>
    );
  }
}
