var options1 = {
    chart: {
      type: 'radialBar',
      height: 300,
      width: '100%',
      sparkline: { enabled: true },
    },
    grid: {
        padding: {
          top: -10,
          bottom: 10,
          left: -10,   // ✅ this is key!
          right: -10   // ✅ stretch chart width
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
            offsetY: -35,
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

  var progress_Options = {
    chart: {
      type: 'radialBar',
      height: 80,
      width: 80,
      sparkline: { enabled: true }
    },
    grid: {
        padding: {
          top: 4,
        }
      },
    plotOptions: {
      radialBar: {
        startAngle: 0,
        endAngle: 360,
        track: {
          background: '#f1f1f1',
          strokeWidth: '100%',
        },
        hollow: {
          size: '40%'
        },
        dataLabels: {
          name: { show: false },
          value: {
            show: true,
            fontSize: '12px',
            fontFamily: "SUSE",
            fontWeight: 600,
            offsetY: 3,
            formatter: function (val) {
              return Math.round(val);
            }
          }
        }
      }
    },
    stroke: {
      lineCap: 'butt',      // flat edges
      dashArray: 2         // ✅ creates dash effect
    },
    series: [68],           // value (percentage)
    colors: ['#E5CB84']     // turquoise/cyan like the image
  };

  var cmj_Options = {
    chart: {
      type: 'area',
      height: 80,
      sparkline: { enabled: true }
    },
    grid: {
        padding: {
          bottom: 1,
        }
      },
    series: [{
      name: 'CMJ',
      data: [1.8, 2.1, 1.8, 2.0, 1.9, 2.2, 1.75]
    }],
    stroke: {
      curve: 'smooth',
      width: 2,
      colors: ['#EF5350']
    },
    fill: {
      type: 'solid',
      opacity: 0.2,
      colors: ['#E58485']
    },
    tooltip: {
      enabled: false
    }
  };
  

  var minutesPlayedChart = new ApexCharts(document.querySelector("#chart-load-management-minutes-played"), options1);
  var totalDistanceChart = new ApexCharts(document.querySelector("#chart-load-management-total-distance"), options1);
  var accelerationsChart = new ApexCharts(
    document.querySelector("#chart-load-management-accelerations"),
    {
      ...options1,
      series: [90],
      colors: ['#E58485'],
      plotOptions: {
        radialBar: {
          ...options1.plotOptions?.radialBar, // keep original settings
          track: {
            ...options1.plotOptions?.radialBar?.track,
            background: '#FAE6E7'
          }
        }
      }
    }
  );
  var decelerationsChart = new ApexCharts(document.querySelector("#chart-load-management-decelerations"), {...options1, colors: ['#E5CB84'], series: ['50'], plotOptions: {
    radialBar: {
      ...options1.plotOptions?.radialBar, // keep original settings
      track: {
        ...options1.plotOptions?.radialBar?.track,
        background: '#FAF5E6'
      }
    }
  }});
  var zonePlayedChart = new ApexCharts(document.querySelector("#chart-load-management-zone-distance"), options1);
  var hsrDistanceChart = new ApexCharts(document.querySelector("#chart-load-management-hsr"), options1);
  var sprintChart = new ApexCharts(document.querySelector("#chart-load-management-sprint-distance"), {...options1, colors: ['#E58485'], series: ['90'],  plotOptions: {
    radialBar: {
      ...options1.plotOptions?.radialBar, // keep original settings
      track: {
        ...options1.plotOptions?.radialBar?.track,
        background: '#FAE6E7'
      }
    }
  }});
  var metresChart = new ApexCharts(document.querySelector("#chart-load-management-metres-per-min"), {...options1, colors: ['#E58485'], series: ['90'],  plotOptions: {
    radialBar: {
      ...options1.plotOptions?.radialBar, // keep original settings
      track: {
        ...options1.plotOptions?.radialBar?.track,
        background: '#FAE6E7'
      }
    }
  }});

  minutesPlayedChart.render();
  totalDistanceChart.render();
  accelerationsChart.render();
  decelerationsChart.render();
  zonePlayedChart.render();
  hsrDistanceChart.render();
  sprintChart.render();
  metresChart.render();


  // progress circle

  var pChart1 = new ApexCharts(document.querySelector("#progressCircle1"), progress_Options);
  var pChart2 = new ApexCharts(document.querySelector("#progressCircle2"), {...progress_Options, colors: ['#68E0C9']});
  var pChart3 = new ApexCharts(document.querySelector("#progressCircle3"), progress_Options);
  var pChart4 = new ApexCharts(document.querySelector("#progressCircle4"), progress_Options);
  var pChart5 = new ApexCharts(document.querySelector("#progressCircle5"), {...progress_Options, colors: ['#E58485']});
  var pChart6 = new ApexCharts(document.querySelector("#progressCircle6"), progress_Options);
  var pChart7 = new ApexCharts(document.querySelector("#progressCircle7"), {...progress_Options, colors: ['#68E0C9']});
  var pChart8 = new ApexCharts(document.querySelector("#progressCircle8"), progress_Options);
  var pChart9 = new ApexCharts(document.querySelector("#progressCircle9"), progress_Options);
  var pChart10 = new ApexCharts(document.querySelector("#progressCircle10"), {...progress_Options, colors: ['#E58485']});

  pChart1.render();
  pChart2.render();
  pChart3.render();
  pChart4.render();
  pChart5.render();
  pChart6.render();
  pChart7.render();
  pChart8.render();
  pChart9.render();
  pChart10.render();


  // CMJ chart

  var cmjChart1 = new ApexCharts(document.querySelector("#cmjChart1"), cmj_Options);
  var cmjChart2 = new ApexCharts(document.querySelector("#cmjChart2"), cmj_Options);
  var cmjChart3 = new ApexCharts(document.querySelector("#cmjChart3"), cmj_Options);
  var cmjChart4 = new ApexCharts(document.querySelector("#cmjChart4"), cmj_Options);
  var cmjChart5 = new ApexCharts(document.querySelector("#cmjChart5"), cmj_Options);
  var cmjChart6 = new ApexCharts(document.querySelector("#cmjChart6"), cmj_Options);
  var cmjChart7 = new ApexCharts(document.querySelector("#cmjChart7"), cmj_Options);
  var cmjChart8 = new ApexCharts(document.querySelector("#cmjChart8"), cmj_Options);

  cmjChart1.render();
  cmjChart2.render();
  cmjChart3.render();
  cmjChart4.render();
  cmjChart5.render();
  cmjChart6.render();
  cmjChart7.render();
  cmjChart8.render();