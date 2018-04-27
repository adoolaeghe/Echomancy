import React from "react";
import animation from "../../../../../public/content/animation/data.json";
import Player from "../player/player";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import ContentRemove from "material-ui/svg-icons/content/remove";
import Slider from "material-ui/Slider";
import FlatButton from "material-ui/FlatButton";
import Drawer from "material-ui/Drawer";
import ReactBodymovin from "react-bodymovin";
import Graph from "../graph/graph6";
import {Line} from 'react-chartjs-2';

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
      cardShadow: 1,
      data: {
        labels: this.handleLabel(),
        datasets: [
          {
            label: "Data3",
            data: this.handlePlotLine(),
            borderColor: "red",
            pointRadius: 0,
            color: "rgba(255,255,255,0)"
          },
          {
            label: "Data1",
            data: this.handleRymeData1(),
            borderColor: "red",
            fill: false
          },
          {
            label: "Data2",
            data: this.handleRymeData(),
            borderColor: "#FEBE65",
            fill: false
          },
       ]
      }
    };
  }


  handleLabel() {
    let to_return = [];
    for(var x = 0; x<67; x++) {
      to_return.push(x)
    }
    return to_return;
  }

  handleRymeData() {
    let to_return = [];
    let price = 1;
    let totNbShare = 1;
    let totPrice = 1;
    let avgPrice = 1;
    for(var x = 0; x<67; x++) {
      to_return.push(avgPrice)
      avgPrice = totPrice/totNbShare;
      totNbShare++
      price = avgPrice + 1;
      if (x === 14 || x === 19 || x === 40 || x === 60) {
        totPrice = totPrice - price;
      } else {
        totPrice = totPrice + price;
      }
    }
    return to_return;
  }

  handlePlotLine() {
    let to_return = [];
    for(var x = 0; x<67; x++) {
      to_return.push(2)
    }
    return to_return;
  }

  handleRymeData1() {
    let to_return = [];
    let price = 1;
    let totNbShare = 1;
    let totPrice = 1;
    let avgPrice = 1;
    for(var x = 0; x<67; x++) {
      to_return.push(price)
      avgPrice = totPrice/totNbShare;
      totNbShare++
      price = avgPrice + 1;
      if (x === 14 || x === 19 || x === 40 || x === 60) {
        totPrice = totPrice - price;
      } else {
        totPrice = totPrice + price;
      }
    }
    return to_return;
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
    const option =
    {
        legend: {
          display: false
        },

        scales:
        {
            xAxes: [{
              display: false
            }],
            yAxes: [{
              ticks: {
                  display: false
              }
            }]
        }
    }
    this.handleRymeData()
    return (
      <Drawer
        width={(document.documentElement.clientWidth)*0.439}
        docked={false}
        openSecondary={false}
        zDepth={1}
        open={!this.props.display}
        containerStyle={{
          zIndex: "1401",
          backgroundColor: "white",
        }}
        style={{zIndex: "1401"}}
        overlayStyle={{opacity: "0.2"}}
      >

      <CardText expandable={true}>
        <div className="demo-main col s12">
          <div className="demo-main-visual row col s12"
               style={{ position: "relative", height: "340px"}}>
            <div className="demo-chart-title">hello</div>
            <Line data={this.state.data} ref='chart' options={option}
                width="600" height="320"/>
          </div>

          <div className="demo-main-info1 col s12"
               style={{ zIndex: "1" }}>

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
              "url(./public/content/images/main/hash-background.svg)"  }}>

            <div className="col s4 info-content row">
              <div className="col s12 info-label info-left">
                1
              </div>
            </div>

            <div className="col s4 info-content row">
              <div className="col s12 info-label info-center">2</div>
            </div>

            <div className="col s4 info-content row">
              <div className="col s12 info-label info-right">3</div>
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
              sliderStyle={{
                marginTop: "18px"
              }}
              defaultValue = {40}
              step={max / 100}
              onChange={this.handleSlider}
            />
          </div>

          <div className="demo-main-info1 col s12"
               style={{ zIndex: "1" }}>
            <div className="col s4 info-content row">
              <div className="col s12 info-label">Share Sold</div>
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
              "url(./public/content/images/main/hash-background.svg)"  }}>

            <div className="col s4 info-content row">
              <div className="col s12 info-label info-left">
                0
              </div>
            </div>

            <div className="col s4 info-content row">
              <div className="col s12 info-label info-center">
                {initialSharePrice}
              </div>
            </div>

            <div className="col s4 info-content row">
              <div className="col s12 info-label info-right">
                {initialSharePrice}
              </div>
            </div>
          </div>
        </div>
      </CardText>
    </Drawer>
    );
  }
}
