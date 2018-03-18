export default function returnArtcicle6Pie() {
  Highcharts.chart("container", {
    data: {
      table: "freq",
      startRow: 1,
      endRow: 17,
      endColumn: 7
    },

    chart: {
      polar: true,
      type: "column",
      backgroundColor: "transparent"
    },

    title: {
      text: ""
    },

    subtitle: {
      text: ""
    },

    pane: {
      size: "90%"
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
