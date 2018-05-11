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
      cancel: false,
      active: false
    };
  }

	componentDidMount() {
		sr.reveal('.article6', {scale: 1, opacity: 0.2});
		sr.reveal('.article6-text-header');
		sr.reveal('.article6-text-content');
		sr.reveal('.article6-demo-button', {delay: 300});
	}

  render() {
    return (
			<div>
				<Demo6 display={this.state.headerDisplay}/>
	      <section className="ryme-article article6 row" id="article5">
	        <div className={`card-header row`} href="#!">
	          <div
	            className="col m3 l5"
	            id="article5left"
	            style={{backgroundImage:"url(./public/content/images/main/hash-background.svg)"}}
	          >
	            <div style={{ backgroundImage:"url(./public/content/images/articles/6/illustration.svg)",}}/>
	          </div>
	          <div id="article5main" className="col m6 l5  number-4" style= {{zIndex: this.state.zIndex ? "1400" : "900"}}>
	            <div>
	              <div className="text-header-line number-4"/>
	              <h2 className="article6-text-header">SECTION</h2>
	              <p className="article6-text-content">
	                Eco is a global currency not controlled by any single
	                individual, organization, or nation. Our mission is to
	                distribute the majority of
	              </p>
	            </div>
	          </div>
	          <a
	            className="article6-demo-button col m3 l2"
	            style={{
	              backgroundImage:
	                "url(./public/content/images/main/hash-background-reverse.svg)",
	              zIndex: this.state.zIndex ? "1400" : "900"
	            }}
	            onClick={()=> {this.setState({headerDisplay: !this.state.headerDisplay, zIndex: !this.state.zIndex, cancel: !this.state.cancel, active: !this.state.active})}}
	          >
	            <div
	              className={`article-demo-trigger number-4 btn-large white btn-floating ${this.state.active ? "active" : ""}`}>
	              <i style={{
	                backgroundImage:"url(./public/content/images/main/logo-secondary.svg)",
	                backgroundSize: "50%",
	                backgroundPosition: "center",
	                backgroundRepeat: "no-repeat"
	              }}></i>
	            </div>
	            <span className="article-number number-4">
	             05.
	            </span>
	          </a>
	        </div>
	        <div className="dot-left top" />
	        <div className="dot-right top" />
	        <div className="dot-left" />
	        <div className="dot-right" />
	      </section>
			</div>
    );
  }
}
