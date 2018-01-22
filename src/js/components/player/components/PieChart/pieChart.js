import React from "react";
import PieChart from "react-simple-pie-chart";

export default class TrackChart extends React.Component {
  constructor(props) {
    super(props);
    this.db = this.props.db;
    this.storage = this.props.storage;
    this.state = {
      color: this.props.color,
      source: this.props.audioContext.createBufferSource(),
      gainNode: this.props.audioContext.createGain(),
      time: this.props.time,
      mute: this.props.mute
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      time: this.props.time
    });
    eventListenerForEachSlice.bind(this)();
  }

  render() {
    const rotation = "rotate(" + this.state.time.toString() + "deg)"
    if (this.props.loop !== null) {
      return (
        <div className="player-wrapper"
             style={{WebkitTransform: rotation}}>
          <PieChart slices={this.props.slices.slices} />
        </div>
      );
    }
  }
}
