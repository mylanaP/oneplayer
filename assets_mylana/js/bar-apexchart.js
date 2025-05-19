var options1 = {
    chart: {
      type: 'radialBar',
      height: 300,
      width: '100%',
      sparkline: { enabled: true },
    },
    grid: {
        padding: {
          top: -20,
          bottom: -20,
          left: -30,   // ✅ this is key!
          right: -30   // ✅ stretch chart width
        }
      },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: {
          margin: 0,
          size: '60%',
        },
        track: {
          background: "#E6FAF6",
          strokeWidth: "100%",
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -40,
            fontSize: '28px',
            fontWeight: 500,
            fontFamily: 'SUSE',
            color: '#000',
            formatter: function (val) {
              return '10,096'; // or dynamic value
            }
          }
        }
      }
    },
    stroke: {
        lineCap: "round"
      },
    series: [25], // 67% of max, customize as needed
    labels: [''],
    colors: ['#84E5D3'] // teal; adjust per stat
  };

  

  var minutesPlayedChart = new ApexCharts(document.querySelector("#chart-load-management-minutes-played"), options1);
  var totalDistanceChart = new ApexCharts(document.querySelector("#chart-load-management-total-distance"), options1);
  var accelerationsChart = new ApexCharts(document.querySelector("#chart-load-management-accelerations"), {...options1, colors: ['#E58485'], series: ['90']});
  var decelerationsChart = new ApexCharts(document.querySelector("#chart-load-management-decelerations"), {...options1, colors: ['#E5CB84'], series: ['50']});


  minutesPlayedChart.render();
  totalDistanceChart.render();
  accelerationsChart.render();
  decelerationsChart.render();