import React from "react";
import PieChart from "../../Home/player/components/PieChart/pieChart";


export default class PlayerMain extends React.Component {
  render() {
    return(
      <div>
        <PieChart />
        <div className="player-cover"
             style={{backgroundColor: this.props.style.backgroundColor}}
             onClick={this.props.handlePlayClick}>
        </div>
      </div>
    )
  }
}
