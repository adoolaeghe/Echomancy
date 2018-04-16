export default function returnPiePlayer() {
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
            "data": [

                {
                    "name": "rym1",
                    "y": 1,
                    "color": "#FE3C4A",
                    "drilldown": "Chrome"
                },
                {
                    "name": "rym2",
                    "y": 1,
                    "color": "#FE3C4A",
                    "drilldown": "Chrome"
                },
                {
                    "name": "rym3",
                    "y": 1,
                    "color": "#6781FE",
                    "drilldown": "Firefox"
                },
                {
                    "name": "rym4",
                    "y": 1,
                    "color": "#6781FE",
                    "drilldown": "Firefox"
                },
                {
                    "name": "rym5",
                    "y": 1,
                    "color": "#6781FE",
                    "drilldown": "Firefox",
                    "selected": true
                },
                {
                    "name": "rym6",
                    "y": 1,
                    "color": "#6781FE",
                    "drilldown": "Firefox"
                },
                {
                    "name": "rym7",
                    "y": 1,
                    "color": "#FFBF5D",
                    "drilldown": "Internet Explorer"
                },
                {
                    "name": "rym8",
                    "y": 1,
                    "color": "#FFBF5D",
                    "drilldown": "Internet Explorer"
                },
                {
                    "name": "rym9",
                    "y": 1,
                    "color": "#FFBF5D",
                    "drilldown": "Internet Explorer"
                },
                {
                    "name": "rym10",
                    "y": 1,
                    "color": "#FFBF5D",
                    "drilldown": "Internet Explorer"
                },
                {
                    "name": "rym11",
                    "y": 1,
                    "color": "#FFBF5D",
                    "drilldown": "Internet Explorer"
                },
                {
                    "name": "rym12",
                    "y": 1,
                    "color": "#FFBF5D",
                    "drilldown": "Internet Explorer"
                },
                {
                    "name": "rym13",
                    "y": 1,
                    "color": "#FFBF5D",
                    "drilldown": "Internet Explorer"
                },
                {
                    "name": "rym14",
                    "y": 1,
                    "color": "#FFBF5D",
                    "drilldown": "Internet Explorer"
                },
                {
                    "name": "rym15",
                    "y": 1,
                    "color": "#0637D8",
                    "drilldown": "Safari"
                },
                {
                    "name": "rym16",
                    "y": 1,
                    "color": "#0637D8",
                    "drilldown": "Safari"
                },{
                    "name": "rym17",
                    "y": 1,
                    "color": "#0637D8",
                    "drilldown": "Safari"
                },{
                    "name": "rym18",
                    "y": 1,
                    "color": "#0637D8",
                    "drilldown": "Safari"
                },{
                    "name": "rym19",
                    "y": 1,
                    "color": "#0637D8",
                    "drilldown": "Safari"
                },{
                    "name": "rym20",
                    "y": 1,
                    "color": "#0637D8",
                    "drilldown": "Safari"
                },{
                    "name": "rym21",
                    "y": 1,
                    "color": "#0637D8",
                    "drilldown": "Safari"
                },{
                    "name": "rym22",
                    "y": 1,
                    "color": "#0637D8",
                    "drilldown": "Safari"
                },{
                    "name": "rym23",
                    "y": 1,
                    "color": "#0637D8",
                    "drilldown": "Safari"
                },{
                    "name": "24",
                    "y": 1,
                    "color": "#0637D8",
                    "drilldown": "Safari"
                },{
                    "name": "25",
                    "y": 1,
                    "color": "#0637D8",
                    "drilldown": "Safari"
                },{
                    "name": "26",
                    "y": 1,
                    "color": "#0637D8",
                    "drilldown": "Safari"
                },{
                    "name": "27",
                    "y": 1,
                    "color": "#0637D8",
                    "drilldown": "Safari"
                },{
                    "name": "28",
                    "y": 1,
                    "color": "#0637D8",
                    "drilldown": "Safari"
                },{
                    "name": "29",
                    "y": 1,
                    "color": "#0637D8",
                    "drilldown": "Safari"
                },{
                    "name": "30",
                    "y": 1,
                    "color": "#0637D8",
                    "drilldown": "Safari"
                },{
                    "name": "21",
                    "y": 1,
                    "color": "#0637D8",
                    "drilldown": "Safari"
                },

            ]
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
