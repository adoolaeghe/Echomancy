import React from "react";
import Player from "./components/player/player";

import Header from './components/header/header';
import DrawerRight from './components/drawers/drawerRight';
import DrawerLeft from './components/drawers/drawerLeft';
import DrawerProfile from './components/drawers/drawerProfile';
import TopFilters from './components/topFilters/TopFilters';

export default class MurWall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on : null,
      drwleftOpen: false,
      drwRightOpen: false,
      drwProfileOpen: false
    }
  }

  handleToggleRight() {
    console.log('here')
    this.setState({drwRightOpen: !this.state.drwRightOpen});
  }

  handleToggleLeft() {
    this.setState({drwRightOpen: !this.state.drwLeftOpen});
  }

  handleToggleLeft1() {
    this.setState({drwProfileOpen: !this.state.drwProfileOpen});
  }

  handleOnOff(playerKey) {
    this.setState({
      on : playerKey
    })
  }

  handlePlayerRender() {
    let to_return = [];
    let color = "primary"
    for(let i = 1; i < this.props.players; i++) {
      if (color==="primary") {
        color = "secondary"
      } else if (color ==="secondary") {
        color= "thirdly"
      } else {
        color = "primary"
      }
      to_return.push(
        <Player key={i}
                uKey={i}
                color= {color}
                onKey={this.state.on}
                handleOnOff={this.handleOnOff.bind(this)}
        />
      )
    }
    return to_return;
  }

  render() {
    return(
      <div className="row">
        <Header handleToggleRight = {() => {this.handleToggleRight()}}/>
        <div className="left-column col m2 s2">

          <DrawerLeft />

          <DrawerRight open= {this.state.drwRightOpen}/>

          <DrawerProfile open = {this.state.drwProfileOpen}/>
        </div>

        <main className="col l8 m8 s8" style={{marginTop: "70px"}}>
          <div className="col s12 row">

            <TopFilters />

          </div>
          {this.handlePlayerRender()}
        </main>
        <div className="col l2 m2 s2 side-right">

        </div>
      </div>
    )
  }
}
