export default function returnArtcicle4Pie(scroll) {
  let pieScroll = [1,1,1,1];
  // for(var x = 0; x < scroll/50; x++) {
  //   pieScroll.push(1)
  // }
  Highcharts.chart(`container4`, {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      height: "400px",
      backgroundColor: "transparent",
      type: "pie",
      animation: Highcharts.svg, // don't animate in old IE
      marginRight: 10,
      events: {
          load: function () {

              // set up the updating of the chart each second
              var series = this.series[0];
              var i = 0;
              setInterval(function () { // current time
                  var y =  Math.floor(Math.random() * Math.floor(10000));
                  series.addPoint([y], true, false, {duration: 4000});
                  i++
              }, 1000);
          }
      }
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
            "animation": false,
            "data": (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: Math.random()
                });
            }
            return data;
        }())
        }
    ]
  })
}
