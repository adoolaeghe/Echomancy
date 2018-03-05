import React from "react";
import IconButton from 'material-ui/IconButton';
import PieChart from "../../../Home/player/components/PieChart/pieChart";
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

export default class PlayerMain extends React.Component {
  render() {
    return(
      <div>
        <PieChart />
        <div className={`player-cover ${this.props.playingStyle}`}
             onClick={this.props.handlePlayClick}>
          <div className={`player-btn-icon ${this.props.playingStyle}`}>
          </div>
        </div>
      </div>
    )
  }
}
