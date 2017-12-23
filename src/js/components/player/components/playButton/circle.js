import React from "react";

export default class Circle extends React.Component {
  render() {
    return (
      <svg
        className="circle"
        expanded="true"
        height="260px"
        width="240px"
      >
        <circle
          cx="50%"
          cy="50%"
          r={this.props.size}
          fill={this.props.color}
          opacity={this.props.opacity}
        />
      </svg>
    );
  }
}
