import React from "react";
import Circle from "./circle";
import BackCircle from "./backCircle"

export default class PlayButton extends React.Component {
  render() {
    return (
      <div>
        <Circle
          color={this.props.color}
          opacity={this.props.opacity}
          size={this.props.size}
          index={this.props.index}
        />
      </div>
    );
  }
}
