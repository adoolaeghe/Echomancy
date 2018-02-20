import React from "react";

export default class Article6 extends React.Component {
  render() {
    return(
      <section className="article6 row"
               style={{background: 'url(./public/content/images/articles/article6-background.svg) no-repeat',
               backgroundSize: 'cover'}}>
        <div className="article6-slider"
             style={{backgroundImage: 'url(./public/content/images/main/hash-background.svg)'}}>
        </div>
        <div className="article6-header-first row">
          <div className="col s12">
            <h1 className="article5-header col s11 push-s1">
              Predict
            </h1>
          </div>
          <div className="col s12">
            <h2 className="article5-sub-header col s11 push-s1"
                style={{borderBottom: "1px solid grey",
                        marginBottom: 0}}>
              A song Future popularity
            </h2>
          </div>
        </div>
        <div className="article6-header-second row">
          <div className="col s2 push-s1"
               style={{backgroundImage: 'url(./public/content/images/main/hash-background.svg)',
                      borderLeft: "1px solid grey",
                      borderBottom: "1px solid grey",
                      height:"400px"}}>
          </div>
          <div className="col s9 push-s1 row">
            <h1 className="article5-header col s12">
              Earn
            </h1>
            <h2 className="article5-sub-header col s12"
                style={{borderBottom: "1px solid grey",
                        marginBottom: 0}}>
              From your discoveries
            </h2>
          </div>
        </div>
        <div className="bottom-info large col s12"
             style={{backgroundImage: 'url(./public/content/images/main/hash-background.svg)'}}>
          <div className="bottom-info-content">
            Content is first published with limited number of shares.
          </div>
        </div>
        <div className="dot-left" id="21"></div>
        <div className="dot-right" id="22"></div>
        <div className="article5-main col s12"></div>
      </section>
    )
  }
}
