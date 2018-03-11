import React from "react";
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Player from "../player/player"
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';

export default class Article5 extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      finished: false,
      stepIndex: 0,
      selectedShadow: 0,
      loading: false,
      finished: false,
      stepIndex: 0,
    };
  }

  dummyAsync = (cb) => {
    this.setState({loading: true}, () => {
      this.asyncTimer = setTimeout(cb, 500);
    });
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 2,
      }));
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex - 1,
      }));
    }
  };


  renderStepActions(step) {
    const {stepIndex} = this.state;
    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 3 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={()=>{this.handleNext()}}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={()=>{this.handlePrev()}}
          />
        )}
      </div>
    );
  }

  renderContent() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px', overflow: 'hidden'};

    if (finished) {
      return (
        <div style={contentStyle}>
          <p>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              Click here
            </a> to reset the example.
          </p>
        </div>
      );
    }

    return (
      <div style={contentStyle}>
        <div>{this.getStepContent(stepIndex)}</div>
        <div style={{marginTop: 24, marginBottom: 12}}>
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            onClick={this.handlePrev}
            style={{marginRight: 12}}
          />
          <RaisedButton
            label={stepIndex === 2 ? 'Finish' : 'Next'}
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
          return 'You\'re a long way from home sonny jim!';
      }
    }

  render() {
    const {finished, loading, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};
    return(
      <section className="article5 row">

        <div className="top-info col s12"
             style={{backgroundImage: 'url(./public/content/images/main/hash-background.svg)'}}>
          <div className="top-info-content">
            How does this work ?
          </div>
        </div>

        <div className="article5-main col s12 row">

          <div className="main-images col s12 row">
            <div className="main-image col s3 image-1">
              <Player rotation={"rotating"} size={"small"} key={1} id={1} slices = {[1, 1, 1]}/>
            </div>
            <div className="main-image col s3 image-2">
              <Player rotation={"static"} size={"small"} key={2} id={2} slices = {[1, 1, 1, 1, 1, 1]}/>
            </div>
            <div className="main-image col s3 image-3">
              <Player rotation={"static"} size={"small"} key={3} id={3} slices = {[1, 1, 1, 1, 1, 1, 1, 1, 1]}/>
            </div>
            <div className="main-image col s3 image-4">
              <Player rotation={"static"} size={"small"} key={4} id={4} slices = {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}/>
            </div>
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

        <div className="bottom-info large col s12"
             style={{backgroundImage: 'url(./public/content/images/main/hash-background.svg)'}}>
          <div className="top-info-content">
            Retreive your share at the end of the publication
          </div>
        </div>

        <div className="dot-left" id="21"></div>
        <div className="dot-right" id="22"></div>
      </section>
    )
  }
}
