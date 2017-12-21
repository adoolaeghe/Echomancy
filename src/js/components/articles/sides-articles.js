import React from "react";

export default class SideArticles extends React.Component {

  render() {
    return(
      <div>
        <div className="side-nav-bar">{this.props.title}</div>
        <div className="side-article1"></div>
        <div className="side-article2"></div>
        <div className="side-article3"></div>
        <div className="side-article4"></div>
        <div className="side-article5"></div>
      </div>
    )
  }
}
