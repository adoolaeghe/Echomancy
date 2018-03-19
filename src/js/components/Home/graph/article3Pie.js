export default function returnArtcicle3Pie() {
  Highcharts.chart(`container3`, {
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
            "innerSize": "90%",
            "colorByPoint": true,
            "data": [

                {
                    "name": "Chrome",
                    "y": 1,
                    "color": "blue",
                    "drilldown": "Chrome"
                },
                {
                    "name": "Chrome",
                    "y": 1,
                    "color": "blue",
                    "drilldown": "Chrome"
                },
                {
                    "name": "Firefox",
                    "y": 1,
                    "color": "lightred",
                    "drilldown": "Firefox"
                },
                {
                    "name": "Firefox",
                    "y": 1,
                    "color": "lightred",
                    "drilldown": "Firefox"
                },
                {
                    "name": "Firefox",
                    "y": 1,
                    "color": "lightred",
                    "drilldown": "Firefox"
                },
                {
                    "name": "Firefox",
                    "y": 1,
                    "color": "lightred",
                    "drilldown": "Firefox"
                },
                {
                    "name": "Internet Explorer",
                    "y": 1,
                    "color": "green",
                    "drilldown": "Internet Explorer"
                },
                {
                    "name": "Internet Explorer",
                    "y": 1,
                    "color": "green",
                    "drilldown": "Internet Explorer"
                },
                {
                    "name": "Internet Explorer",
                    "y": 1,
                    "color": "green",
                    "drilldown": "Internet Explorer"
                },
                {
                    "name": "Internet Explorer",
                    "y": 1,
                    "color": "green",
                    "drilldown": "Internet Explorer"
                },
                {
                    "name": "Internet Explorer",
                    "y": 1,
                    "color": "green",
                    "drilldown": "Internet Explorer"
                },
                {
                    "name": "Internet Explorer",
                    "y": 1,
                    "color": "green",
                    "drilldown": "Internet Explorer"
                },
                {
                    "name": "Internet Explorer",
                    "y": 1,
                    "color": "green",
                    "drilldown": "Internet Explorer"
                },
                {
                    "name": "Internet Explorer",
                    "y": 1,
                    "color": "green",
                    "drilldown": "Internet Explorer"
                },
                {
                    "name": "Safari",
                    "y": 1,
                    "color": "brown",
                    "drilldown": "Safari"
                },
                {
                    "name": "Safari",
                    "y": 1,
                    "color": "brown",
                    "drilldown": "Safari"
                },{
                    "name": "Safari",
                    "y": 1,
                    "color": "brown",
                    "drilldown": "Safari"
                },{
                    "name": "Safari",
                    "y": 1,
                    "color": "brown",
                    "drilldown": "Safari"
                },{
                    "name": "Safari",
                    "y": 1,
                    "color": "brown",
                    "drilldown": "Safari"
                },{
                    "name": "Safari",
                    "y": 1,
                    "color": "brown",
                    "drilldown": "Safari"
                },{
                    "name": "Safari",
                    "y": 1,
                    "color": "brown",
                    "drilldown": "Safari"
                },{
                    "name": "Safari",
                    "y": 1,
                    "color": "brown",
                    "drilldown": "Safari"
                },{
                    "name": "Safari",
                    "y": 1,
                    "color": "brown",
                    "drilldown": "Safari"
                },{
                    "name": "Safari",
                    "y": 1,
                    "color": "brown",
                    "drilldown": "Safari"
                },{
                    "name": "Safari",
                    "y": 1,
                    "color": "brown",
                    "drilldown": "Safari"
                },{
                    "name": "Safari",
                    "y": 1,
                    "color": "brown",
                    "drilldown": "Safari"
                },{
                    "name": "Safari",
                    "y": 1,
                    "color": "brown",
                    "drilldown": "Safari"
                },{
                    "name": "Safari",
                    "y": 1,
                    "color": "brown",
                    "drilldown": "Safari"
                },{
                    "name": "Safari",
                    "y": 1,
                    "color": "brown",
                    "drilldown": "Safari"
                },{
                    "name": "Safari",
                    "y": 1,
                    "color": "brown",
                    "drilldown": "Safari"
                },{
                    "name": "Safari",
                    "y": 1,
                    "color": "brown",
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
                "name": "Chrome",
                "id": "Chrome",
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
                "name": "Firefox",
                "id": "Firefox",
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
                "name": "Internet Explorer",
                "id": "Internet Explorer",
                "data": [
                    [
                        "v11.0",
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
                    ],[
                        "v10.0",
                        1
                    ],
                    [
                        "v9.0",
                        1
                    ],
                ]
            },
            {
                "name": "Safari",
                "id": "Safari",
                "data": [
                    [
                        "v11.0",
                        1
                    ],
                    [
                        "v10.1",
                        1
                    ],
                    [
                        "v10.0",
                        1
                    ],
                    [
                        "v9.1",
                        1
                    ],
                    [
                        "v9.0",
                        1
                    ],
                    [
                        "v5.1",
                        1
                    ]
                ]
            },
            {
                "name": "Edge",
                "id": "Edge",
                "data": [
                    [
                        "v16",
                        1
                    ],
                    [
                        "v15",
                        1
                    ],
                    [
                        "v14",
                        1
                    ],
                    [
                        "v13",
                        1
                    ]
                ]
            },
            {
                "name": "Opera",
                "id": "Opera",
                "data": [
                    [
                        "v50.0",
                        1
                    ],
                    [
                        "v49.0",
                        1
                    ],
                    [
                        "v12.1",
                        1
                    ]
                ]
            }
        ]
    }
  })
}
