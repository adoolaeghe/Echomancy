import React from "react";
import Player from "../player/player";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import ContentRemove from "material-ui/svg-icons/content/remove";
import Slider from "material-ui/Slider";
import FlatButton from "material-ui/FlatButton";
import Graph from "../graph/homeGraph";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
// import Article6Pie from "../graph/article6Pie";

/// SLIDER REFACTORING ///
const min = 0;
const max = 100;
const power = 12;

function transform(value) {
  return value + 1;
}

function reverse(value) {
  return value - 1;
}

export default class Article6 extends React.Component {
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

  constructor(props) {
    super(props);
    this.state = {
      totalNbShares: 4,
      crtSharePrice: 1,
      crtNbOfShare: 4,
      crtShareValue: 1,
      totalValue: 4,
      initialNbOfShare: 4,
      initialSharePrice: 1,
      priceIncrementor: 2,
      shareIncrementor: 2,
      crtSharePrice: 0,
      slider: 4,
      expanded: false
    };
  }

  handleCrtShare(
    layerNb,
    shareIncrementor,
    priceIncrementor,
    nbOfShare,
    price,
    crtShare
  ) {
    let totNote = 4;

    for (var i = 0; i < layerNb; i++) {
      for (var j = 0; j < nbOfShare; j++) {
        totNote++;
        if (totNote === crtShare) {
          this.setState({
            crtNbOfShare: totNote,
            crtSharePrice: price
          });
        }
      }
      price = price * priceIncrementor;
      nbOfShare = nbOfShare * shareIncrementor;
    }
  }

  handleTotPayout(
    layerNb,
    shareIncrementor,
    priceIncrementor,
    NbOfShare,
    price
  ) {
    let to_return = 0;
    let totVal = 4 * price;
    for (var i = 0; i < layerNb; i++) {
      if (i === layerNb - 1) {
        to_return = totVal / 2;
      }
      for (var j = 0; j < NbOfShare; j++) {
        totVal = totVal + price;
      }
      price = price * priceIncrementor;
      NbOfShare = NbOfShare * shareIncrementor;
    }
    return to_return;
  }

  handleTotValue(
    layerNb,
    shareIncrementor,
    priceIncrementor,
    nbOfShare,
    price
  ) {
    let totVal = 4 * price;
    for (var i = 0; i < layerNb; i++) {
      for (var j = 0; j < nbOfShare; j++) {
        totVal = totVal + price;
      }
      price = price * priceIncrementor;
      nbOfShare = nbOfShare * shareIncrementor;
    }
    return totVal;
  }

  handleTotShare(
    layerNb,
    shareIncrementor,
    priceIncrementor,
    nbOfShare,
    price
  ) {
    let totNote = 4;
    for (var i = 0; i < layerNb; i++) {
      for (var j = 0; j < nbOfShare; j++) {
        totNote++;
      }
      nbOfShare = nbOfShare * shareIncrementor;
    }
    return totNote;
  }

  handleSlider = (event, value) => {
    this.setState({ slider: transform(value) });
    this.handleCrtShare(
      this.state.initialNbOfShare,
      this.state.shareIncrementor,
      this.state.priceIncrementor,
      this.state.initialNbOfShare,
      this.state.initialSharePrice,
      value
    );
  };

  handleSongPartRender() {
    let to_return = [];
    let key = 1;
    for (let i = 0; i < this.state.slider; i++) {
      to_return.push(
        <div className="article7-info2-content-element" key={key} />
      );
      key++;
    }
    return to_return;
  }

  componentDidMount() {
    // grained("#article6right", { grainOpacity: 0.07 });
    // returnArtcicle6Pie();
  }

