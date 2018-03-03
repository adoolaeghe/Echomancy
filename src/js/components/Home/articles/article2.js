import React from "react";

export default class Article2 extends React.Component {

  browserRedirect(pathName) {
    this.props.history.push(pathName)
  }

  render() {
    return(
      <section className="article2 row">
        <div className="dot-left" id="12"></div>
        <div className="dot-right" id="13"></div>
        <div className="article2-main col s10 hash-background">
          <div className="col s3" style={{textAlign: "center"}}>hello</div>
          <div className="col s3" style={{textAlign: "center"}}>hello</div>
          <div className="col s3" style={{textAlign: "center"}}>hello</div>
          <div className="col s3" style={{textAlign: "center"}}>hello</div>
        </div>
        <div className="article2-grid-left col s2 gradient-animation"
             style={{backgroundImage: 'url(./public/content/images/main/hash-background.svg),url(./public/content/images/main/hash-background-reverse.svg)'}}>
          <button onClick={() => {this.browserRedirect("/murwall")}}>
            <p>BETA</p>
          </button>
          <div className="dot-left" id="14"></div>
        </div>
      </section>
    )
  }
}
