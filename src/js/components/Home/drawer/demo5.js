import React from "react";

import Drawer from "material-ui/Drawer";
import Card from "material-ui/Card";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
import Player from "../player/player1";
import ExpandTransition from "material-ui/internal/ExpandTransition";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import Paper from "material-ui/Paper";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import WarningIcon from 'material-ui/svg-icons/alert/warning';
import Avatar from 'material-ui/Avatar';

import { Step, Stepper, StepLabel } from "material-ui/Stepper";
import {
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import Toggle from "material-ui/Toggle";

import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';

import {List, ListItem} from 'material-ui/List';

export default class article5DemO extends React.Component {
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
      playerData: [
          {
              "name": "rym1",
              "y": 1,
              "color": "#FE3C4A",
              "drilldown": "Chrome"
          },
          {
              "name": "rym2",
              "y": 1,
              "selected": true,
              "color": "#FE3C4A",
              "drilldown": "Chrome"
          }
      ]
    };
  }

  handleNext = () => {
    const { stepIndex } = this.state;
    if (!this.state.loading) {
      let playerData = this.state.playerData;
      playerData.push({
          "name": "rym2",
          "y": 1,
          "color": "#FE3C4A",
          "drilldown": "Chrome"
      });

      this.setState({
        playerData: playerData
      });

      this.dummyAsync(() =>
        this.setState({
          loading: false,
          stepIndex: stepIndex + 1,
          finished: stepIndex >= 2
        })
      );
    }
  };

  handlePrev = () => {
    const { stepIndex } = this.state;

    let playerData = this.state.playerData;
    playerData.pop();

    this.setState({
      playerData: playerData
    });

    if (!this.state.loading) {
      this.dummyAsync(() =>
        this.setState({
          loading: false,
          stepIndex: stepIndex - 1
        })
      );
    }
  };

  renderStepActions(step) {
    const { stepIndex } = this.state;
    return (
      <div style={{ margin: "12px 0" }}>
        <RaisedButton
          backgroundColor= "#6884FB"
          label={stepIndex === 3 ? "Finish" : "Next"}
          disableTouchRipple={true}
          disableFocusRipple={true}
          onClick={() => {
            this.handleNext();
          }}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={() => {
              this.handlePrev();
            }}
          />
        )}
      </div>
    );
  }

  renderContent() {
    const { finished, stepIndex } = this.state;
    const contentStyle = { margin: "0 16px", overflow: "hidden" };

    if (finished) {
      return (
        <div style={contentStyle}>
          <p>
            <a
              href="#"
              onClick={event => {
                event.preventDefault();
                this.setState({ stepIndex: 0, finished: false });
              }}
            >
              Click here
            </a>{" "}
            to reset the example.
          </p>
        </div>
      );
    }
    return (
      <div style={contentStyle}>
        <div>{this.getStepContent(stepIndex)}</div>
        <div className='demo-btn' style={{ marginTop: 24, marginBottom: 12 }}>
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            onClick={this.handlePrev}
            style={{ marginRight: 12 }}
          />
          <RaisedButton
            backgroundColor= {stepIndex === 2 ? "#6884FB" : "#0F3FD5"}
            labelColor="white"
            label={stepIndex === 2 ? "Finish" : "Next"}
            onClick={this.handleNext}
          />
        </div>
      </div>
    );
  }

  handleAvatar(stepIndex) {
    switch(stepIndex) {
      case 0:
        return (
          <Avatar style={{width: "30px", height: "30px", border: "3px solid white", position: "absolute", top: "47%", left: "0"}}
                  className='rotating-reverse' src="./public/content/images/main/avatar.jpg"/>
        )
      case 1:
        return(
          <div>
            <Avatar style={{width: "30px", height: "30px", border: "3px solid white", position: "absolute", top: "26%", left: "5%"}}
                    className='rotating-reverse' src="./public/content/images/main/avatar.jpg"/>
            <Avatar style={{width: "30px", height: "30px", border: "3px solid white", position: "absolute", top: "25%", left: "86%"}}
                    className='rotating-reverse' src="./public/content/images/main/avatar.jpg"/>
          </div>
        )
      case 2:
        return(
          <div>
            <Avatar style={{width: "30px", height: "30px", border: "3px solid white", position: "absolute", top: "12%", left: "13%"}}
                    className='rotating-reverse' src="./public/content/images/main/avatar.jpg"/>
            <Avatar style={{width: "30px", height: "30px", border: "3px solid white", position: "absolute", top: "12%", right: "13%"}}
                    className='rotating-reverse' src="./public/content/images/main/avatar.jpg"/>
            <Avatar style={{width: "30px", height: "30px", border: "3px solid white", position: "absolute", bottom: "12%", left: "13%"}}
                    className='rotating-reverse' src="./public/content/images/main/avatar.jpg"/>
          </div>
        )
      case 3:
        return(
          <div>
            <Avatar style={{width: "30px", height: "30px", border: "3px solid white", position: "absolute", top: "12%", left: "13%"}}
                    className='rotating-reverse' src="./public/content/images/main/avatar.jpg"/>
            <Avatar style={{width: "30px", height: "30px", border: "3px solid white", position: "absolute", top: "8%", right: "21%"}}
                    className='rotating-reverse' src="./public/content/images/main/avatar.jpg"/>
            <Avatar style={{width: "30px", height: "30px", border: "3px solid white", position: "absolute", bottom: "1%", left: "48%"}}
                    className='rotating-reverse' src="./public/content/images/main/avatar.jpg"/>
          </div>
        )
    }
  }


  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <div className='demo-description'>
            <p>Buy one or more bits of the song</p>
            <img
              className="demo-illustration"
              src={"./public/content/images/articles/5/wave1.svg"}
              alt="Kiwi standing on oval"
            />
          </div>
        );
      case 1:
        return (
          <div className='demo-description'>
            <p>New comers may buy the parts that youve recently revealed</p>
            <img
              className="demo-illustration"
              src={"./public/content/images/articles/5/wave2.svg"}
              alt="Kiwi standing on oval"
            />
          </div>
        );
      case 2:
        return (
          <div className='demo-description'>
            <p>Description</p>
            <img
              className="demo-illustration"
              src={"./public/content/images/articles/5/wave3.svg"}
              alt="Kiwi standing on oval"
            />
          </div>
        );
      case 3:
        return (
          <div className='demo-description'>
            <p>Song Length</p>
            <img
              className="demo-illustration"
              src={"./public/content/images/main/wave-test.png"}
              alt="Kiwi standing on oval"
            />
          </div>
        );
      default:
        return "You're a long way from home sonny jim!";
    }
  }

  dummyAsync = cb => {
    this.setState({ loading: true }, () => {
      this.asyncTimer = setTimeout(cb, 500);
    });
  };

  render() {
    const { finished, loading, stepIndex } = this.state;
    return (
      <Drawer
        width={$(window).width()*0.439}
        docked={false}
        openSecondary={false}
        zDepth={1}
        open={!this.props.display}
        containerStyle={{
          zIndex: "1401",
          backgroundColor: "white",
        }}
        style={{
          zIndex: "1401"
        }}
        overlayStyle={{opacity: "0.2"}}
      >
          <CardText expandable={true} style={{padding: "0px"}}>
            <div className="demo col s12 row">
              <div className="demo-player">
                <Player
                  rotation={"rotating"}
                  size={"large"}
                  key={2}
                  id={2}
                  handleAvatar = {this.handleAvatar(stepIndex)}
                  playerData = {this.state.playerData}
                />
              </div>
              <div className="main-options col s12 row">
                <Stepper className="main-options-steps" activeStep={stepIndex}>
                  <Step>
                    <StepLabel>1</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel>2</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel>3</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel>4</StepLabel>
                  </Step>
                </Stepper>
                <ExpandTransition loading={loading} open={true}>
                  {this.renderContent()}
                </ExpandTransition>
              </div>
            </div>
          </CardText>
      </Drawer>
    );
  }
}
