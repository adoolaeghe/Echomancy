import React from "react";
import Pie from "./components/Pie";
import AlbumCover from "./components/AlbumCover";
import AddSlice from "./components/addSlice";
import Palette from './components/palette/Palette';
import fire from './../firebase';
import BottomButton from './components/button/bottomButton';
import TopButton from './components/button/topButton';
import UserName from './components/userName';


// loads image for color palette finding.
const name = 'hello'
const image = new Image();
image.crossOrigin = "anonymous";
image.src = "https://i.imgur.com/lK6hCZu.png";

export default class Player extends React.Component {

  constructor(){
    super();
    this.db = fire.database().ref().child('users');
    this.state = {
      slices: [],
      userNames: [],
      mute: 1,
      loop: 4,
      audioContext: new (window.AudioContext || window.webkitAudioContext)()
    }
  }

  componentWillMount() {
    const slices = this.state.slices;
    const userNames = this.state.userNames;
    this.db.on('child_added', snap => {
      slices.push({
        color: snap.val().color,
        value: snap.val().value,
      })
      userNames.push({
        userName: snap.val().userName
      })
      this.setState({
        slices: slices,
        userNames: userNames,
      })
    })
  }

  addSlice(color, value){
    this.db.push().set({ color: color, value: value, userName: Math.random().toString()})
    this.setState({
      loop: this.state.loop + 1
    })
  }

  handleClick() {
    if(this.state.mute === 1){
      this.setState({
        mute: 0,
      })
    } else {
      this.setState({
        mute: 1,
      })
    }
  }


  render() {
    console.log(this.state.loop)
    return (
      <div id='wrapper'>
        <Pie slices={this.state}/>
        <AlbumCover />
        <UserName name={this.state.userNames} length={this.state.userNames.length} color={this.state.slices}/>
        <Palette image={image}>{palette => (
          <AddSlice addSlice= {this.addSlice.bind(this)} slices={this.state} color={palette} loop = {this.state.loop} mute = {this.state.mute} audioContext = {this.state.audioContext}/>
        )}
        </Palette>
        <button onClick={this.handleClick.bind(this)}>Mute button</button>
      </div>
    )
  }
}
