import React from "react";

import Palette from "./components/palette/Palette";
import PieChart from "./components/PieChart/pieChart";

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Palette image={this.state.image}>
        {palette => (
          <div className="player">
            <PieChart />
            <div className="player-cover"></div>
        </div>
      )}
      </Palette>
    );
  }
}
