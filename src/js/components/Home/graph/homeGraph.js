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

  handleGraphData(initNbNotes, endNbNotes, initNbNote, noteIncrementor, priceIncrementor, verseNb){
    let to_return = [];
    let layersNb = 5;
    let note = initNbNotes;
    for(var i = 0; i < endNbNotes; i++) {
      for(var j = 0; j < layersNb; j++) {
        to_return.push(note)
      }
      note = note * 2
      layersNb = layersNb * 2
    }
    return to_return;
  }

  componentDidUpdate() {
    console.log("here")
    Highcharts.chart('container', {
      chart: {
        type: 'areaspline'
      },
      title: {
          text: ''
      },
      subtitle: {
          text: ''
      },
      xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
          title: {
              text: ''
          }
      },
      plotOptions: {
        series: {
          color: '#FF0000',
          animation: false
        },
        line: {
            enableMouseTracking: false,
            animation: false
        }
      },
      series: [{
          data: this.handleGraphData(3,this.props.totalNbShares,4,4,4,2)
      }]
    })
  }

  render() {
    console.log(this.state.totalNbShares)
    return (
      <div id="container" style={{width: "100%"}}>
      </div>
    );
  }
}
