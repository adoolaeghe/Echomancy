import React from "react";
import Player from "./components/player"
export default class MurWall extends React.Component {

  handlePlayerRender() {
    let to_return = [];
    for(let i = 0; i < this.props.players; i++) {
      to_return.push(<Player />)
    }
    return to_return;
  }

  render() {
    return(
      <div className="row">
        <div className="left-column col l1 m1 s1">

        </div>
        <main className="col l10 m10 s10">
          {this.handlePlayerRender()}
        </main>
        <div className="col l1 m1 s1 side-right">

        </div>
      </div>
    )
  }
}
