import React from "react";

import Palette from "./components/palette/Palette";
import PieChart from "./components/PieChart/pieChart";
import FloatingActionButton from 'material-ui/FloatingActionButton';

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="player">
        <PieChart />
        <div className="player-cover"></div>
        <FloatingActionButton
          disabled={true}
          style={{position: "absolute", zIndex: "100"}}
        />
      </div>
    );
  }
}
