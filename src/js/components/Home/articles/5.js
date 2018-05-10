import React from "react";
import Menu from "material-ui/Menu";
import Drawer from "material-ui/Drawer";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentSend from 'material-ui/svg-icons/content/send';
import bgConfig from "../../ryme-helpers/ryme-background";

import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import Toggle from "material-ui/Toggle";
import Demo5 from "../drawer/demo5";

export default class Article5 extends React.Component {
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
      active: false
    };
  }

	componentDidMount() {
		sr.reveal('.article5', {scale: 1, opacity: 0.2});
		sr.reveal('.article5-text-header');
		sr.reveal('.article5-text-content');
		sr.reveal('.article5-demo-button', {delay: 300});
	}

  render() {
    return (
      <section className="ryme-article article5 row" id="article5">

        <Demo5 display={this.state.headerDisplay}/>

        <div className={`card-header row`}>

          <div className="col m3 l5"
               id="article5left"
               style={bgConfig.noRepeat('main/hash-background.svg')}>
            <div style={bgConfig.noRepeat('articles/5/illustration.svg')}/>
          </div>

          <div id="article5main" className="col m6 l5  number-3" style= {{zIndex: this.state.zIndex ? "1400" : "900"}}>
            <div>
              <div className="text-header-line number-3"/>
              <h2 className="article5-text-header">SECTION</h2>
              <p className="article5-text-content">
                Eco is a global currency not controlled by any single
                individual, organization, or nation. Our mission is to
                distribute the majority of
              </p>
            </div>
          </div>

          <a className="article5-demo-button col m3 l2"
             style={{
               backgroundImage:
                 "url(./public/content/images/main/hash-background-reverse.svg)",
               zIndex: this.state.zIndex ? "1400" : "900"
             }}
             onClick={()=> {
               this.setState({
                 headerDisplay: !this.state.headerDisplay,
                 zIndex: !this.state.zIndex,
                 cancel: !this.state.cancel,
                 active: !this.state.active
               })
             }}
          >
            <div
              className={`article-demo-trigger number-3 btn-large white btn-floating ${this.state.active ? "active" : ""}`}>
              <i style={{
                backgroundImage:"url(./public/content/images/main/logo-secondary.svg)",
                backgroundSize: "50%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}></i>
            </div>
            <span className="article-number number-3">
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
