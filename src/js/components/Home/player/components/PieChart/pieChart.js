import React from "react";
import PieChart from "react-simple-pie-chart";

export default class TrackChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slices: [
        {
          color:"#F04043",
          value: 0.5
        },
        {
          color:"#4489CD",
          value: 0.5
        },
        {
          color:"#000000",
          value: 0.5
        },
        {
          color:"#FDE479",
          value: 0.5
        },
        {
          color:"#4489CD",
          value: 0.5
        },
        {
          color:"#FE7678",
          value: 0.5
        },
        {
          color:"#FEEFBF",
          value: 0.5
        },
      ],
    }
  }

  render() {
    if (this.props.loop !== null) {
      return (
        <div className={`player-wrapper ${this.props.size} rotating`}>
          <PieChart slices={this.state.slices} />
        </div>
      );
    }
  }
}
