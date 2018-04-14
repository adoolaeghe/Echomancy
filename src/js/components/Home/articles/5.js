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
import Article5Demo from "../drawer/article5Demo";

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
      zIndex: false
    };
  }

  render() {
    return (
      <section className="ryme-article article5 row" id="article5">

        <Article5Demo display={this.state.headerDisplay}/>

        <div className={`card-header row`}>

          <div className="col s5"
               id="article5left"
               style={bgConfig.noRepeat('main/hash-background.svg')}>
            <div style={bgConfig.noRepeat('articles/5/illustration.svg')}/>
          </div>

          <div id="article5main" className="col s5" style= {{zIndex: this.state.zIndex ? "1400" : "900"}}>
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

          <a className="col s2"
             style={{
               backgroundImage:
                 "url(./public/content/images/main/hash-background-reverse.svg)",
               zIndex: this.state.zIndex ? "1400" : "900"
             }}
             onClick={()=> {
               this.setState({
                 headerDisplay: !this.state.headerDisplay,
                 zIndex: !this.state.zIndex,
                 cancel: !this.state.cancel
               })
             }}
          >
            <div
              className="article-demo-trigger btn-large white btn-floating">
              <i style={bgConfig.noRepeat('main/logo-secondary')}></i>
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
