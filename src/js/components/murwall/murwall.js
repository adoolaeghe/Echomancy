import React from "react";
import Player from "./components/player"
export default class MurWall extends React.Component {

  render() {
    return(
      <div className="row">
        <div className="left-column col l1 m1 s1">

        </div>
        <main className="col l10 m10 s10">
          <Player />
          <Player />
          <Player />
          <Player />
          <Player />
          <Player />
          <Player />
          <Player />

        </main>
        <div className="col l1 m1 s1 side-right">

        </div>
      </div>
    )
  }
}
