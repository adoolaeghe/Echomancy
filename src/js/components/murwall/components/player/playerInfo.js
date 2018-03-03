import React from "react";

export default class PlayerBuy extends React.Component{
  componentDidMount() {
    Highcharts.chart('container', {
        chart: {
            type: 'variablepie'
        },
        title: {
            text: ''
        },
        plotOptions: {
            series: {
                animation: false
            }
        },
        series: [{
            minPointSize: 10,
            innerSize: '20%',
            zMin: 0,
            labels: {
              enabled: false
            },
            data: [{
                y: 1,
                z: 1
            }, {
                y: 2,
                z: 2
            }, {
                y: 3,
                z: 3
            }, {
                y: 4,
                z: 4
            }, {
                y: 5,
                z: 5
            }, {
                y: 6,
                z: 6
            }, {
                y: 7,
                z: 7
            }]
        }]
    });

  }
    render () {
      return (
        <div id="container" style={{width: "300px", position: "absolute"}}></div>
      )
    }
};
