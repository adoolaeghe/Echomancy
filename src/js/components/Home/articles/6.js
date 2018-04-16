import React from "react";
import Menu from "material-ui/Menu";
import Drawer from "material-ui/Drawer";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import Toggle from "material-ui/Toggle";
import Demo6 from "../drawer/demo6";

export default class Article6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      finished: false,
      stepIndex: 0,
      selectedShadow: 0,
      loading: false,
      finished: false,
      stepIndex: 0,
      expanded: false,
      cardShadow: 1,
      headerDisplay: true,
      zIndex: false,
      cancel: false
    };
  }


  render() {
    return (
      <section className="ryme-article article6 row" id="article5">

        <Demo6 display={this.state.headerDisplay}/>

        <div className={`card-header row`} href="#!">
          <div
            className="col m3 l5"
            id="article5left"
            style={{backgroundImage:"url(./public/content/images/main/hash-background.svg)"}}
          >
            <div style={{ backgroundImage:"url(./public/content/images/articles/5/illustration.svg)",}}/>
          </div>
          <div id="article5main" className="col m6 l5" style= {{zIndex: this.state.zIndex ? "1400" : "900"}}>
            <div>
              <div className="text-header-line"/>
              <h2>SECTION</h2>
              <p>
                Eco is a global currency not controlled by any single
                individual, organization, or nation. Our mission is to
                distribute the majority of
              </p>
            </div>
          </div>
          <a
            className="col m3 l2"
            style={{
              backgroundImage:
                "url(./public/content/images/main/hash-background-reverse.svg)",
              zIndex: this.state.zIndex ? "1400" : "900"
            }}
          >
            <div
              className={`article5-demo-trigger btn-floating btn-large white ${this.state.cancel ? "cancel" : ''}`}
              onClick={()=> {this.setState({headerDisplay: !this.state.headerDisplay, zIndex: !this.state.zIndex, cancel: !this.state.cancel})}}>
              <i style={{
                backgroundImage:"url(./public/content/images/main/logo-secondary.svg)",
                backgroundSize: "100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "60px"
              }}></i>
            </div>
            <span className="article-number">
             03.
            </span>
          </a>
        </div>
        <div className="dot-left top" />
        <div className="dot-right top" />
        <div className="dot-left" />
        <div className="dot-right" />
      </section>
    );
  }
}
