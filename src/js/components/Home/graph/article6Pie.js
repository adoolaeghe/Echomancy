export default function returnArtcicle6Pie() {
  Highcharts.chart("container2", {
    chart: {
      type: "variablepie",
      backgroundColor: "transparent"
    },
    title: {
      text: ""
    },
    plotOptions: {
      series: {
        animation: false
      }
    },
    series: [
      {
        minPointSize: 10,
        innerSize: "20%",
        zMin: 0,
        labels: {
          enabled: false
        },
        data: [
          {
            y: 1,
            z: 1
          },
          {
            y: 2,
            z: 2
          },
          {
            y: 3,
            z: 3
          },
          {
            y: 4,
            z: 4
          },
          {
            y: 5,
            z: 5
          },
          {
            y: 6,
            z: 6
          },
          {
            y: 7,
            z: 7
          }
        ]
      }
    ]
  });
}
