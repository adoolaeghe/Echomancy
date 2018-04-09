import React from "react";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
import Player from "../player/player";
import ExpandTransition from "material-ui/internal/ExpandTransition";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import Paper from "material-ui/Paper";
import ReactBodymovin from "react-bodymovin";
import animation from "../../../../../public/content/animation/data.json";
import { Step, Stepper, StepLabel } from "material-ui/Stepper";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import Toggle from "material-ui/Toggle";
import returnArtcicle5Pie from "../graph/article5Pie";
import Article5PieContent from "../graph/article5PieContent";

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
      cardShadow: 1
    };
  }

  handleExpandChange = expanded => {
    this.setState({ expanded: expanded });
  };

  handleToggle = (event, toggle) => {
    this.setState({ expanded: toggle });
  };

  handleExpand = () => {
    this.setState({ expanded: true });
  };

  handleReduce = () => {
    this.setState({ expanded: false });
  };

  dummyAsync = cb => {
    this.setState({ loading: true }, () => {
      this.asyncTimer = setTimeout(cb, 500);
    });
  };

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

  render() {
    const { finished, loading, stepIndex } = this.state;
    const contentStyle = { margin: "0 16px" };
    const bodymovinOptions = {
      loop: false,
      autoplay: false,
      prerender: true,
      animationData: animation
    };
    const bodymovinOptions1 = {
      loop: false,
      autoplay: true,
      prerender: true,
      animationData: animation
    };
    return (
      <section
        className="article5 row"
        id="article5"
        style={{
          marginBottom: "100px"
        }}
      >
        <Card
          expanded={this.state.expanded}
          onExpandChange={this.handleExpandChange}
          onMouseOver = {() => this.setState({ cardShadow: 2 })}
          onMouseOut = {() => this.setState({ cardShadow: 1 })}
          zDepth={this.state.cardShadow}
          containerStyle={{
            backgroundImage:
              "url(./public/content/images/main/hash-background.svg)"
          }}
        >
          <div
            className="card-header row"
            href="#!"
            style={{
              backgroundColor: "white",
              fontSize: "88px",
              fontWeight: "bolder"
            }}
          >
            <div
              className="col s5"
              id="article5left"
              style={{
                height: "250px",
                backgroundImage:
                  "url(./public/content/images/main/hash-background.svg)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <div
                id="container"
                style={{
                  width: "250px",
                  top: "15px",
                  height: "250px",
                  left: "0%",
                  position: "absolute"
                }}
              />
              <ReactBodymovin style={{width: "200Px"}} key={1} options={bodymovinOptions1} />
            </div>
            <div
              id="article5main"
              className="col s5"
              style={{
                textAlign: "right",
                height: "250px",
                position: "relative",
                backgroundColor: "white"
              }}
            >
              <div
                style={{
                  position: "absolute",
                  borderRight: "1px solid #8188E7",
                  paddingRight: "20px",
                  width: "400Px",
                  right: "0px",
                  height: "100%",
                  textAlign: "right"
                }}
              >
                <div
                  style={{
                    left: "77%",
                    position: "absolute",
                    height: "5px",
                    width: "70px",
                    backgroundColor: "#8188E7",
                    marginBottom: "20px"
                  }}
                />
                <div style={{}} />
                <h2>SECTION</h2>
                <p
                  style={{
                    backgroundColor: "white",
                    fontSize: "1.25rem",
                    fontWeight: "lighter"
                  }}
                >
                  Eco is a global currency not controlled by any single
                  individual, organization, or nation. Our mission is to
                  distribute the majority of
                </p>
              </div>
            </div>
            <div
              className="col s2"
              style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                alignItems: "center",
                height: "250px",
                backgroundColor: "white",
                backgroundImage:
                  "url(./public/content/images/main/hash-background-reverse.svg)"
              }}
            >
              <a
                className="chevron-down"
                href="#!"
                style={{
                  height: "25px",
                  width: "25px",
                  backgroundImage:
                    "url(./public/content/images/icons/chevron-down.svg)",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat"
                }}
              />
              <div className="article5-number">
               03.
              </div>
            </div>
          </div>
          <CardText expandable={true}>
            <div className="article5-main col s12 row">
              <div className="main-images col s12 row">
                <div className="main-image col s3 image-1">
                  <Player
                    rotation={"rotating"}
                    size={"small"}
                    key={1}
                    id={1}
                    slices={[1, 1, 1]}
                  />
                </div>
                <div className="main-image col s3 image-2">
                  <Player
                    rotation={"static"}
                    size={"small"}
                    key={2}
                    id={2}
                    slices={[1, 1, 1, 1, 1, 1]}
                  />
                </div>
                <div className="main-image col s3 image-3">
                  <Player
                    rotation={"static"}
                    size={"small"}
                    key={3}
                    id={3}
                    slices={[1, 1, 1, 1, 1, 1, 1, 1, 1]}
                  />
                </div>
                <div className="main-image col s3 image-4">
                  <Player
                    rotation={"static"}
                    size={"small"}
                    key={4}
                    id={4}
                    slices={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
                  />
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
          </CardText>
        </Card>
      </section>
    );
  }
}
