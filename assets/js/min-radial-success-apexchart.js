var options = {
    series: [70],
    chart: {
        with: '100%',
        height: '100%',
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            startAngle: -180,
            endAngle: 180,
            hollow: {
                size: '120%'
            },
            track: {
                strokeWidth: '100%', // Lower = thinner track, higher = thicker track
                background: '#eee'
            },
            dataLabels: {
                value: {
                    offsetY: -10,
                    fontSize: '12px',
                    fontWeight: 500,
                    color: undefined,
                    formatter: function (val) {
                        return val;
                    }
                }
            }
        }
    },
    fill: {
        colors: ['#68E0C9']
    },
    stroke: {
        dashArray: 1
    },
    labels: [''],
};

document.querySelectorAll('.mini-success-chart').forEach(function(el) {
    var chart = new ApexCharts(el, options);
    chart.render();
});