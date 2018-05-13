import React from "react";

import Slider from "material-ui/Slider";
import Drawer from "material-ui/Drawer";
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

  dummyAsync = cb => {
    this.setState({ loading: true }, () => {
      this.asyncTimer = setTimeout(cb, 500);
    });
  };

  constructor(props) {
    super(props);

    let rymeData = this.handleRymeData;
    this.state = {
      slider: 4,
      expanded: false,
      cardShadow: 1,
      rymePrice: [],
      rymeAvgPrice: [],
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
            label: "Ryme Price",
            data: rymeData.rymeAvgPrice,
            borderColor: "red",
            fill: false
          },
          {
            label: "Ryme Average Price",
            data: rymeData.rymePrice,
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

  handlePlotLine() {
    let to_return = [];
    for(var x = 0; x<67; x++) {
      to_return.push(2)
    }
    return to_return;
  }

  handleRymeData() {
    let RymePrice = [];
    let RymeAvgPrice = [];
    let price, totNbShare, totPrice, avgPrice = 1;

    for(var rym = 0; rym < 67; rym++) {
      RymeAvgPrice.push(avgPrice);
      RymePrice.push(price);

      avgPrice = totPrice/totNbShare;
      totNbShare++
      price = avgPrice + 1;

      // SELLS A GIVEN TIME THE ONE A MORE SHARE
      if (rym === 14 || rym === 19 || rym === 40 || rym === 60) {
        totPrice = totPrice - price;
      } else {
        totPrice = totPrice + price;
      }
    }

    return {
      rymePrice: RymePrice,
      rymeAvgPrice: RymeAvgPrice
    }
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
    let initialNbOfShare = 1;
    let shareIncrementor = "1";
    let priceIncrementor = "1";
    let initialSharePrice = "1";
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
        <article className="demo-main col s12">

          <section className="demo-main-visual row col s12"
               style={{ position: "relative", height: "340px"}}>
            <p className="demo-chart-title">hello</p>

            <Line data={this.state.data} ref='chart' options={option}
                  width={600} height={320} />
          </section>

          <section className="demo-main-info1 col s12">
            <div className="col s4 info-content row">
              <p className="col s12 info-label">Total Amount</p>
            </div>
            <div className="col s4 info-content row">
              <p className="col s12 info-label">Current Share Price</p>
            </div>
            <div className="col s4 info-content row">
              <p className="col s12 info-label">Current Share Price</p>
            </div>
          </section>

          <section className="demo-main-info3 col s12"
                   style={{ backgroundImage:"url(./public/content/images/main/hash-background.svg)"}}>
            <div className="col s4 info-content row">
              <p className="col s12 info-label info-left">1</p>
            </div>

            <div className="col s4 info-content row">
              <div className="col s12 info-label info-center">2</div>
            </div>

            <div className="col s4 info-content row">
              <div className="col s12 info-label info-right">3</div>
            </div>
          </section>

          <section className="demo-main-info2 col s12">
            <div className="demo-info2-content cols12">
              {this.handleSongPartRender()}
            </div>
            <Slider
              min={initialNbOfShare}
              max={10}
              sliderStyle={{
                marginTop: "18px"
              }}
              defaultValue = {4}
              step={max / 100}
              onChange={this.handleSlider}
            />
          </section>

          <section className="demo-main-info1 col s12"
               style={{ zIndex: "1" }}>
            <div className="col s4 info-content row">
              <p className="col s12 info-label">Share Sold</p>
            </div>

            <div className="col s4 info-content row">
              <p className="col s12 info-label">Current Share Price</p>
            </div>

            <div className="col s4 info-content row">
              <p className="col s12 info-label">Current Share Price</p>
            </div>
          </section>

          <section className="demo-main-info3 col s12"
            style={{ backgroundImage:
              "url(./public/content/images/main/hash-background.svg)"  }}>

            <div className="col s4 info-content row">
              <p className="col s12 info-label info-left">0</p>
            </div>

            <div className="col s4 info-content row">
              <p className="col s12 info-label info-center">
                {initialSharePrice}
              </p>
            </div>

            <div className="col s4 info-content row">
              <p className="col s12 info-label info-right">
                {initialSharePrice}
              </p>
            </div>
          </section>
        </article>
      </CardText>
    </Drawer>
    );
  }
}
