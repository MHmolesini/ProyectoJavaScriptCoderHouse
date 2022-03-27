// Graficos Resultados

// Grafico de barras Revenue Growth Q & Revenue Growth Y

document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('revenueQY', {
        chart: {
            type: 'bar',
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['Revenue Growth Q', 'Revenue Growth Y']
        },
        yAxis: {
            title: {
                text: null
            }
        },
        legend: false,
        series: [{
            name: empresas,
            data: [resultadoA1[0][1]*100, resultadoA2[0][1]*100],
            color: '#3DAC63',
        }],
    });
});

// Grafico de columnas Revenue 

document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('RevenuePlotColumn', {
        chart: {
            type: 'column',
            spacingTop: 8,
            spacingLeft: 0,
            spacingRight: 10,
        },
        title: {
            text: 'Revenue'
        },
        xAxis: {
            categories: ['Dic/2018', 'Mar/2019', 'Jun/2019', 'Sep/2019', 'Dic/2019', 'Mar/2020', 'Jun/2020', 'Sep/2020', 'Dic/2020', 'Mar/2021', 'Jun/2021', 'Sep/2021']
        },
        yAxis: {
            title: {
                text: 'Revenue'
            }
        },
        legend: false,
        series: [{
            name: empresas,
            data: [valor1[0][1], valor2[0][1], valor3[0][1], valor4[0][1], valor5[0][1], valor6[0][1], valor7[0][1], valor8[0][1], valor9[0][1], valor10[0][1], valor11[0][1], valor12[0][1]],
            color: '#3DAC63',
        }],
        
    });
});

// Grafico de Cascada del Estado de Resultado

// Grafico de barras Gross Profit Growth Q & Y

document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('grossProfitQY', {
        chart: {
            type: 'bar',
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['Gross Profit Growth Q', 'Gross Profit Growth Y']
        },
        yAxis: {
            title: {
                text: null
            }
        },
        legend: false,
        series: [{
            name: null,
            data: [resultadoA7[0][1]*100, resultadoA8[0][1]*100],
            color: '#E97E42',
        }],
    });
});

// Grafico de columnas Gross Profit 

document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('grossProfitPlot', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Gross Profit'
        },
        xAxis: {
            categories: ['Dic/2018', 'Mar/2019', 'Jun/2019', 'Sep/2019', 'Dic/2019', 'Mar/2020', 'Jun/2020', 'Sep/2020', 'Dic/2020', 'Mar/2021', 'Jun/2021', 'Sep/2021']
        },
        yAxis: {
            title: {
                text: 'Gross Profit'
            }
        },
        legend: false,
        series: [{
            name: empresas,
            data: [valor13[0][1], valor14[0][1], valor15[0][1], valor16[0][1], valor17[0][1], valor18[0][1], valor19[0][1], valor20[0][1], valor21[0][1], valor22[0][1], valor23[0][1], valor24[0][1]],
            color: '#E97E42',
        }],
        
    });
});

// Grafico de columnas Operating Income

document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('operatingIncomePlot', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Operating Income'
        },
        xAxis: {
            categories: ['Dic/2018', 'Mar/2019', 'Jun/2019', 'Sep/2019', 'Dic/2019', 'Mar/2020', 'Jun/2020', 'Sep/2020', 'Dic/2020', 'Mar/2021', 'Jun/2021', 'Sep/2021']
        },
        yAxis: {
            title: {
                text: 'Operating Income'
            }
        },
        legend: false,
        series: [{
            name: empresas,
            data: [valor25[0][1], valor26[0][1], valor27[0][1], valor28[0][1], valor29[0][1], valor30[0][1], valor31[0][1], valor32[0][1], valor33[0][1], valor34[0][1], valor35[0][1], valor36[0][1]],
            color: '#4C87DF',
        }],
        
    });
});

// Grafico de barras EBITDA Growth Q & Y

document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('ebitdaQY', {
        chart: {
            type: 'bar',
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['EBITDA Growth Q', 'EBITDA Growth Y']
        },
        yAxis: {
            title: {
                text: null
            }
        },
        legend: false,
        series: [{
            name: null,
            data: [resultadoA11[0][1]*100, resultadoA12[0][1]*100],
            color: '#E9E242',
        }],
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('MultiplePlot', {
        chart: {
            type: 'bar',
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['Gross Profit', 'Operating Income', 'Pretax Income', 'Net Income', 'EBITDA']
        },
        yAxis: {
            title: {
                text: null
            }
        },
        legend: false,
        series: [{
            name: null,
            data: [resultadoA10, resultadoA11, valor3[0][1], resultadoA13, resultadoA14],
            color: '#E9E242',
        }],
    });
});

// Grafico de barras Net Income Growth Q & Y

document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('netIncomeQY', {
        chart: {
            type: 'bar',
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['Net Income Growth Q', 'Net Income Growth Y']
        },
        yAxis: {
            title: {
                text: null
            }
        },
        legend: false,
        series: [{
            name: null,
            data: [resultadoA13[0][1]*100, resultadoA14[0][1]*100],
            color: '#B74FDB',
        }],
    });
});

// Grafico de barras EPS Growth Q & Y

document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('epsQY', {
        chart: {
            type: 'bar',
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['EPS Growth Q', 'EPS Growth Y']
        },
        yAxis: {
            title: {
                text: null
            }
        },
        legend: false,
        series: [{
            name: null,
            data: [resultadoA15[0][1]*100, resultadoA16[0][1]*100],
            color: '#D34343',
        }],
    });
});

// Grafico de columnas Net Income

document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('netIncomePlot', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Net Income'
        },
        xAxis: {
            categories: ['Dic/2018', 'Mar/2019', 'Jun/2019', 'Sep/2019', 'Dic/2019', 'Mar/2020', 'Jun/2020', 'Sep/2020', 'Dic/2020', 'Mar/2021', 'Jun/2021', 'Sep/2021']
        },
        yAxis: {
            title: {
                text: 'Net Income'
            }
        },
        legend: false,
        series: [{
            name: empresas,
            data: [valor37[0][1], valor38[0][1], valor39[0][1], valor40[0][1], valor41[0][1], valor42[0][1], valor43[0][1], valor44[0][1], valor45[0][1], valor46[0][1], valor47[0][1], valor48[0][1]],
            color: '#B74FDB',
        }],
        
    });
});