import React from "react";
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Player from "../player/player"

import Paper from 'material-ui/Paper';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

export default class Article5 extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      finished: false,
      stepIndex: 0,
      selectedShadow: 0
    };
  }

  handleNext() {
    const {stepIndex, selectedShadow, finished} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      selectedShadow: selectedShadow + 1,
      finished: finished >= 2,
    });
  };

  handlePrev() {
    const {stepIndex, selectedShadow} = this.state;
    if (stepIndex > 0) {
      this.setState({
        stepIndex: stepIndex - 1,
        selectedShadow: selectedShadow - 1,
      });
    }
  }

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

  renderStepInformations() {
    const {stepIndex} = this.state;
    if(stepIndex === 0) {
      return (
        <p> This is the step 1 information</p>
      )
    } else if(stepIndex === 1) {
      return (
        <p> This is the step 2 information</p>
      )
    } else if(stepIndex === 2) {
      return (
        <p> This is the step 3 information</p>
      )
    } else {
      return (
        <p> This is the step 4 information</p>
      )
    }
  }

  render() {
    const {finished, stepIndex} = this.state;
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
          <div className="main-options">
            <div style={contentStyle}>
              <Stepper activeStep={stepIndex} orientation="vertical">
                <Step>
                  <StepLabel>Division</StepLabel>
                  <StepContent>
                    <p>
                      The content is first divided in parts.
                    </p>
                    {this.renderStepActions(0)}
                  </StepContent>
                </Step>
                <Step>
                  <StepLabel>Buy a part</StepLabel>
                  <StepContent>
                    <p>One part reveal new parts.</p>
                    {this.renderStepActions(1)}
                  </StepContent>
                </Step>
                <Step>
                  <StepLabel>Reveal New parts</StepLabel>
                  <StepContent>
                    <p>
                      Try out different ad text to see what brings in the most customers,
                      and learn how to enhance.
                    </p>
                    {this.renderStepActions(2)}
                  </StepContent>
                </Step>
                <Step>
                  <StepLabel>Create an ad</StepLabel>
                  <StepContent>
                    <p>
                      Try out different ad text to see what brings in the most customers,
                      and learn how to enhance.
                    </p>
                    {this.renderStepActions(3)}
                  </StepContent>
                </Step>
              </Stepper>
            </div>
          </div>

          <div className="main-images col s9 push-s2 row">
            <div className="main-image col s3 image-1">
              <Player size={"small"} key={1}/>
            </div>
            <div className="main-image col s3 image-2">
              <Player size={"small"} key={2}/>
            </div>
            <div className="main-image col s3 image-3">
              <Player size={"small"} key={3}/>
            </div>
            <div className="main-image col s3 image-4">
              <Player size={"small"} key={4}/>
            </div>
          </div>
          <div className="main-images col s1">
          </div>
        </div>

        <div className="main-step-info">
        {this.renderStepInformations()}
        </div>

        <div className="bottom-info large col s12"
             style={{backgroundImage: 'url(./public/content/images/main/hash-background.svg)'}}>
          <div className="top-info-content">
            Content is first published with limited number of shares.
          </div>
        </div>

        <div className="dot-left" id="21"></div>
        <div className="dot-right" id="22"></div>
      </section>
    )
  }
}
