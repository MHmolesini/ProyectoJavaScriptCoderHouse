// Graficos Patrimonio

// Grafico de barras Assets Current & Assets Non Current
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('AssetsCurrent_NonCurrent', {
        chart: {
            type: 'bar',
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['Assets Current', 'Assets Non Current']
        },
        yAxis: {
            title: {
                text: null
            }
        },
        legend: false,
        series: [{
            name: null,
            data: [valor1[0][1], valor2[0][1]],
            color: '#3DAC63',
        }],
    });
});

