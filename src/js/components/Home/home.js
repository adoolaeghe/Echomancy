import React from "react";
import Player from "./player/player";
import LazyLoad from 'react-lazyload';
import Drawer from "material-ui/Drawer";
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import Card from 'material-ui/Card';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from "react-router-dom";

import Article1 from "./articles/article1";
import Article2 from "./articles/article2";
import Article3 from "./articles/article3";
import Article4 from "./articles/article4";
import Article5 from "./articles/article5";
import Article6 from "./articles/article6";
import Article7 from "./articles/article7";
import NavBar from "./articles/navBar";
import Footer from "./articles/footer";
import Menu from "./articles/menu";

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.switchPlayingIndex = this.switchPlayingIndex.bind(this);
    this.switchAutoPlay = this.switchAutoPlay.bind(this);
    this.state = {
      autoPlay: false,
      playingIndex: 1,
      menuGrain: 0.05,
      menuDisplay: false,
      article3Anim: false,
      article3Text: false,
      article4Anim: false,
      article4Text: false,
      article1Arrow: true,
      article2Main: false,
      pieScroll: [],
      faqDisplay: false
    };
  }

  switchAutoPlay() {
    this.setState({
      autoPlay: true
    });
  }

  switchPlayingIndex(index) {
    this.setState({
      playingIndex: index
    });
  }

  browserRedirect(pathName) {
    this.props.props.history.push(pathName);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
    grained('#menu', {grainOpacity: this.state.menuGrain})
  }

  handleScroll(event) {
    const scroll = $(window).scrollTop();

    if (scroll > 200) {
      this.setState({
        article1Arrow: false,
        article2Main: true
      });
    }

    if (scroll > 500) {
      this.setState({
        article3Anim: true,
        article3Text: true
      });
    }

    if (scroll > 1100) {
      this.setState({
        article4Anim: true,
        article4Text: true
      });
    }
    this.setState({pieScroll: scroll})
  }

  handleMenu() {
    this.setState({
      menuDisplay: !this.state.menuDisplay
    })
  }

  handleFaq() {
    console.log("here")
    this.setState({faqDisplay: !this.state.faqDisplay})
  }

  render() {
    const Details1 = () => <div> Hello World </div>;
    return (
      <div className="row">
        <div className="col s1 side-right">
          <Menu menuDisplay= {this.state.menuDisplay}
                handleMenu= {() => {this.handleMenu()}}
                handleFaq = {() => {this.handleFaq()}}/>
        </div>
        <Card className="col s10" style={{ zIndex: 100001 }}>
          <NavBar />
          <Article1 article1Arrow={this.state.article1Arrow} />
          <LazyLoad once>
            <Article2 article2Main={this.state.article2Main}/>
          </LazyLoad>
          <LazyLoad once>
            <Article3 article3Anim={this.state.article3Anim}
                      article3Text={this.state.article3Text}
                      pieScroll = {this.state.pieScroll}/>
          </LazyLoad>
          <LazyLoad once>
            <Article4 article4Anim={this.state.article4Anim}
                      article4Text={this.state.article4Text}
                      pieScroll = {this.state.pieScroll}/>
          </LazyLoad>
        </Card>
        <div className="col s1 side-right">
        
        </div>
        <div
          className="space-between col s10 push-s1"
          onClick={() => {
            this.props.props.history.push("/details1");
          }}
        >
          <div className="space-between-line" />
          <div className="playing-dot" />
        </div>
        <main className="col s10 push-s1">
          <Article5 />
          <Article6 />
          <Article7 />
        </main>
        <Footer />
        <Drawer
          width={350}
          docked={true}
          openSecondary={false}
          zDepth={15}
          open={this.state.faqDisplay}
          containerStyle={{
            zIndex: "100000000",
            backgroundColor: "white",

          }}
          style={{
            zIndex: "100000000"
          }}
        >
        <List>
            <div onClick={()=>{this.handleFaq()}}>Cancel</div>
            <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
            <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
            <ListItem
              primaryText="Inbox"
              leftIcon={<ContentInbox />}
              initiallyOpen={true}
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem
                  key={1}
                  primaryText="Starred"
                  leftIcon={<ActionGrade />}
                />,
                <ListItem
                  key={2}
                  primaryText="Sent Mail"
                  leftIcon={<ContentSend />}
                  disabled={true}
                  nestedItems={[
                    <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                  ]}
                />,
                <ListItem
                  key={3}
                  primaryText="Inbox"
                  leftIcon={<ContentInbox />}
                  open={this.state.open}
                  onNestedListToggle={this.handleNestedListToggle}
                  nestedItems={[
                    <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                  ]}
                />,
              ]}
            />
          </List>
        </Drawer>
      </div>
    );
  }
}
