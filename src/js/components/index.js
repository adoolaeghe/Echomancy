import React from "react";
import Home from "./Home/home"

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ConnectedRouter } from 'connected-react-router';

import {
  BrowserRouter as Router,
  Route,
  Link,
  hashHistory,
  BrowserRouter,
  Switch
} from 'react-router-dom'
import { Provider } from 'react-redux';
import store, { history } from '../store/store';

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

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MuiThemeProvider>
            <Route exact path="/" render={props => <HomePage {...props} />} />
          </MuiThemeProvider>
        </ConnectedRouter>
      </Provider>
    );
  }
}
