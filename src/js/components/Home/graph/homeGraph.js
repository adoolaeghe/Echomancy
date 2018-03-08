import React from "react";

export default class HomeGraph extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      totalNbShares: this.props.totalNbShares
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps != this.props) {
      this.setState({
        totalNbShares: nextProps.totalNbShares
      })
    }
  }

  handleGraphData(layerNb, shareIncrementor, priceIncrementor){
    let to_return = [];
    let nbOfShare = 4;
    let price = 1;
    for(var i = 0; i < layerNb; i++) {
      for(var j = 0; j < nbOfShare; j++) {
        to_return.push(price)
      }
      price = price * priceIncrementor
      nbOfShare = nbOfShare * shareIncrementor
    }
    return to_return;
  }

  handleGraphData1(layerNb, shareIncrementor, priceIncrementor){
    let to_return = [];
    let nbOfShare = 4;
    let price = 1;
    let avg = 0;
    let totNote = 4;
    let totVal = 4 * price;
    for(var i = 0; i < layerNb; i++) {
      for(var j = 0; j < nbOfShare; j++) {
        totNote++
        totVal = totVal + price;
        avg = totVal/totNote
        to_return.push(avg)
      }
      price = price * priceIncrementor
      nbOfShare = nbOfShare * shareIncrementor
    }
    return to_return;
  }

  componentDidMount() {
    Highcharts.chart('container', {
      chart: {
        type: 'areaspline',
        backgroundColor: "transparent",
        spacingRight: 0,
        spacingLeft: 0,
      },
      title: {
          text: ''
      },
      subtitle: {
          text: ''
      },
      plotOptions: {
        series: {
          animation: false,
        }
      },
      series: [{
          data: this.handleGraphData(this.props.initialNbOfShare,this.props.totalNbShares,this.props.priceIncrementor)
      },{
        data: this.handleGraphData1(this.props.initialNbOfShare,this.props.totalNbShares,this.props.priceIncrementor)
      }
      ]
    })
    var i = 0, j = 0;
    var chart = $('#container').highcharts();
    chart.series[0].data[this.props.slideVal].select(true, true);
    chart.series[1].data[this.props.slideVal].select(true, true);
  }

  componentDidUpdate() {
    Highcharts.chart('container', {
      chart: {
        type: 'areaspline',
        backgroundColor: "transparent",
        spacingRight: 0,
        spacingLeft: 0,
      },
      title: {
          text: ''
      },
      subtitle: {
          text: ''
      },
      plotOptions: {
        series: {
          animation: false,
        }
      },
      series: [{
          data: this.handleGraphData(this.props.initialNbOfShare,this.props.totalNbShares,this.props.priceIncrementor)
      },{
        data: this.handleGraphData1(this.props.initialNbOfShare,this.props.totalNbShares,this.props.priceIncrementor)
      }
      ]
    })
    var i = 0, j = 0;
    var chart = $('#container').highcharts();
    chart.series[0].data[this.props.slideVal].select(true, true);
    chart.series[1].data[this.props.slideVal].select(true, true);
  }

  render() {
    return (
      <div id="container" style={{width: "100%"}}>
      </div>
    );
  }
}
