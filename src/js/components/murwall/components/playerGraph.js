import React from "react";

export default class PlayerBuy extends React.Component {
  componentDidMount() {
    Highcharts.chart('container', {
        data: {
            table: 'freq',
            startRow: 1,
            endRow: 17,
            endColumn: 7
        },

        chart: {
            polar: true,
            type: 'column'
        },

        title: {
            text: ''
        },

        subtitle: {
            text: ''
        },

        pane: {
            size: '85%'
        },

        legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 100,
            layout: 'vertical'
        },

        xAxis: {
            tickmarkPlacement: 'on'
        },

        yAxis: {
            min: 0,
            endOnTick: false,
            innerSize: '20%',
            showLastLabel: true,
            title: {
                text: 'Frequency (%)'
            },
            labels: {
                formatter: function () {
                    return this.value + '%';
                }
            },
            reversedStacks: false
        },

        tooltip: {
            valueSuffix: '%'
        },

        plotOptions: {
            series: {
                stacking: 'normal',
                shadow: false,
                groupPadding: 0,
                pointPlacement: 'on'
            }
        }
    });
  }
  render() {
    return(
      <div>
      <div id="container" style="min-width: 420px; max-width: 600px; height: 400px; margin: 0 auto"></div>
      <table id="freq" border="0" cellspacing="0" cellpadding="0">
        <tr nowrap bgcolor="#CCCCFF">
            <th colspan="9" class="hdr">Table of Frequencies (percent)</th>
        </tr>
        <tr nowrap bgcolor="#CCCCFF">
            <td class="dir">NW</td>
            <td class="data">1</td>
            <td class="data">2</td>
            <td class="data">3</td>
            <td class="data">4</td>
            <td class="data">4</td>
            <td class="data">6</td>
            <td class="data">7</td>
            <td class="data">8</td>
        </tr>
        <tr nowrap>
            <td class="dir">NW</td>
            <td class="data">1</td>
            <td class="data">2</td>
            <td class="data">3</td>
            <td class="data">4</td>
            <td class="data">4</td>
            <td class="data">6</td>
            <td class="data">7</td>
            <td class="data">8</td>
        </tr>
        <tr nowrap bgcolor="#DDDDDD">
            <td class="dir">NW</td>
            <td class="data">1</td>
            <td class="data">2</td>
            <td class="data">3</td>
            <td class="data">4</td>
            <td class="data">4</td>
            <td class="data">6</td>
            <td class="data">7</td>
            <td class="data">8</td>
        </tr>
        <tr nowrap>
            <td class="dir">NW</td>
            <td class="data">1</td>
            <td class="data">2</td>
            <td class="data">3</td>
            <td class="data">4</td>
            <td class="data">4</td>
            <td class="data">6</td>
            <td class="data">7</td>
            <td class="data">8</td>
        </tr>
        <tr nowrap bgcolor="#DDDDDD">
            <td class="dir">NW</td>
            <td class="data">1</td>
            <td class="data">2</td>
            <td class="data">3</td>
            <td class="data">4</td>
            <td class="data">4</td>
            <td class="data">6</td>
            <td class="data">7</td>
            <td class="data">8</td>
        </tr>
        <tr nowrap>
            <td class="dir">NW</td>
            <td class="data">1</td>
            <td class="data">2</td>
            <td class="data">3</td>
            <td class="data">4</td>
            <td class="data">4</td>
            <td class="data">6</td>
            <td class="data">7</td>
            <td class="data">8</td>
        </tr>
    </table>
    </div>
    )
  }
}
