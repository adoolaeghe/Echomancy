import React from "react";
import Player from "../player/player";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import ContentRemove from "material-ui/svg-icons/content/remove";
import Slider from "material-ui/Slider";
import FlatButton from "material-ui/FlatButton";
import Graph from "../graph/homeGraph";
import Drawer from "material-ui/Drawer";
import ReactBodymovin from "react-bodymovin";
import animation from "../../../../../public/content/animation/data.json";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";

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

export default class Article6Demo extends React.Component {
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
      expanded: false,
      cardShadow: 1
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
        <div className="demo-info2-content-element" key={key} />
      );
      key++;
    }
    return to_return;
  }

  render() {
    let initialNbOfShare = this.state.initialNbOfShare
    let shareIncrementor = this.state.shareIncrementor;
    let priceIncrementor = this.state.priceIncrementor;
    let initialSharePrice = this.state.initialSharePrice;
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
      <CardText expandable={true}>
        <div className="demo-main col s12">
        <div
        className="demo-main-label col s12"
        >
        <span>Artist Payout: </span>

        </div>
          <div
            className="demo-main-visual row col s12"
            style={{ position: "relative",backgroundImage:
              "url(./public/content/images/main/hash-background.svg)"  }}
          >
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
            className="demo-main-info1 col s12"
            style={{ zIndex: "1" }}
          >
            <div className="col s4 info-content row">
              <div className="col s12 info-label">Total Amount</div>
            </div>
            <div className="col s4 info-content row">
              <div className="col s12 info-label">Current Share Price</div>
            </div>
            <div className="col s4 info-content row">
              <div className="col s12 info-label">Current Share Price</div>
            </div>
          </div>
          <div className="demo-main-info3 col s12"
            style={{ backgroundImage:
              "url(./public/content/images/main/hash-background.svg)"  }}
          >
            <div className="col s4 info-content row">
              <div className="col s12 info-label">1</div>
            </div>
            <div className="col s4 info-content row">
              <div className="col s12 info-label">2</div>
            </div>
            <div className="col s4 info-content row">
              <div className="col s12 info-label">3</div>
            </div>
          </div>
          <div className="demo-main-info2 col s12">
            <div className="demo-info2-content cols12">
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
          <div className="demo-main-info3 col s12"
            style={{ backgroundImage:
              "url(./public/content/images/main/hash-background.svg)"  }}
          >
            <div className="col s4 info-content row">
              <div className="col s12 info-label">1</div>
            </div>
            <div className="col s4 info-content row">
              <div className="col s12 info-label">2</div>
            </div>
            <div className="col s4 info-content row">
              <div className="col s12 info-label">3</div>
            </div>
          </div>
          <div className="demo-main-info5 col s12 row">
            <div className="col s3 options row">
              <div className="col s12 options-button">
                <div className="col s6 options-button">
                  <FloatingActionButton
                    mini={true}
                    backgroundColor="#eae4e1"
                    iconStyle={{width: "30px", height: "30px"}}
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
                    iconStyle={{width: "30px", height: "30px"}}
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
              <div className="col s12 options-button">
                <div className="col s6 options-button">
                  <FloatingActionButton
                    mini={true}
                    backgroundColor="#eae4e1"
                    iconStyle={{width: "30px", height: "30px"}}
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
                    iconStyle={{width: "30px", height: "30px"}}
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
            <div className="col s3 options">
              <div className="col s12 options-button">
                <div className="col s6 options-button">
                  <FloatingActionButton
                    mini={true}
                    backgroundColor="#eae4e1"
                    iconStyle={{width: "30px", height: "30px"}}
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
                    iconStyle={{width: "30px", height: "30px"}}
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
      </Drawer>
    );
  }
}
