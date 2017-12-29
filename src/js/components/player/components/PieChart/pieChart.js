import React from "react";
import PieChart from "react-simple-pie-chart";
import AddSlice from "../addSlice/addSlice";

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

  componentWillMount(AudioBuffer) {
    this.storage.then(url => {
      this.db.on("value", snap => {
        setAudioNode.bind(this)(snap, url);
      });
    });
  }

  componentDidUpdate(nextProps) {
    if (this.props.mute !== nextProps.mute) {
      updateAudioNode.bind(this)();
    } else if (this.props.loop !== nextProps.loop) {
      updateAudioLoop.bind(this)();
    }
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
        <div>
          <div className="wrapper1"
               className={"wrapper" + this.props.index}
               style={{WebkitTransform: rotation}}>
            <PieChart slices={this.props.slices.slices} />
          </div>
        </div>
      );
    }
  }
}
