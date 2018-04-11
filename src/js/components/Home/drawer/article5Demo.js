import React from "react";

import Drawer from "material-ui/Drawer";
import Card from "material-ui/Card";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
import Player from "../player/player";
import ExpandTransition from "material-ui/internal/ExpandTransition";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import Paper from "material-ui/Paper";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import animation from "../../../../../public/content/animation/data.json";
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
      headerDisplay: true
    };
  }

  handleNext = () => {
    const { stepIndex } = this.state;
    if (!this.state.loading) {
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
          label={stepIndex === 3 ? "Finish" : "Next"}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={() => {
            this.handleNext();
          }}
          style={{ marginRight: 12 }}
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
        <div style={{ marginTop: 24, marginBottom: 12 }}>
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            onClick={this.handlePrev}
            style={{ marginRight: 12 }}
          />
          <RaisedButton
            label={stepIndex === 2 ? "Finish" : "Next"}
            primary={true}
            onClick={this.handleNext}
          />
        </div>
      </div>
    );
  }


    getStepContent(stepIndex) {
      switch (stepIndex) {
        case 0:
          return (
            <div>
              <p>Description: The content is revealed in layers</p>
              <p>Song Length</p>
              <p>Price</p>
            </div>
          );
        case 1:
          return (
            <div>
              <p>Description</p>
              <p>Song Length</p>
              <p>Price</p>
            </div>
          );
        case 2:
          return (
            <div>
              <p>Description</p>
              <p>Song Length</p>
              <p>Price</p>
            </div>
          );
        case 3:
          return (
            <div>
              <p>Song Length</p>
              <p>Song Length</p>
              <p>Price</p>
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
        width={600}
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
            <div className="article5-demo col s12 row">
              <div className="article5-demo-player">
                <Player
                  rotation={"rotating"}
                  size={"large"}
                  key={0}
                  id={0}
                  slices={[1, 1, 1, 1, 1, 1]}
                  slices1={[1]}
                />
              </div>
              <div className="main-options col s12 row">
                <Stepper activeStep={stepIndex}>
                  <Step>
                    <StepLabel>Layer Nb 1</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel>Layer Nb 2</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel>Layer Nb 3</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel>Layer Nb 4</StepLabel>
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
