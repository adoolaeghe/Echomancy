import React from "react";
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

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
              PREDICT
            </h1>
          </div>
          <div className="col s12">
            <h2 className="article5-sub-header col s11 push-s1"
                style={{borderBottom: "1px solid grey",
                        marginBottom: 0}}>
              A SONG FUTURE POPULARITY
            </h2>
          </div>
        </div>
        <div className="article6-header-second row">
          <div className="row col s1"
                style={{height:"400px"}}>
            <div className="col s12"
                 style={{height:"100px",
                         borderBottom: "1px solid lightgrey",
                         borderTop: "1px solid grey"}}>
               <IconButton
                 tooltip="bottom-right"
                 tooltipPosition="bottom-right"
               >
                 <ActionHome />
               </IconButton>
            </div>
            <div className="col s12"
                 style={{height:"100px",
                        borderBottom: "1px solid lightgrey",
                        borderTop: "1px solid lightgrey"}}>
              <IconButton
                tooltip="bottom-right"
                tooltipPosition="bottom-right"
              >
                <ActionHome />
              </IconButton>
            </div>
            <div className="col s12"
                 style={{height:"100px",
                         borderBottom: "1px solid lightgrey",
                         borderTop: "1px solid lightrey"}}>
              <IconButton
                tooltip="bottom-right"
                tooltipPosition="bottom-right"
              >
                <ActionHome />
              </IconButton>
            </div>
            <div className="col s12"
                 style={{height:"100px",
                         borderBottom: "1px solid lightgrey",
                         borderTop: "1px solid lightgrey"}}>
              <IconButton
                tooltip="bottom-right"
                tooltipPosition="bottom-right"
              >
                <ActionHome />
              </IconButton>
            </div>
          </div>
          <div className="col s2"
               style={{backgroundImage: 'url(./public/content/images/main/hash-background.svg)',
                      borderLeft: "1px solid grey",
                      borderBottom: "1px solid grey",
                      height:"400px"}}>
          </div>
          <div className="col s9 row">
            <h1 className="article5-header col s12">
              EARN
            </h1>
            <h2 className="article5-sub-header col s12"
                style={{borderBottom: "1px solid grey",
                        marginBottom: 0}}>
              FROM YOUR DISCOVERY
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
