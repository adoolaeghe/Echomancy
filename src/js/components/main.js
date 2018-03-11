import React from "react";
import Home from "./Home/home";
import MurWall from "./murwall/murwall";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {
  BrowserRouter as Router,
  Route,
  Link,
  hashHistory,
  BrowserRouter,
  Switch
} from 'react-router-dom'

export default class Main extends React.Component {

  constructor() {
    super();
    this.audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
  }

  render() {

    const HomePage = (props) => (
      <Home
        props= {props}
        audioContext={this.audioContext}
        database={this.database}
        storage={this.storage}
      />
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
        <MuiThemeProvider>
          <Switch>
            <Route exact path="/" render={props => <HomePage {...props} />} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/murwall" component={murmur} />
          </Switch>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}
