import React from "react";

export default class PlayerBuy extends React.Component {
  componentDidMount() {
    Highcharts.chart("container", {
      data: {
        table: "freq",
        startRow: 1,
        endRow: 17,
        endColumn: 7
      },

      chart: {
        polar: true,
        type: "column"
      },

      title: {
        text: ""
      },

      subtitle: {
        text: ""
      },

      pane: {
        size: "85%"
      },

      legend: {
        enable: false
      },

      yAxis: {
        min: 0,
        endOnTick: false,
        innerSize: "20%",
        showLastLabel: true,

        labels: {
          formatter: function() {
            return this.value + "%";
          }
        },
        reversedStacks: false
      },

      tooltip: {
        valueSuffix: "%"
      },

      plotOptions: {
        series: {
          stacking: "normal",
          shadow: false,
          groupPadding: 0,
          pointPlacement: "on"
        }
      }
    });
  }
  render() {
    return (
      <div>
        <div
          id="container"
          style={{
            width: "300px",
            top: "10%",
            left: "5%",
            position: "absolute"
          }}
        />
        <div style={{ display: "none" }}>
          <table id="freq" cellSpacing="0" cellPadding="0">
            <tr nowrap="true" bgcolor="#CCCCFF">
              <td className="dir">NW</td>
              <td className="data">1</td>
              <td className="data">2</td>
              <td className="data">3</td>
              <td className="data">4</td>
              <td className="data">4</td>
              <td className="data">6</td>
              <td className="data">7</td>
              <td className="data">8</td>
            </tr>
            <tr nowrap="true">
              <td className="dir">NW</td>
              <td className="data">1</td>
              <td className="data">2</td>
              <td className="data">3</td>
              <td className="data">4</td>
              <td className="data">4</td>
              <td className="data">6</td>
              <td className="data">7</td>
              <td className="data">8</td>
            </tr>
            <tr nowrap="true" bgcolor="#DDDDDD">
              <td className="dir">NW</td>
              <td className="data">1</td>
              <td className="data">2</td>
              <td className="data">3</td>
              <td className="data">4</td>
              <td className="data">4</td>
              <td className="data">6</td>
              <td className="data">7</td>
              <td className="data">8</td>
            </tr>
            <tr nowrap="true" bgcolor="#DDDDDD">
              <td className="dir">NW</td>
              <td className="data">1</td>
              <td className="data">2</td>
              <td className="data">3</td>
              <td className="data">4</td>
              <td className="data">4</td>
              <td className="data">6</td>
              <td className="data">7</td>
              <td className="data">8</td>
            </tr>
            <tr nowrap="true" bgcolor="#DDDDDD">
              <td className="dir">NW</td>
              <td className="data">1</td>
              <td className="data">2</td>
              <td className="data">3</td>
              <td className="data">4</td>
              <td className="data">4</td>
              <td className="data">6</td>
              <td className="data">7</td>
              <td className="data">8</td>
            </tr>
            <tr nowrap="true" bgcolor="#DDDDDD">
              <td className="dir">NW</td>
              <td className="data">1</td>
              <td className="data">2</td>
              <td className="data">3</td>
              <td className="data">4</td>
              <td className="data">4</td>
              <td className="data">6</td>
              <td className="data">7</td>
              <td className="data">8</td>
            </tr>
            <tr nowrap="true" bgcolor="#DDDDDD">
              <td className="dir">NW</td>
              <td className="data">1</td>
              <td className="data">2</td>
              <td className="data">3</td>
              <td className="data">4</td>
              <td className="data">4</td>
              <td className="data">6</td>
              <td className="data">7</td>
              <td className="data">8</td>
            </tr>
            <tr nowrap="true" bgcolor="#DDDDDD">
              <td className="dir">NW</td>
              <td className="data">1</td>
              <td className="data">2</td>
              <td className="data">3</td>
              <td className="data">4</td>
              <td className="data">4</td>
              <td className="data">6</td>
              <td className="data">7</td>
              <td className="data">8</td>
            </tr>
            <tr nowrap="true" bgcolor="#DDDDDD">
              <td className="dir">NW</td>
              <td className="data">1</td>
              <td className="data">2</td>
              <td className="data">3</td>
              <td className="data">4</td>
              <td className="data">4</td>
              <td className="data">6</td>
              <td className="data">7</td>
              <td className="data">8</td>
            </tr>
            <tr nowrap="true" bgcolor="#DDDDDD">
              <td className="dir">NW</td>
              <td className="data">1</td>
              <td className="data">2</td>
              <td className="data">3</td>
              <td className="data">4</td>
              <td className="data">4</td>
              <td className="data">6</td>
              <td className="data">7</td>
              <td className="data">8</td>
            </tr>
            <tr nowrap="true" bgcolor="#DDDDDD">
              <td className="dir">NW</td>
              <td className="data">1</td>
              <td className="data">2</td>
              <td className="data">3</td>
              <td className="data">4</td>
              <td className="data">4</td>
              <td className="data">6</td>
              <td className="data">7</td>
              <td className="data">8</td>
            </tr>
            <tr nowrap="true" bgcolor="#DDDDDD">
              <td className="dir">NW</td>
              <td className="data">1</td>
              <td className="data">2</td>
              <td className="data">3</td>
              <td className="data">4</td>
              <td className="data">4</td>
              <td className="data">6</td>
              <td className="data">7</td>
              <td className="data">8</td>
            </tr>
            <tr nowrap="true" bgcolor="#DDDDDD">
              <td className="dir">NW</td>
              <td className="data">1</td>
              <td className="data">2</td>
              <td className="data">3</td>
              <td className="data">4</td>
              <td className="data">4</td>
              <td className="data">6</td>
              <td className="data">7</td>
              <td className="data">8</td>
            </tr>
            <tr nowrap="true" bgcolor="#DDDDDD">
              <td className="dir">NW</td>
              <td className="data">1</td>
              <td className="data">2</td>
              <td className="data">3</td>
              <td className="data">4</td>
              <td className="data">4</td>
              <td className="data">6</td>
              <td className="data">7</td>
              <td className="data">8</td>
            </tr>
            <tr nowrap="true" bgcolor="#DDDDDD">
              <td className="dir">NW</td>
              <td className="data">1</td>
              <td className="data">2</td>
              <td className="data">3</td>
              <td className="data">4</td>
              <td className="data">4</td>
              <td className="data">6</td>
              <td className="data">7</td>
              <td className="data">8</td>
            </tr>
            <tr nowrap="true" bgcolor="#DDDDDD">
              <td className="dir">NW</td>
              <td className="data">1</td>
              <td className="data">2</td>
              <td className="data">3</td>
              <td className="data">4</td>
              <td className="data">4</td>
              <td className="data">6</td>
              <td className="data">7</td>
              <td className="data">8</td>
            </tr>
            <tr nowrap="true" bgcolor="#DDDDDD">
              <td className="dir">NW</td>
              <td className="data">1</td>
              <td className="data">2</td>
              <td className="data">3</td>
              <td className="data">4</td>
              <td className="data">4</td>
              <td className="data">6</td>
              <td className="data">7</td>
              <td className="data">8</td>
            </tr>
            <tr nowrap="true" bgcolor="#DDDDDD">
              <td className="dir">NW</td>
              <td className="data">1</td>
              <td className="data">2</td>
              <td className="data">3</td>
              <td className="data">4</td>
              <td className="data">4</td>
              <td className="data">6</td>
              <td className="data">7</td>
              <td className="data">8</td>
            </tr>
            <tr nowrap="true" bgcolor="#DDDDDD">
              <td className="dir">NW</td>
              <td className="data">1</td>
              <td className="data">2</td>
              <td className="data">3</td>
              <td className="data">4</td>
              <td className="data">4</td>
              <td className="data">6</td>
              <td className="data">7</td>
              <td className="data">8</td>
            </tr>
            <tr nowrap="true" bgcolor="#DDDDDD">
              <td className="dir">NW</td>
              <td className="data">1</td>
              <td className="data">2</td>
              <td className="data">3</td>
              <td className="data">4</td>
              <td className="data">4</td>
              <td className="data">6</td>
              <td className="data">7</td>
              <td className="data">8</td>
            </tr>
            <tr nowrap="true" bgcolor="#DDDDDD">
              <td className="dir">NW</td>
              <td className="data">1</td>
              <td className="data">2</td>
              <td className="data">3</td>
              <td className="data">4</td>
              <td className="data">4</td>
              <td className="data">6</td>
              <td className="data">7</td>
              <td className="data">8</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
