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
            data: [resultadoB1[0][1]*100, resultadoB2[0][1]*100],
            color: '#3DAC63',
        }],
    });
});




// .------------------------------------A corregir -----------------------------------------------

// Grafico de barras Assets & Liabilities
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('Assets_Liabilities', {
        chart: {
            type: 'bar',
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['Assets', 'Liabilities']
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

// Grafico de columna Assets
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('AssetsPlotBar', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Assets'
        },
        xAxis: {
            categories: ['Dic/2018', 'Mar/2019', 'Jun/2019', 'Sep/2019', 'Dic/2019', 'Mar/2020', 'Jun/2020', 'Sep/2020', 'Dic/2020', 'Mar/2021', 'Jun/2021', 'Sep/2021']
        },
        yAxis: {
            title: {
                text: 'Assets'
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

// Grafico de columna apilada Componentes Assets
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('AssetsComponentsPlotColumn', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Assets Components'
        },
        // xAxis: {
        //     categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
        // },
        yAxis: {
            min: 0,
            title: {
                text: 'Total fruit consumption'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: ( // theme
                        Highcharts.defaultOptions.title.style &&
                        Highcharts.defaultOptions.title.style.color
                    ) || 'gray'
                }
            }
        },
        // legend: {
        //     align: 'right',
        //     x: -30,
        //     verticalAlign: 'top',
        //     y: 25,
        //     floating: true,
        //     backgroundColor:
        //         Highcharts.defaultOptions.legend.backgroundColor || 'white',
        //     borderColor: '#CCC',
        //     borderWidth: 1,
        //     shadow: false
        // },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [{
            name: 'John',
            data: [5]
        }, {
            name: 'Jane',
            data: [2]
        }, {
            name: 'Joe',
            data: [3]
        }]
    });
});

// Grafico de torta Componentes Assets
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('AssetsPlotCake', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Weighting of Assets'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                // dataLabels: {
                //     enabled: true,
                //     format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                // }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Chrome',
                y: 61.41,
                sliced: true,
                selected: true
            }, {
                name: 'Internet Explorer',
                y: 11.84
            }, {
                name: 'Firefox',
                y: 10.85
            }, {
                name: 'Edge',
                y: 4.67
            }, {
                name: 'Safari',
                y: 4.18
            }, {
                name: 'Sogou Explorer',
                y: 1.64
            }, {
                name: 'Opera',
                y: 1.6
            }, {
                name: 'QQ',
                y: 1.2
            }, {
                name: 'Other',
                y: 2.61
            }]
        }]
    });
});

// Grafico de barras Current Liabilities & Non Current Liabilities
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('CurrentLiabilitiesNonCurrent', {
        chart: {
            type: 'bar',
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['Current Liabilities', 'Non Current Liabilities']
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
            color: '#E97E42',
        }],
    });
});

// Grafico de barras Equity & Debt
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('EquityDebt', {
        chart: {
            type: 'bar',
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['Equity', 'Debt']
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
            color: '#4C87DF',
        }],
    });
});

// Grafico de columna Liabilities
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('LiabilitiesPlotBar', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Liabilities'
        },
        xAxis: {
            categories: ['Dic/2018', 'Mar/2019', 'Jun/2019', 'Sep/2019', 'Dic/2019', 'Mar/2020', 'Jun/2020', 'Sep/2020', 'Dic/2020', 'Mar/2021', 'Jun/2021', 'Sep/2021']
        },
        yAxis: {
            title: {
                text: 'Liabilities'
            }
        },
        legend: false,
        series: [{
            name: empresas,
            data: [valor37[0][1], valor38[0][1], valor39[0][1], valor40[0][1], valor41[0][1], valor42[0][1], valor43[0][1], valor44[0][1], valor45[0][1], valor46[0][1], valor47[0][1], valor48[0][1]],
            color: '#E97E42',
        }],
        
    });
});

// Grafico de columnas apiladas Componentes Liabilities
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('LiabilitiesComponentsPlotColumn', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Assets Components'
        },
        // xAxis: {
        //     categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
        // },
        yAxis: {
            min: 0,
            title: {
                text: 'Total fruit consumption'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: ( // theme
                        Highcharts.defaultOptions.title.style &&
                        Highcharts.defaultOptions.title.style.color
                    ) || 'gray'
                }
            }
        },
        // legend: {
        //     align: 'right',
        //     x: -30,
        //     verticalAlign: 'top',
        //     y: 25,
        //     floating: true,
        //     backgroundColor:
        //         Highcharts.defaultOptions.legend.backgroundColor || 'white',
        //     borderColor: '#CCC',
        //     borderWidth: 1,
        //     shadow: false
        // },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [{
            name: 'John',
            data: [5]
        }, {
            name: 'Jane',
            data: [2]
        }, {
            name: 'Joe',
            data: [3]
        }]
    });
});

// Grafico de columna Equity
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('EquityPlotBar', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Equity'
        },
        xAxis: {
            categories: ['Dic/2018', 'Mar/2019', 'Jun/2019', 'Sep/2019', 'Dic/2019', 'Mar/2020', 'Jun/2020', 'Sep/2020', 'Dic/2020', 'Mar/2021', 'Jun/2021', 'Sep/2021']
        },
        yAxis: {
            title: {
                text: 'Equity'
            }
        },
        legend: false,
        series: [{
            name: empresas,
            data: [valor37[0][1], valor38[0][1], valor39[0][1], valor40[0][1], valor41[0][1], valor42[0][1], valor43[0][1], valor44[0][1], valor45[0][1], valor46[0][1], valor47[0][1], valor48[0][1]],
            color: '#4C87DF',
        }],
        
    });
});

// Grafico de columna Debt
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('DebtPlotBar', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Debt'
        },
        xAxis: {
            categories: ['Dic/2018', 'Mar/2019', 'Jun/2019', 'Sep/2019', 'Dic/2019', 'Mar/2020', 'Jun/2020', 'Sep/2020', 'Dic/2020', 'Mar/2021', 'Jun/2021', 'Sep/2021']
        },
        yAxis: {
            title: {
                text: 'Debt'
            }
        },
        series: [{
            name: empresas,
            data: [valor37[0][1], valor38[0][1], valor39[0][1], valor40[0][1], valor41[0][1], valor42[0][1], valor43[0][1], valor44[0][1], valor45[0][1], valor46[0][1], valor47[0][1], valor48[0][1]],
            color: '#B74FDB',
        }],
        
    });
});

// Grafico de torta Componentes Liabilities
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('LiabilitiesPlotCake', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Weighting of Assets'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                // dataLabels: {
                //     enabled: true,
                //     format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                // }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Chrome',
                y: 61.41,
                sliced: true,
                selected: true
            }, {
                name: 'Internet Explorer',
                y: 11.84
            }, {
                name: 'Firefox',
                y: 10.85
            }, {
                name: 'Edge',
                y: 4.67
            }, {
                name: 'Safari',
                y: 4.18
            }, {
                name: 'Sogou Explorer',
                y: 1.64
            }, {
                name: 'Opera',
                y: 1.6
            }, {
                name: 'QQ',
                y: 1.2
            }, {
                name: 'Other',
                y: 2.61
            }]
        }]
    });
});

