// Graficos Rentabilidad

// ------------------------------------ A Corregir ------------------------------------------------

// Grafico de barras COGS to Revenue & EPS
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('CogsEps', {
        chart: {
            type: 'bar',
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['COGS to Revenue', 'EPS']
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

// Grafico de columnas y lineas EPS
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('EarningPerSharePlotColumnLine', {
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'Earning per Share'
        },
        // subtitle: {
        //     text: 'Source: WorldClimate.com'
        // },
        xAxis: [{
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}°C',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: 'Net Income',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: 'EPS',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value} mm',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 120,
            verticalAlign: 'top',
            y: 100,
            floating: true,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || // theme
                'rgba(255,255,255,0.25)'
        },
        series: [{
            name: 'Net Income',
            type: 'column',
            yAxis: 1,
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            tooltip: {
                valueSuffix: ' mm'
            }

        }, {
            name: 'EPS',
            type: 'spline',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            tooltip: {
                valueSuffix: '°C'
            }
        }]
    });
});

// Grafico de columnas Margin Income
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('GrossMarginPlotColumnLine', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Margin Income'
        },
        // xAxis: {
        //     categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
        // },
        yAxis: {
            min: 0,
            title: {
                text: 'Margin Income'
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

// Grafico de barras Dividend Yield & Dividend Payout
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('DividendYieldPayout', {
        chart: {
            type: 'bar',
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['Dividend Yield', 'Dividend Payout']
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

// Grafico de barras multiple
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('MarginPlotBar', {
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
            name: null,
            data: [valor1[0][1], valor2[0][1]],
            color: '#3DAC63',
        }],
    });
});

// Grafico de barras ROA, ROE y ROIC
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('RoaRoeRoic', {
        chart: {
            type: 'bar',
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['ROA', 'ROE', 'ROIC']
        },
        yAxis: {
            title: {
                text: null
            }
        },
        legend: false,
        series: [{
            name: null,
            data: [valor1[0][1], valor2[0][1], valor3[0][1]],
            color: '#3DAC63',
        }],
    });
});

// Grafico de columnas y lineas Net Margin
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('NetMarginPlotColumn', {
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'Net Margin'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        xAxis: [{
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}°C',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: 'Temperature',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: 'Rainfall',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value} mm',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 120,
            verticalAlign: 'top',
            y: 100,
            floating: true,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || // theme
                'rgba(255,255,255,0.25)'
        },
        series: [{
            name: 'Rainfall',
            type: 'column',
            yAxis: 1,
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            tooltip: {
                valueSuffix: ' mm'
            }

        }, {
            name: 'Temperature',
            type: 'spline',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            tooltip: {
                valueSuffix: '°C'
            }
        }]
    });
});

// Grafico de columnas y lineas EBITDA Margin
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('EbitdaMarginPlotColumn', {
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'EBITDA Margin'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        xAxis: [{
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}°C',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: 'Temperature',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: 'Rainfall',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value} mm',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 120,
            verticalAlign: 'top',
            y: 100,
            floating: true,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || // theme
                'rgba(255,255,255,0.25)'
        },
        series: [{
            name: 'Rainfall',
            type: 'column',
            yAxis: 1,
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            tooltip: {
                valueSuffix: ' mm'
            }

        }, {
            name: 'Temperature',
            type: 'spline',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            tooltip: {
                valueSuffix: '°C'
            }
        }]
    });
});

// Grafico de barras ROTA & ROTE
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('RotaRote', {
        chart: {
            type: 'bar',
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['ROTA', 'ROTE']
        },
        yAxis: {
            title: {
                text: null
            }
        },
        series: [{
            name: null,
            data: [valor1[0][1], valor2[0][1]],
            color: '#3DAC63',
        }],
    });
});

// Grafico de barras Quality Ratio
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('QualityRatio', {
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
        series: [{
            name: null,
            data: [valor1[0][1], valor2[0][1]],
            color: '#3DAC63',
        }],
    });
});

// Grafico de columnas 
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('DividendPayoutPlotColumn', {
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

// Grafico de columnas y lineas FCF Margin
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('FCFMarginPlotColumn', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'Average Monthly Temperature and Rainfall in Tokyo'
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}°C',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: 'Temperature',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: 'Rainfall',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} mm',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        x: 120,
        verticalAlign: 'top',
        y: 100,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },
    series: [{
        name: 'Rainfall',
        type: 'column',
        yAxis: 1,
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        tooltip: {
            valueSuffix: ' mm'
        }

    }, {
        name: 'Temperature',
        type: 'spline',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
        tooltip: {
            valueSuffix: '°C'
        }
    }]
});
});