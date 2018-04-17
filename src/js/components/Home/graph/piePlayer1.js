export default function returnPiePlayer(data) {
  return {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      height: "400px",
      backgroundColor: "transparent",
      type: "pie"
    },
    title: {
      text: ""
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        size: 320,
        dataLabels: {
          enabled: true,
          format: "",
          style: {
            color:
              (Highcharts.theme && Highcharts.theme.contrastTextColor) ||
              "black"
          }
        }
      }
    },
    "series": [
        {
            "name": "hello",
            "colorByPoint": true,
            "data": data
        }
    ],
    "drilldown": {
      "drillUpButton": {
        "position": {

        },
        "align": "left"
      },
      "series": [
        {
          "name": "Ryme1",
          "id": "Ryme1",
          "data": [
            [
              "v65.0",
              1
            ],
            [
              "v64.0",
              1
            ]
          ]
        },
        {
          "name": "Ryme2",
          "id": "Ryme2",
          "data": [
            [
              "v58.0",
              1
            ],
            [
              "v57.0",
              1
            ],
            [
              "v56.0",
              1
            ],
            [
              "v55.0",
              1
            ],
          ]
        },
        {
          "name": "Ryme3",
          "id": "Ryme3",
          "data": [
            [
              "#0637D8",
              1
            ],
            [
              "v10.0",
              1
            ],
            [
              "v9.0",
              1
            ],
            [
              "v8.0",
              1
            ],
            [
              "v10.0",
              1
            ],
            [
              "v9.0",
              1
            ],
            [
              "v10.0",
              1
            ],
            [
              "v9.0",
              1
            ],
          ]
        },
      ]
    }
  }
}