  render() {
    let initialNbOfShare = this.state.initialNbOfShare;
    let shareIncrementor = this.state.shareIncrementor;
    let priceIncrementor = this.state.priceIncrementor;
    let initialSharePrice = this.state.initialSharePrice;

    return (
      <section
        className="article7 row"
        style={{
          backgroundImage:
            "url(./public/content/images/main/hash-background.svg)",
          marginBottom: "100px"
        }}
      >
        <Card
          expanded={this.state.expanded}
          onExpandChange={this.handleExpandChange}
          containerStyle={{
            backgroundImage:
              "url(./public/content/images/main/hash-background.svg)"
          }}
        >
        <a
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
                "url(./public/content/images/main/hash-background.svg)"
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
              className="arrow-down"
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
            <div className="article6-number">
             04.
            </div>
          </div>
        </a>
          <CardText expandable={true}>
            <div
              className="top-info large col s12"
              style={{
                backgroundImage:
                  "url(./public/content/images/main/hash-background.svg)",
                display: "flex",
                position: "relative",
                justifyContent: "space-around",
                flexDirection: "row"
              }}
            />
            <div className="article7-left col s2">
              <div className="article7-left-label drag">
                Drag to see the evolution from the track
              </div>
            </div>
            <div className="article7-main col s10">
              <div
                className="article7-main-visual col s12"
                style={{ position: "relative" }}
              >
                <div
                  className="article7-main-label"
                  style={{ position: "absolute" }}
                >
                  <span>Artist Payout: </span>
                  {this.handleTotPayout(
                    initialNbOfShare,
                    shareIncrementor,
                    priceIncrementor,
                    initialNbOfShare,
                    initialSharePrice
                  )}
                </div>
                <Graph
                  totalNbShares={this.state.shareIncrementor}
                  maxNbShares={this.state.maxNbShares}
                  initialNbOfShare={initialNbOfShare}
                  initialSharePrice={initialSharePrice}
                  priceIncrementor={priceIncrementor}
                  shareIncrementor={shareIncrementor}
                  slideVal={this.state.slider}
                />
              </div>
              <div
                className="article7-main-info1 col s12"
                style={{ zIndex: "1" }}
              >
                <div className="col s6 info-content row">
                  <div className="col s5 info-label">Total Amount</div>
                  <div className="col s3 info-val">
                    {this.handleTotValue(
                      initialNbOfShare,
                      shareIncrementor,
                      priceIncrementor,
                      initialNbOfShare,
                      initialSharePrice
                    )}
                  </div>
                  <div className="col s4" />
                </div>
                <div className="col s6 info-content row">
                  <div className="col s5 info-label">Current Share Price</div>
                  <div className="col s3 info-val">
                    {this.state.crtNbOfShare}
                  </div>
                  <div className="col s4" />
                </div>
              </div>
              <div className="article7-main-info2 col s12">
                <div className="article7-info2-content cols12">
                  {this.handleSongPartRender()}
                </div>
                <Slider
                  min={initialNbOfShare}
                  max={this.handleTotShare(
                    initialNbOfShare,
                    shareIncrementor,
                    priceIncrementor,
                    initialNbOfShare,
                    initialSharePrice
                  )}
                  step={max / 100}
                  onChange={this.handleSlider}
                />
              </div>
              <div className="article7-main-info3 col s12">
                <div className="col s6 info-content row">
                  <div className="col s5 info-label">Total Amount</div>
                  <div className="col s3 info-val">
                    {this.handleTotShare(
                      initialNbOfShare,
                      shareIncrementor,
                      priceIncrementor,
                      initialNbOfShare,
                      initialSharePrice
                    )}
                  </div>
                  <div className="col s4" />
                </div>
                <div className="col s6 info-content row">
                  <div className="col s5 info-label">Current Risk Price</div>
                  <div className="col s3 info-val">
                    {this.state.crtSharePrice}
                  </div>
                  <div className="col s4" />
                </div>
              </div>
              <div className="article7-main-info5 col s12 row">
                <div className="col s3 options row">
                  <div className="col s12 options-label">Layer number</div>
                  <div className="col s12 options-button">
                    <div className="col s6 options-button">
                      <FloatingActionButton
                        mini={true}
                        backgroundColor="#eae4e1"
                        disabled={initialNbOfShare < 1 ? true : false}
                        onClick={() => {
                          this.setState({
                            initialNbOfShare: initialNbOfShare - 1
                          });
                        }}
                      >
                        <ContentRemove />
                      </FloatingActionButton>
                    </div>
                    <div className="col s6 options-button">
                      <FloatingActionButton
                        mini={true}
                        backgroundColor="#eae4e1"
                        disabled={initialNbOfShare > 9 ? true : false}
                        onClick={() => {
                          this.setState({
                            initialNbOfShare: initialNbOfShare + 1
                          });
                        }}
                      >
                        <ContentAdd />
                      </FloatingActionButton>
                    </div>
                  </div>
                </div>
                <div className="col s1 options-val">{initialNbOfShare}</div>
                <div className="col s3 options">
                  <div className="col s12 options-label">
                    Initial Share Price
                  </div>
                  <div className="col s12 options-button">
                    <div className="col s6 options-button">
                      <FloatingActionButton
                        mini={true}
                        backgroundColor="#eae4e1"
                        disabled={initialSharePrice < 1 ? true : false}
                        onClick={() => {
                          this.setState({
                            initialSharePrice: initialSharePrice - 1
                          });
                        }}
                      >
                        <ContentRemove />
                      </FloatingActionButton>
                    </div>
                    <div className="col s6 options-button">
                      <FloatingActionButton
                        mini={true}
                        backgroundColor="#eae4e1"
                        disabled={initialSharePrice > 4 ? true : false}
                        onClick={() => {
                          this.setState({
                            initialSharePrice: initialSharePrice + 1
                          });
                        }}
                      >
                        <ContentAdd />
                      </FloatingActionButton>
                    </div>
                  </div>
                </div>
                <div className="col s1 options-val">{initialSharePrice}</div>
              </div>
            </div>
          </CardText>
        </Card>
      </section>
    );
  }
}
