import React from "react";

export default class HomeGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalNbShares: this.props.totalNbShares
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps != this.props) {
      this.setState({
        totalNbShares: nextProps.totalNbShares
      });
    }
  }

  /// TO BE REFATORED
  handleGraphTotVal(
    layerNb,
    shareIncrementor,
    priceIncrementor,
    nbOfShare,
    price
  ) {
    let to_return = [];
    for (var i = 0; i < layerNb; i++) {
      for (var j = 0; j < nbOfShare; j++) {
        to_return.push(price);
      }
      price = price * priceIncrementor;
      nbOfShare = nbOfShare * shareIncrementor;
    }
    return to_return;
  }

  /// TO BE REFATORED
  handleGraphAvgVal(
    layerNb,
    shareIncrementor,
    priceIncrementor,
    nbOfShare,
    price
  ) {
    let to_return = [];
    let avg = 0;
    let totNote = nbOfShare;
    let totVal = nbOfShare * price;
    for (var i = 0; i < layerNb; i++) {
      for (var j = 0; j < nbOfShare; j++) {
        totNote++;
        totVal = totVal + price;
        avg = totVal / totNote;
        to_return.push(avg);
      };
      price = price * priceIncrementor;
      nbOfShare = nbOfShare * shareIncrementor;
    }
    return to_return;
  }

  handleHighChart() {
    let initialNbOfShare = this.props.initialNbOfShare;
    let totalNbShares = this.props.totalNbShares;
    let priceIncrementor = this.props.priceIncrementor;
    let nbOfShare = this.props.initialNbOfShare;
    let price = this.props.initialSharePrice;

    Highcharts.chart("container", {
      chart: {
        type: "areaspline",
        backgroundColor: "transparent",
        spacingRight: 0,
        spacingLeft: 0
      },
      title: {
        text: ""
      },
      subtitle: {
        text: ""
      },
      plotOptions: {
        series: {
          animation: false
        }
      },
      series: [
        {
          data: this.handleGraphTotVal(
            initialNbOfShare,
            totalNbShares,
            priceIncrementor,
            nbOfShare,
            price
          )
        },
        {
          data: this.handleGraphAvgVal(
            initialNbOfShare,
            totalNbShares,
            priceIncrementor,
            nbOfShare,
            price
          )
        }
      ]
    });
  }

  componentDidMount() {
    this.handleHighChart();
  }

  componentDidUpdate() {
    this.handleHighChart();
    let slideVal = this.props.slideVal;
    var chart = $("#container").highcharts();
    chart.series[0].data[slideVal].select(true, true);
    chart.series[1].data[slideVal].select(true, true);
  }

  render() {
    return <div id="container" style={{ width: "100%" }} />;
  }
}
