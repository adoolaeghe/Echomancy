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
import Article6Demo from "../drawer/demo7";

export default class Article7 extends React.Component {
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

	componentDidMount() {
		sr.reveal('.article7', {scale: 1, opacity: 0.2});
		sr.reveal('.article7-text-header');
		sr.reveal('.article7-text-content');
	}

  render() {
    return (
      <section className="ryme-article article7 row" id="article5">

        <Article6Demo display={this.state.headerDisplay}/>

        <div className={`card-header row`} href="#!">
          <div
            className="col m3 l5"
            id="article5left"
            style={{backgroundImage:"url(./public/content/images/main/hash-background.svg)"}}
          >
            <div style={{ backgroundImage:"url(./public/content/images/articles/7/illustration.svg)",}}/>
          </div>
          <div id="article5main" className="col m6 l5 number-5" style= {{zIndex: this.state.zIndex ? "1400" : "900"}}>
            <div>
              <div className="text-header-line number-5"/>
              <h2 className="article7-text-header">SECTION</h2>
              <p className="article7-text-content">
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
              className={`article5-demo-trigger number-5 btn-floating btn-large white ${this.state.cancel ? "cancel" : ''}`}
              onClick={()=> {this.setState({headerDisplay: !this.state.headerDisplay, zIndex: !this.state.zIndex, cancel: !this.state.cancel})}}>
              <i style={{
                backgroundImage:"url(./public/content/images/main/logo-secondary.svg)",
                backgroundSize: "70%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}></i>
            </div>
            <span className="article-number number-5">
             05.
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
