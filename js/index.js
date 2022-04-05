// Switch Toggle

const botonSwitch = document.querySelector(".switch__boton__label");
botonSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    botonSwitch.classList.toggle('active');
});

// -----------------------------------------------------------------------

const input = document.querySelector('.dashboard__form__input');
const button = document.querySelector('.dashboard__form__button');
const apiDiv = document.querySelector('.dashboard__div');

const dashboardPanel = document.querySelector('.dashboard__div__1__panel');

button.addEventListener('click', (i) => {
    i.preventDefault();
    buscarEmpresa(input.value);
})

function buscarEmpresa(empresa){
    fetch(`https://financialmodelingprep.com/api/v3/income-statement/${empresa}?limit=120&apikey=07469b7ca38e2cfbcb54480fd03cd1c1`)
    .then((resultado) => resultado.json())
    .then((data) => {
        mostrarEmpresa(data);
    });
}

function mostrarEmpresa(empresa){
    const revenue2 = document.createElement('p');
    revenue2.innerHTML = `${empresa[0].revenue/1000000} M`;

    const revenueCard = document.querySelector('#revenueCard');
    revenueCard.appendChild(revenue2);


    const revenue3 = document.createElement('p');
    revenue3.innerHTML = `${empresa[0].grossProfit/1000000} M`;

    const grossMarginCard = document.querySelector('#grossMarginCard');
    grossMarginCard.appendChild(revenue3);


    const revenue4 = document.createElement('p');
    revenue4.innerHTML = `${empresa[0].ebitda/1000000} M`;

    const ebitdaCard = document.querySelector('#ebitdaCard');
    ebitdaCard.appendChild(revenue4);


    const revenue5 = document.createElement('p');
    revenue5.innerHTML = `${empresa[0].operatingIncome/1000000} M`;

    const operatingCard = document.querySelector('#operatingCard');
    operatingCard.appendChild(revenue5);


    const revenue6 = document.createElement('p');
    revenue6.innerHTML = `${empresa[0].netIncome/1000000} M`;

    const netIncomeCard = document.querySelector('#netIncomeCard');
    netIncomeCard.appendChild(revenue6);


    const revenue7 = document.createElement('p');
    revenue7.innerHTML = `${empresa[0].eps}`;

    const epsCard = document.querySelector('#epsCard');
    epsCard.appendChild(revenue7);

    // const div2 = document.createElement('div');
    // div2.appendChild(revenue2);

    // apiDiv.appendChild(div2);
}

Highcharts.chart('revenue', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Revenue'
    },
    xAxis: {
        categories: [
            '2017',
            '2018',
            '2019',
            '2020',
            '2021'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Revenue (M)'
        }
    },
    // tooltip: {
    //     headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    //     pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
    //         '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
    //     footerFormat: '</table>',
    //     shared: true,
    //     useHTML: true
    // },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    legend: false,
    series: [{
        name: 'Tokyo',
        data: [149.9, 91.5, 50.4, 129.2, 144.0],
        color: '#3DAC63',
    }]
});

Highcharts.chart('grossProft', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Gross Proft'
    },
    xAxis: {
        categories: [
            '2017',
            '2018',
            '2019',
            '2020',
            '2021'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Revenue (M)'
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    legend: false,
    series: [{
        name: 'Tokyo',
        data: [49.9, 71.5, 106.4, 129.2, 144.0],
        color: '#E97E42',
    }]
});

Highcharts.chart('ebitda', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'EBITDA'
    },
    xAxis: {
        categories: [
            '2017',
            '2018',
            '2019',
            '2020',
            '2021'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Revenue (M)'
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    legend: false,
    series: [{
        name: 'Tokyo',
        data: [49.9, 71.5, 106.4, 129.2, 144.0],
        color: '#E9E242',
    }]
});

Highcharts.chart('operatingIncome', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Operating Income'
    },
    xAxis: {
        categories: [
            '2017',
            '2018',
            '2019',
            '2020',
            '2021'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Revenue (M)'
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    legend: false,
    series: [{
        name: 'Tokyo',
        data: [49.9, 71.5, 106.4, 129.2, 144.0],
        color: '#4C87DF',
    }]
});

Highcharts.chart('netIncome', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Net Income'
    },
    xAxis: {
        categories: [
            '2017',
            '2018',
            '2019',
            '2020',
            '2021'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Revenue (M)'
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    legend: false,
    series: [{
        name: 'Tokyo',
        data: [49.9, 71.5, 106.4, 129.2, 144.0],
        color: '#B74FDB',
    }]
});

Highcharts.chart('eps', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Earning per Share'
    },
    xAxis: {
        categories: [
            '2017',
            '2018',
            '2019',
            '2020',
            '2021'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Revenue (M)'
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    legend: false,
    series: [{
        name: 'Tokyo',
        data: [49.9, 71.5, 106.4, 129.2, 144.0],
        color: '#D34343',
    }]
});


// ------------------------------

Highcharts.chart('currentAssetsPlot', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Total Current Assets'
    },
    xAxis: {
        categories: ['2017', '2018', '2019', '2020', '2021']
    },
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
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
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
        name: 'Cash and Cash Equivalent',
        data: [5, 3, 4, 7, 2]
    }, {
        name: 'Short Term Investment',
        data: [2, 2, 3, 2, 1]
    }, {
        name: 'Net Receivables',
        data: [3, 4, 4, 2, 5]
    }, {
        name: 'Inventory',
        data: [3, 4, 4, 2, 5]
    }, {
        name: 'Other Current Assets',
        data: [3, 4, 4, 2, 5]
    }]
});

Highcharts.chart('nonCurrentAssetsPlot', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Total Current Assets'
    },
    xAxis: {
        categories: ['2017', '2018', '2019', '2020', '2021']
    },
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
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
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
        name: 'Property Plant Equipment Net',
        data: [5, 3, 4, 7, 2]
    }, {
        name: 'Goodwill and Intangible Assets',
        data: [2, 2, 3, 2, 1]
    }, {
        name: 'Long Term Investment',
        data: [3, 4, 4, 2, 5]
    }, {
        name: 'Tax Assets',
        data: [3, 4, 4, 2, 5]
    }, {
        name: 'Other Non Current Assets',
        data: [3, 4, 4, 2, 5]
    }]
});

Highcharts.chart('assetsPlot', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Total Current Assets'
    },
    xAxis: {
        categories: ['2017', '2018', '2019', '2020', '2021']
    },
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
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
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
        name: 'Current Assets',
        data: [5, 3, 4, 7, 2]
    }, {
        name: 'Non Current Assets',
        data: [2, 2, 3, 2, 1]
    }]
});

Highcharts.chart('assetsPlot100', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Stacked column chart'
    },
    xAxis: {
        categories: ['2017', '2018', '2019', '2020', '2021']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total fruit consumption'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        }
    },
    series: [{
        name: 'Current Assets',
        data: [5, 3, 4, 7, 2]
    }, {
        name: 'Non Current Assets',
        data: [2, 2, 3, 2, 1]
    }]
});

Highcharts.chart('currentLiabilitiesPlot', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Total Current Assets'
    },
    xAxis: {
        categories: ['2017', '2018', '2019', '2020', '2021']
    },
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
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
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
        name: 'Account Payables',
        data: [5, 3, 4, 7, 2]
    }, {
        name: 'Short Term Debt',
        data: [2, 2, 3, 2, 1]
    }, {
        name: 'Tax Payables',
        data: [3, 4, 4, 2, 5]
    }, {
        name: 'Deferred Revenue',
        data: [3, 4, 4, 2, 5]
    }, {
        name: 'Other Current Liabilities',
        data: [3, 4, 4, 2, 5]
    }]
});

Highcharts.chart('nonCurrentLiabilitiesPlot', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Total Non Current Liabilities'
    },
    xAxis: {
        categories: ['2017', '2018', '2019', '2020', '2021']
    },
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
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
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
        name: 'Long Term Debt',
        data: [2, 2, 3, 2, 1]
    }, {
        name: 'Deferred Revenue Non Current',
        data: [3, 4, 4, 2, 5]
    }, {
        name: 'Deferred Tax Liabilities Non Current',
        data: [3, 4, 4, 2, 5]
    }, {
        name: 'Other Non Current Liabilities',
        data: [3, 4, 4, 2, 5]
    }]
});

Highcharts.chart('liabilitiesPlot', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Stacked column chart'
    },
    xAxis: {
        categories: ['2017', '2018', '2019', '2020', '2021']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total fruit consumption'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        }
    },
    series: [{
        name: 'Current Liabilities',
        data: [5, 3, 4, 7, 2]
    }, {
        name: 'Non Current Liabilities',
        data: [2, 2, 3, 2, 1]
    }]
});

Highcharts.chart('liabilitiesPlot100', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Stacked column chart'
    },
    xAxis: {
        categories: ['2017', '2018', '2019', '2020', '2021']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total fruit consumption'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        }
    },
    series: [{
        name: 'Current Liabilities',
        data: [5, 3, 4, 7, 2]
    }, {
        name: 'Non Current Liabilities',
        data: [2, 2, 3, 2, 1]
    }]
});

Highcharts.chart('assetsLiabilities', {

    chart: {
        type: 'column'
    },

    title: {
        text: 'Total fruit consumption, grouped by gender'
    },

    xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'Number of fruits'
        }
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br/>' +
                this.series.name + ': ' + this.y + '<br/>' +
                'Total: ' + this.point.stackTotal;
        }
    },

    plotOptions: {
        column: {
            stacking: 'normal'
        }
    },

    series: [{
        name: 'John',
        data: [5, 3, 4, 7, 2],
        stack: 'male'
    }, {
        name: 'Joe',
        data: [3, 4, 4, 2, 5],
        stack: 'male'
    }, {
        name: 'Jane',
        data: [2, 5, 6, 2, 1],
        stack: 'female'
    }, {
        name: 'Janet',
        data: [3, 0, 4, 4, 3],
        stack: 'female'
    }]
});

// Estados financieros de la empresa (AAPL)

// "date" : "2021-09-25",
//   "symbol" : "AAPL",
//   "reportedCurrency" : "USD",
//   "cik" : "0000320193",
//   "fillingDate" : "2021-10-29",
//   "acceptedDate" : "2021-10-28 18:04:28",
//   "calendarYear" : "2021",
//   "period" : "FY",
//   "revenue" : 365817000000,
//   "costOfRevenue" : 212981000000,
//   "grossProfit" : 152836000000,
//   "grossProfitRatio" : 0.4177935962516778,                           RATIO
//   "researchAndDevelopmentExpenses" : 21.914.000.000,
//   "generalAndAdministrativeExpenses" : 0.0,
//   "sellingAndMarketingExpenses" : 0.0,
//   "sellingGeneralAndAdministrativeExpenses" : 21.973.000.000,
//   "otherExpenses" : 0.0,
//   "operatingExpenses" : 43.887.000.000,
//   "costAndExpenses" : 256.868.000.000,
//   "interestIncome" : 2.843.000.000,
//   "interestExpense" : 2.645.000.000,
//   "depreciationAndAmortization" : 11.284.000.000,
//   "ebitda" : 123.136.000.000,
//   "ebitdaratio" : 0.33660546120054563,                               RATIO
//   "operatingIncome" : 108.949.000.000,
//   "operatingIncomeRatio" : 0.29782377527561593,                      RATIO
//   "totalOtherIncomeExpensesNet" : 258.000.000,
//   "incomeBeforeTax" : 109.207.000.000,
//   "incomeBeforeTaxRatio" : 0.2985290459437369,                       RATIO
//   "incomeTaxExpense" : 14.527.000.000,
//   "netIncome" : 94.680.000.000,
//   "netIncomeRatio" : 0.2588179335569424,                             RATIO
//   "eps" : 5.67,
//   "epsdiluted" : 5.61,
//   "weightedAverageShsOut" : 16701272000,
//   "weightedAverageShsOutDil" : 16864919000,
//   "link" : "https://www.sec.gov/Archives/edgar/data/320193/000032019321000105/0000320193-21-000105-index.htm",
//   "finalLink" : "https://www.sec.gov/Archives/edgar/data/320193/000032019321000105/aapl-20210925.htm"
const API_URL = "https://financialmodelingprep.com/api/v3/income-statement/AAPL?limit=120&apikey=07469b7ca38e2cfbcb54480fd03cd1c1";

fetch(API_URL)
.then(response => response.json() )
.then(data => {
    console.log(data)
})
.catch(err => console.log(err));

// Estado financieros de la empresa https://financialmodelingprep.com/api/v3/balance-sheet-statement/AAPL?limit=120&apikey=07469b7ca38e2cfbcb54480fd03cd1c1

// "date" : "2021-09-25",
//   "symbol" : "AAPL",
//   "reportedCurrency" : "USD",
//   "cik" : "0000320193",
//   "fillingDate" : "2021-10-29",
//   "acceptedDate" : "2021-10-28 18:04:28",
//   "calendarYear" : "2021",
//   "period" : "FY",
//   "cashAndCashEquivalents" : 34.940.000.000,
//   "shortTermInvestments" : 27.699.000.000,
//   "cashAndShortTermInvestments" : 62.639.000.000,
//   "netReceivables" : 51.506.000.000,
//   "inventory" : 6.580.000.000,
//   "otherCurrentAssets" : 14.111.000.000,
//   "totalCurrentAssets" : 134.836.000.000,
//   "propertyPlantEquipmentNet" : 39.440.000.000,
//   "goodwill" : 0.0,
//   "intangibleAssets" : 0.0,
//   "goodwillAndIntangibleAssets" : 0.0,
//   "longTermInvestments" : 127.877.000.000,
//   "taxAssets" : 0.0,
//   "otherNonCurrentAssets" : 48.849.000.000,
//   "totalNonCurrentAssets" : 216.166.000.000,
//   "otherAssets" : 0.0,
//   "totalAssets" : 351.002.000.000,
//   "accountPayables" : 54.763.000.000,
//   "shortTermDebt" : 15.613.000.000,
//   "taxPayables" : 0.0,
//   "deferredRevenue" : 7.612.000.000,
//   "otherCurrentLiabilities" : 47.493.000.000,
//   "totalCurrentLiabilities" : 125.481.000.000,
//   "longTermDebt" : 109.106.000.000,
//   "deferredRevenueNonCurrent" : 0.0,
//   "deferredTaxLiabilitiesNonCurrent" : 0.0,
//   "otherNonCurrentLiabilities" : 53.325.000.000,
//   "totalNonCurrentLiabilities" : 162.431.000.000,
//   "otherLiabilities" : 0.0,
//   "capitalLeaseObligations" : 0.0,
//   "totalLiabilities" : 287.912.000.000,
//   "preferredStock" : 0.0,
//   "commonStock" : 57.365.000.000,
//   "retainedEarnings" : 5.562.000.000,
//   "accumulatedOtherComprehensiveIncomeLoss" : 163.000.000,
//   "othertotalStockholdersEquity" : 0.0,
//   "totalStockholdersEquity" : 63.090.000.000,
//   "totalLiabilitiesAndStockholdersEquity" : 351.002.000.000,
//   "minorityInterest" : 0,
//   "totalEquity" : 63.090.000.000,
//   "totalLiabilitiesAndTotalEquity" : 351.002.000.000,
//   "totalInvestments" : 155.576.000.000,
//   "totalDebt" : 124.719.000.000,
//   "netDebt" : 89.779.000.000,
//   "link" : "https://www.sec.gov/Archives/edgar/data/320193/000032019321000105/0000320193-21-000105-index.htm",
//   "finalLink" : "https://www.sec.gov/Archives/edgar/data/320193/000032019321000105/aapl-20210925.htm"

// Estado de flujo de efectivo
//https://financialmodelingprep.com/api/v3/cash-flow-statement/AAPL?limit=120&apikey=07469b7ca38e2cfbcb54480fd03cd1c1

// "date" : "2021-09-25",
// "symbol" : "AAPL",
// "reportedCurrency" : "USD",
// "cik" : "0000320193",
// "fillingDate" : "2021-10-29",
// "acceptedDate" : "2021-10-28 18:04:28",
// "calendarYear" : "2021",
// "period" : "FY",
// "netIncome" : 94.680.000.000,
// "depreciationAndAmortization" : 11.284.000.000,
// "deferredIncomeTax" : -4.774.000.000,
// "stockBasedCompensation" : 7.906.000.000,
// "changeInWorkingCapital" : -4.911.000.000,
// "accountsReceivables" : -10.125.000.000,
// "inventory" : -2.642.000.000,
// "accountsPayables" : 12.326.000.000,
// "otherWorkingCapital" : 1.676.000.000,
// "otherNonCashItems" : -147.000.000,
// "netCashProvidedByOperatingActivities" : 104.038.000.000,

// "investmentsInPropertyPlantAndEquipment" : -11.085.000.000,
// "acquisitionsNet" : -33.000.000,
// "purchasesOfInvestments" : -109.689.000.000,
// "salesMaturitiesOfInvestments" : 106.870.000.000,
// "otherInvestingActivites" : -608.000.000,
// "netCashUsedForInvestingActivites" : -14.545.000.000,

// "debtRepayment" : -8.750.000.000,
// "commonStockIssued" : 1.105.000.000,
// "commonStockRepurchased" : -85.971.000.000,
// "dividendsPaid" : -14.467.000.000,
// "otherFinancingActivites" : 14.730.000.000,
// "netCashUsedProvidedByFinancingActivities" : -93.353.000.000,

// "effectOfForexChangesOnCash" : 0.0,
// "netChangeInCash" : -3.860.000.000,
// "cashAtEndOfPeriod" : 35.929.000.000,
// "cashAtBeginningOfPeriod" : 39.789.000.000,
// "operatingCashFlow" : 104.038.000.000,
// "capitalExpenditure" : -11.085.000.000,
// "freeCashFlow" : 92.953.000.000,
// "link" : "https://www.sec.gov/Archives/edgar/data/320193/000032019321000105/0000320193-21-000105-index.htm",
// "finalLink" : "https://www.sec.gov/Archives/edgar/data/320193/000032019321000105/aapl-20210925.htm"

// Coeficicientes de la empresa https://financialmodelingprep.com/api/v3/ratios/AAPL?limit=40&apikey=07469b7ca38e2cfbcb54480fd03cd1c1

//"symbol" : "AAPL",
// "date" : "2021-09-25",
// "period" : "FY",
// "currentRatio" : 1.0745531195957954,                             2.2
// "quickRatio" : 0.9096596297447422,                               2.1
// "cashRatio" : 0.2784485300563432,
// "daysOfSalesOutstanding" : 51.390968708397914,                   4.15
// "daysOfInventoryOutstanding" : 11.27659274770989,                4.13
// "operatingCycle" : 62.667561456107805,
// "daysOfPayablesOutstanding" : 93.85107122231561,                 4.14
// "cashConversionCycle" : -31.183509766207806,                     4.6
// "grossProfitMargin" : 0.4177935962516778,                        1.2
// "operatingProfitMargin" : 0.29782377527561593,                   1.3
// "pretaxProfitMargin" : 0.2985290459437369,
// "netProfitMargin" : 0.2588179335569424,                          1.4
// "effectiveTaxRate" : 0.13302260844085087,
// "returnOnAssets" : 0.26974205275183616,                          1.9
// "returnOnEquity" : 1.5007132667617689,                           1.10
// "returnOnCapitalEmployed" : 0.48309913489209433,
// "netIncomePerEBT" : 0.8669773915591491,
// "ebtPerEbit" : 1.0023680804780217,
// "ebitPerRevenue" : 0.29782377527561593,
// "debtRatio" : 0.8202574344305731,
// "debtEquityRatio" : 4.563512442542399,                           3.2
// "longTermDebtToCapitalization" : 0.6336151826987851,
// "totalDebtToCapitalization" : 0.6640736066961648,
// "interestCoverage" : 41.19054820415879,                          2.4
// "cashFlowToDebtRatio" : 0.8341792349201004,                      2.7
// "companyEquityMultiplier" : 5.563512442542399,
// "receivablesTurnover" : 7.102415252591931,
// "payablesTurnover" : 3.889140478060004,
// "inventoryTurnover" : 32.367933130699086,                        4.1
// "fixedAssetTurnover" : 9.275278904665315,
// "assetTurnover" : 1.042207736708053,                             4.2
// "operatingCashFlowPerShare" : 6.229345884552985,
// "freeCashFlowPerShare" : 5.56562398361035,
// "cashPerShare" : 3.750552652516527,
// "payoutRatio" : 0.15279890156316012,
// "operatingCashFlowSalesRatio" : 0.284399030116151,
// "freeCashFlowOperatingCashFlowRatio" : 0.8934523923950864,
// "cashFlowCoverageRatios" : 0.8341792349201004,
// "shortTermCoverageRatios" : 6.663549606097483,
// "capitalExpenditureCoverageRatio" : -9.385475868290483,
// "dividendPaidAndCapexCoverageRatio" : 30.76227084565346,
// "dividendPayoutRatio" : 0.15279890156316012,                     1.8
// "priceBookValueRatio" : 39.34818597842333,                       5.5
// "priceToBookRatio" : 39.34818597842333,                          ---
// "priceToSalesRatio" : 6.786117248183458,                         ---
// "priceEarningsRatio" : 26.219656246078664,                       5.2
// "priceToFreeCashFlowsRatio" : 26.706798633489267,                5.6
// "priceToOperatingCashFlowsRatio" : 23.86125313230481,
// "priceCashFlowRatio" : 23.86125313230481,                        5.4
// "priceEarningsToGrowthRatio" : 0.3677417888750864,               5.14
// "priceSalesRatio" : 6.786117248183458,                           5.3
// "dividendYield" : 0.005827647019057021,                          1.7
// "enterpriseValueMultiple" : 20.889553448047103,
// "priceFairValue" : 39.34818597842333

// Valor empresarial de la empresa https://financialmodelingprep.com/api/v3/enterprise-values/AAPL?limit=40&apikey=07469b7ca38e2cfbcb54480fd03cd1c1
// "símbolo" : "AAPL",
//   "fecha": "2021-09-25",
//   "precio de las existencias": 148.639999,
//   "númeroDeAcciones": 16701272000,
//   "capitalización de mercado": 2482477053378.728,            5.1
//   "menosEfectivoYEquivalentesEfectivo": 34940000000,
//   "añadirDeudaTotal": 124719000000,
//   "valor empresarial": 2572256053378.728

// Resultados creciemiento https://financialmodelingprep.com/api/v3/income-statement-growth/AAPL?limit=40&apikey=07469b7ca38e2cfbcb54480fd03cd1c1
// balance crecimiento https://financialmodelingprep.com/api/v3/balance-sheet-statement-growth/AAPL?limit=40&apikey=07469b7ca38e2cfbcb54480fd03cd1c1
// flujo de fondos https://financialmodelingprep.com/api/v3/cash-flow-statement-growth/AAPL?limit=40&apikey=07469b7ca38e2cfbcb54480fd03cd1c1

// Metricas clave de la empresa https://financialmodelingprep.com/api/v3/key-metrics/AAPL?limit=40&apikey=07469b7ca38e2cfbcb54480fd03cd1c1
// "revenuePerShareTTM" : 15.721603439708202,
// "netIncomePerShareTTM" : 3.354009425946797,
// "operatingCashFlowPerShareTTM" : 1.1429947910208258,
// "freeCashFlowPerShareTTM" : 0.9835725642671928,
// "cashPerShareTTM" : 1.916453797521257,
// "bookValuePerShareTTM" : 4.149570541665863,
// "tangibleBookValuePerShareTTM" : 18.218108436047864,
// "shareholdersEquityPerShareTTM" : 4.149570541665863,
// "interestDebtPerShareTTM" : 6.2513376081682965,
// "marketCapTTM" : 2029331208000,
// "enterpriseValueTTM" : 2101792208000,
// "peRatioTTM" : 34.73454758318499,
// "priceToSalesRatioTTM" : 7.410185637029544,
// "pocfratioTTM" : 101.92522390758413,
// "pfcfRatioTTM" : 118.44576011206443,
// "pbRatioTTM" : 28.075194488254336,
// "ptbRatioTTM" : 28.075194488254336,
// "evToSalesTTM" : 7.674779932592558,
// "enterpriseValueOverEBITDATTM" : 25.353649718331948,         5.7
// "evToOperatingCashFlowTTM" : 105.56465133098945,
// "evToFreeCashFlowTTM" : 122.67508363975954,
// "earningsYieldTTM" : 0.028789780480230016,                   5.16
// "freeCashFlowYieldTTM" : 0.0084426829550832,
// "debtToEquityTTM" : 3.3903599789712513,                      3.3
// "debtToAssetsTTM" : 0.7722282444287587,                      3.1
// "netDebtToEBITDATTM" : 0.874087745328653,                    3.4
// "currentRatioTTM" : 1.4694496317589543,
// "interestCoverageTTM" : 22.406362741882585,
// "incomeQualityTTM" : 0.34078460906476793,
// "dividendYieldTTM" : 0.006824034334763949,
// "dividendYieldPercentageTTM" : 0.682403433476394900,
// "payoutRatioTTM" : 0.23702974531014653,
// "salesGeneralAndAdministrativeToRevenueTTM" : null,
// "researchAndDevelopementToRevenueTTM" : 0.06530415508823949,
// "intangiblesToTotalAssetsTTM" : 0.0,
// "capexToOperatingCashFlowTTM" : -7.169607490097227,
// "capexToRevenueTTM" : -98.61613251710479,
// "capexToDepreciationTTM" : -1.1447605329492259,
// "stockBasedCompensationToRevenueTTM" : 0.005473659610672723,
// "grahamNumberTTM" : 17.695994489813657,                          5.11
// "roicTTM" : 0.30769819750839994,
// "returnOnTangibleAssetsTTM" : 0.1841030553594837,
// "grahamNetNetTTM" : -7.232943945836169,
// "workingCapitalTTM" : 44747000000,
// "tangibleAssetValueTTM" : null,
// "netCurrentAssetValueTTM" : -6.0276757444908915,
// "investedCapitalTTM" : null,
// "averageReceivablesTTM" : 31376000000,
// "averagePayablesTTM" : 33873000000,
// "averageInventoryTTM" : 3656000000,
// "daysSalesOutstandingTTM" : 10.541085310946954,
// "daysPayablesOutstandingTTM" : 18.781346550328752,
// "daysOfInventoryOnHandTTM" : 2.1149949491070847,
// "receivablesTurnoverTTM" : 8.538020265003897,
// "payablesTurnoverTTM" : 4.791988676574664,
// "inventoryTurnoverTTM" : 42.55329311211664,
// "roeTTM" : 0.808278686256606,
// "capexPerShareTTM" : -0.15942222675363302

// FCF descontado https://financialmodelingprep.com/api/v3/discounted-cash-flow/AAPL?apikey=07469b7ca38e2cfbcb54480fd03cd1c1

// Por medio de los filtros, el usuario selecciona la empresa que desea analizar, y la fecha en la que se hara dicho analisis. 
// ------------------------------- a revisar ----------------------------------
// let empresas = "AAPL";
// let fechas = "Sep/2020";


// // function seleccionarfiltro1(i) {
// //     console.log(i);
// //     // let homeFilters__select1 = document.getElementById("home-filters__select").value;
// //     // empresas = homeFilters__select1;
// // }

// // function seleccionarfiltro2() {
// //     let homeFilters__select2 = document.getElementById("home-filters__select2").value;
// //     fechas = homeFilters__select2;
// //     console.log(fechas);
// // }

// // Se crean variables vacias, ordenadas por las paginas HTML, en las que luego de seleccionar los valores de los filtros, estas variables, tomaran los valores correspondientes de las Bases de Datos.

// // Resultados
// let busquedaA1;
// let resultadoA1;
// let busquedaA2;
// let resultadoA2;
// let busquedaA3;
// let resultadoA3;
// let busquedaA4;
// let resultadoA4;
// let busquedaA5;
// let resultadoA5;
// let busquedaA6;
// let resultadoA6;

// let busquedaA7;
// let resultadoA7;
// let busquedaA8;
// let resultadoA8;
// let busquedaA9;
// let resultadoA9;
// let busquedaA10;
// let resultadoA10;
// let busquedaA11;
// let resultadoA11;
// let busquedaA12;
// let resultadoA12;
// let busquedaA13;
// let resultadoA13;
// let busquedaA14;
// let resultadoA14;
// let busquedaA15;
// let resultadoA15;
// let busquedaA16;
// let resultadoA16;

// // let resultadoA12;
// // let resultadoA13;
// // let resultadoA14;
// // let resultadoA15;
// // let resultadoA16;

// // Patrimonio
// let busquedaB1;
// let resultadoB1;
// let busquedaB2;
// let resultadoB2;
// let busquedaB3;
// let resultadoB3;

// // Variables que se utilizan para las columnas de los graficos estaticos (graficos de columnas).
// // Grafico de columnas Revenue 
// let mes1 = revenue.find(i => i.Fecha === "Dic/2018");
// let mes2 = revenue.find(i => i.Fecha === "Mar/2019");
// let mes3 = revenue.find(i => i.Fecha === "Jun/2019");
// let mes4 = revenue.find(i => i.Fecha === "Sep/2019");
// let mes5 = revenue.find(i => i.Fecha === "Dic/2019");
// let mes6 = revenue.find(i => i.Fecha === "Mar/2020");
// let mes7 = revenue.find(i => i.Fecha === "Jun/2020");
// let mes8 = revenue.find(i => i.Fecha === "Sep/2020");
// let mes9 = revenue.find(i => i.Fecha === "Dic/2020");
// let mes10 = revenue.find(i => i.Fecha === "Mar/2021");
// let mes11 = revenue.find(i => i.Fecha === "Jun/2021");
// let mes12 = revenue.find(i => i.Fecha === "Sep/2021");
// let valor1 = Object.entries(mes1).filter(([i]) => i.includes(empresas));
// let valor2 = Object.entries(mes2).filter(([i]) => i.includes(empresas));
// let valor3 = Object.entries(mes3).filter(([i]) => i.includes(empresas));
// let valor4 = Object.entries(mes4).filter(([i]) => i.includes(empresas));
// let valor5 = Object.entries(mes5).filter(([i]) => i.includes(empresas));
// let valor6 = Object.entries(mes6).filter(([i]) => i.includes(empresas));
// let valor7 = Object.entries(mes7).filter(([i]) => i.includes(empresas));
// let valor8 = Object.entries(mes8).filter(([i]) => i.includes(empresas));
// let valor9 = Object.entries(mes9).filter(([i]) => i.includes(empresas));
// let valor10 = Object.entries(mes10).filter(([i]) => i.includes(empresas));
// let valor11 = Object.entries(mes11).filter(([i]) => i.includes(empresas));
// let valor12 = Object.entries(mes12).filter(([i]) => i.includes(empresas));

// // Grafico de columnas Gross Profit 
// let mes13 = grossProfit.find(i => i.Fecha === "Dic/2018");
// let mes14 = grossProfit.find(i => i.Fecha === "Mar/2019");
// let mes15 = grossProfit.find(i => i.Fecha === "Jun/2019");
// let mes16 = grossProfit.find(i => i.Fecha === "Sep/2019");
// let mes17 = grossProfit.find(i => i.Fecha === "Dic/2019");
// let mes18 = grossProfit.find(i => i.Fecha === "Mar/2020");
// let mes19 = grossProfit.find(i => i.Fecha === "Jun/2020");
// let mes20 = grossProfit.find(i => i.Fecha === "Sep/2020");
// let mes21 = grossProfit.find(i => i.Fecha === "Dic/2020");
// let mes22 = grossProfit.find(i => i.Fecha === "Mar/2021");
// let mes23 = grossProfit.find(i => i.Fecha === "Jun/2021");
// let mes24 = grossProfit.find(i => i.Fecha === "Sep/2021");
// let valor13 = Object.entries(mes13).filter(([i]) => i.includes(empresas));
// let valor14 = Object.entries(mes14).filter(([i]) => i.includes(empresas));
// let valor15 = Object.entries(mes15).filter(([i]) => i.includes(empresas));
// let valor16 = Object.entries(mes16).filter(([i]) => i.includes(empresas));
// let valor17 = Object.entries(mes17).filter(([i]) => i.includes(empresas));
// let valor18 = Object.entries(mes18).filter(([i]) => i.includes(empresas));
// let valor19 = Object.entries(mes19).filter(([i]) => i.includes(empresas));
// let valor20 = Object.entries(mes20).filter(([i]) => i.includes(empresas));
// let valor21 = Object.entries(mes21).filter(([i]) => i.includes(empresas));
// let valor22 = Object.entries(mes22).filter(([i]) => i.includes(empresas));
// let valor23 = Object.entries(mes23).filter(([i]) => i.includes(empresas));
// let valor24 = Object.entries(mes24).filter(([i]) => i.includes(empresas));

// // Grafico de columnas Operating Income
// let mes25 = operatingIncome.find(i => i.Fecha === "Dic/2018");
// let mes26 = operatingIncome.find(i => i.Fecha === "Mar/2019");
// let mes27 = operatingIncome.find(i => i.Fecha === "Jun/2019");
// let mes28 = operatingIncome.find(i => i.Fecha === "Sep/2019");
// let mes29 = operatingIncome.find(i => i.Fecha === "Dic/2019");
// let mes30 = operatingIncome.find(i => i.Fecha === "Mar/2020");
// let mes31 = operatingIncome.find(i => i.Fecha === "Jun/2020");
// let mes32 = operatingIncome.find(i => i.Fecha === "Sep/2020");
// let mes33 = operatingIncome.find(i => i.Fecha === "Dic/2020");
// let mes34 = operatingIncome.find(i => i.Fecha === "Mar/2021");
// let mes35 = operatingIncome.find(i => i.Fecha === "Jun/2021");
// let mes36 = operatingIncome.find(i => i.Fecha === "Sep/2021");
// let valor25 = Object.entries(mes25).filter(([i]) => i.includes(empresas));
// let valor26 = Object.entries(mes26).filter(([i]) => i.includes(empresas));
// let valor27 = Object.entries(mes27).filter(([i]) => i.includes(empresas));
// let valor28 = Object.entries(mes28).filter(([i]) => i.includes(empresas));
// let valor29 = Object.entries(mes29).filter(([i]) => i.includes(empresas));
// let valor30 = Object.entries(mes30).filter(([i]) => i.includes(empresas));
// let valor31 = Object.entries(mes31).filter(([i]) => i.includes(empresas));
// let valor32 = Object.entries(mes32).filter(([i]) => i.includes(empresas));
// let valor33 = Object.entries(mes33).filter(([i]) => i.includes(empresas));
// let valor34 = Object.entries(mes34).filter(([i]) => i.includes(empresas));
// let valor35 = Object.entries(mes35).filter(([i]) => i.includes(empresas));
// let valor36 = Object.entries(mes36).filter(([i]) => i.includes(empresas));

// // Grafico de columnas Net Income
// let mes37 = netIncome.find(i => i.Fecha === "Dic/2018");
// let mes38 = netIncome.find(i => i.Fecha === "Mar/2019");
// let mes39 = netIncome.find(i => i.Fecha === "Jun/2019");
// let mes40 = netIncome.find(i => i.Fecha === "Sep/2019");
// let mes41 = netIncome.find(i => i.Fecha === "Dic/2019");
// let mes42 = netIncome.find(i => i.Fecha === "Mar/2020");
// let mes43 = netIncome.find(i => i.Fecha === "Jun/2020");
// let mes44 = netIncome.find(i => i.Fecha === "Sep/2020");
// let mes45 = netIncome.find(i => i.Fecha === "Dic/2020");
// let mes46 = netIncome.find(i => i.Fecha === "Mar/2021");
// let mes47 = netIncome.find(i => i.Fecha === "Jun/2021");
// let mes48 = netIncome.find(i => i.Fecha === "Sep/2021");
// let valor37 = Object.entries(mes37).filter(([i]) => i.includes(empresas));
// let valor38 = Object.entries(mes38).filter(([i]) => i.includes(empresas));
// let valor39 = Object.entries(mes39).filter(([i]) => i.includes(empresas));
// let valor40 = Object.entries(mes40).filter(([i]) => i.includes(empresas));
// let valor41 = Object.entries(mes41).filter(([i]) => i.includes(empresas));
// let valor42 = Object.entries(mes42).filter(([i]) => i.includes(empresas));
// let valor43 = Object.entries(mes43).filter(([i]) => i.includes(empresas));
// let valor44 = Object.entries(mes44).filter(([i]) => i.includes(empresas));
// let valor45 = Object.entries(mes45).filter(([i]) => i.includes(empresas));
// let valor46 = Object.entries(mes46).filter(([i]) => i.includes(empresas));
// let valor47 = Object.entries(mes47).filter(([i]) => i.includes(empresas));
// let valor48 = Object.entries(mes48).filter(([i]) => i.includes(empresas));


// // document.addEventListener('DOMContentLoaded', function () {
// //     const chart = Highcharts.chart('WeighingPlot', {
// //         chart: {
// //             type: 'waterfall',
// //         },
// //         title: {
// //             text: 'Highcharts Waterfall',
// //         },
// //         xAxis: {
// //             type: 'category',
// //         },
// //         yAxis: {
// //             title: {
// //                 text: 'USD',
// //             },
// //         },
// //         legend: {
// //             enabled: false,
// //         },
// //         tooltip: {
// //             pointFormat: '<b>${point.y:,.2f}</b> USD',
// //         },
// //         series: [{
// //             upColor: Highcharts.getOptions().colors[2],
// //             color: Highcharts.getOptions().colors[3],
// //             data: [{
// //                 name: 'Revenue',
// //                 y: 120000,
// //             }, {
// //                 name: 'Cost of Goods',
// //                 y: 569000,
// //             }, {
// //                 name: 'Operating Expenses',
// //                 y: 231000,
// //             }, {
// //                 name: 'Non-Operating Income',
// //                 isIntermediateSum: true,
// //                 color: Highcharts.getOptions().colors[1],
// //             }, {
// //                 name: 'Interest Expense on Debt',
// //                 y: -342000,
// //             }, {
// //                 name: 'Taxes',
// //                 y: -233000,
// //             }, {
// //                 name: 'Others',
// //                 isSum: true,
// //                 color: Highcharts.getOptions().colors[1],
// //             }, {
// //                 name: 'Net Income',
// //                 isSum: true,
// //                 color: Highcharts.getOptions().colors[1],
// //             }],
// //             dataLabels: {
// //                 enabled: true,
// //                 formatter: function () {
// //                     return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'k';
// //                 },
// //                 style: {
// //                     fontWeight: 'bold',
// //                 }
// //             },
// //             pointPadding: 0,
// //         }]
// //     });
// // });

// // A traves de este Switch se establecera las condiciones a ejecutar dependiendo de la fecha que el usuario haya seleccionado en el filtro, y el nombre de la empresa, para asi buscar los valores que se desean encontrar en los distintos arrays objects, ubicados en las bases de datos (ej: resultado.js) y asignando dichos valores en las variables vacias de mas arriba.
// switch(fechas){
//     case "Dic/2018":
//         // RESULTADO - Grafico 1
//         busquedaA1 = revenueGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA1 = Object.entries(busquedaA1).filter(([i]) => i.includes(empresas));

//         busquedaA2 = revenueGrowthY.find(i => i.Fecha === fechas);
//         resultadoA2 = Object.entries(busquedaA2).filter(([i]) => i.includes(empresas));

//         // Grafico 2
//         busquedaA3 = revenue.find(i => i.Fecha === fechas);
//         resultadoA3 = Object.entries(busquedaA3).filter(([i]) => i.includes(empresas));

//         // Grafico 3
//         busquedaA4 = grossProfit.find(i => i.Fecha === fechas);
//         resultadoA4 = Object.entries(busquedaA4).filter(([i]) => i.includes(empresas));

//         // Grafico 4
//         busquedaA5 = operatingIncome.find(i => i.Fecha === fechas);
//         resultadoA5 = Object.entries(busquedaA5).filter(([i]) => i.includes(empresas));

//         // Grafico 5
//         busquedaA6 = netIncome.find(i => i.Fecha === fechas);
//         resultadoA6 = Object.entries(busquedaA6).filter(([i]) => i.includes(empresas));

//         // Grafico 7
//         busquedaA7 = grossProfitGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA7 = Object.entries(busquedaA7).filter(([i]) => i.includes(empresas));

//         busquedaA8 = grossProfitGrowthY.find(i => i.Fecha === fechas);
//         resultadoA8 = Object.entries(busquedaA8).filter(([i]) => i.includes(empresas));

//         // Grafico 8
//         busquedaA9 = ebitda.find(i => i.Fecha === fechas);
//         resultadoA9 = Object.entries(busquedaA9).filter(([i]) => i.includes(empresas));

//         // Grafico 9
//         busquedaA10 = ebit.find(i => i.Fecha === fechas);
//         resultadoA10 = Object.entries(busquedaA10).filter(([i]) => i.includes(empresas)); 

//         // Grafico 10
//         busquedaA11 = ebitdaGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA11 = Object.entries(busquedaA11).filter(([i]) => i.includes(empresas));

//         busquedaA12 = ebitdaGrowthY.find(i => i.Fecha === fechas);
//         resultadoA12 = Object.entries(busquedaA12).filter(([i]) => i.includes(empresas));

//         // Grafico 12
//         busquedaA13 = netIncomeGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA13 = Object.entries(busquedaA13).filter(([i]) => i.includes(empresas));

//         busquedaA14 = netIncomeGrowthY.find(i => i.Fecha === fechas);
//         resultadoA14 = Object.entries(busquedaA14).filter(([i]) => i.includes(empresas));

//         // Grafico 13
//         busquedaA15 = epsGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA15 = Object.entries(busquedaA15).filter(([i]) => i.includes(empresas));

//         busquedaA16 = epsGrowthY.find(i => i.Fecha === fechas);
//         resultadoA16 = Object.entries(busquedaA16).filter(([i]) => i.includes(empresas));

//         // PATRIMONIO - Grafico 1
//         busquedaB1 = assetsCurrentGrowthY.find(i => i.Fecha === fechas);
//         resultadoB1 = Object.entries(busquedaB1).filter(([i]) => i.includes(empresas));

//         busquedaB2 = assetsNonCurrentGrowthY.find(i => i.Fecha === fechas);
//         resultadoB2 = Object.entries(busquedaB2).filter(([i]) => i.includes(empresas));

//         // Grafico 2
//         busquedaB3 = totalAssets.find(i => i.Fecha === fechas);
//         resultadoB3 = Object.entries(busquedaB3).filter(([i]) => i.includes(empresas));


//         break;
//     case "Mar/2019":
//         // RESULTADO - Grafico 1
//         busquedaA1 = revenueGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA1 = Object.entries(busquedaA1).filter(([i]) => i.includes(empresas));

//         busquedaA2 = revenueGrowthY.find(i => i.Fecha === fechas);
//         resultadoA2 = Object.entries(busquedaA2).filter(([i]) => i.includes(empresas));

//         // Grafico 2
//         busquedaA3 = revenue.find(i => i.Fecha === fechas);
//         resultadoA3 = Object.entries(busquedaA3).filter(([i]) => i.includes(empresas));

//         // Grafico 3
//         busquedaA4 = grossProfit.find(i => i.Fecha === fechas);
//         resultadoA4 = Object.entries(busquedaA4).filter(([i]) => i.includes(empresas));

//         // Grafico 4
//         busquedaA5 = operatingIncome.find(i => i.Fecha === fechas);
//         resultadoA5 = Object.entries(busquedaA5).filter(([i]) => i.includes(empresas));

//         // Grafico 5
//         busquedaA6 = netIncome.find(i => i.Fecha === fechas);
//         resultadoA6 = Object.entries(busquedaA6).filter(([i]) => i.includes(empresas));

//         // Grafico 7
//         busquedaA7 = grossProfitGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA7 = Object.entries(busquedaA7).filter(([i]) => i.includes(empresas));

//         busquedaA8 = grossProfitGrowthY.find(i => i.Fecha === fechas);
//         resultadoA8 = Object.entries(busquedaA8).filter(([i]) => i.includes(empresas));

//         // Grafico 8
//         busquedaA9 = ebitda.find(i => i.Fecha === fechas);
//         resultadoA9 = Object.entries(busquedaA9).filter(([i]) => i.includes(empresas));

//         // Grafico 9
//         busquedaA10 = ebit.find(i => i.Fecha === fechas);
//         resultadoA10 = Object.entries(busquedaA10).filter(([i]) => i.includes(empresas)); 

//         // Grafico 10
//         busquedaA11 = ebitdaGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA11 = Object.entries(busquedaA11).filter(([i]) => i.includes(empresas));

//         busquedaA12 = ebitdaGrowthY.find(i => i.Fecha === fechas);
//         resultadoA12 = Object.entries(busquedaA12).filter(([i]) => i.includes(empresas));


//         // Grafico 9
//         // resultadoA11 = (resultadoA4[0][1]/resultadoA3[0][1])*100
//         // resultadoA12 = (resultadoA5[0][1]/resultadoA3[0][1])*100
        
//         // resultadoA14 = (resultadoA6[0][1]/resultadoA3[0][1])*100
//         // resultadoA15 = (resultadoA9[0][1]/resultadoA3[0][1])*100

//         // Grafico 12
//         busquedaA13 = netIncomeGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA13 = Object.entries(busquedaA13).filter(([i]) => i.includes(empresas));

//         busquedaA14 = netIncomeGrowthY.find(i => i.Fecha === fechas);
//         resultadoA14 = Object.entries(busquedaA14).filter(([i]) => i.includes(empresas));

//         // Grafico 13
//         busquedaA15 = epsGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA15 = Object.entries(busquedaA15).filter(([i]) => i.includes(empresas));

//         busquedaA16 = epsGrowthY.find(i => i.Fecha === fechas);
//         resultadoA16 = Object.entries(busquedaA16).filter(([i]) => i.includes(empresas));

//         // PATRIMONIO - Grafico 1
//         busquedaB1 = assetsCurrentGrowthY.find(i => i.Fecha === fechas);
//         resultadoB1 = Object.entries(busquedaB1).filter(([i]) => i.includes(empresas));

//         busquedaB2 = assetsNonCurrentGrowthY.find(i => i.Fecha === fechas);
//         resultadoB2 = Object.entries(busquedaB2).filter(([i]) => i.includes(empresas));

//         // Grafico 2
//         busquedaB3 = totalAssets.find(i => i.Fecha === fechas);
//         resultadoB3 = Object.entries(busquedaB3).filter(([i]) => i.includes(empresas));


//         break;
//     case "Jun/2019":
//         // RESULTADO - Grafico 1
//         busquedaA1 = revenueGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA1 = Object.entries(busquedaA1).filter(([i]) => i.includes(empresas));

//         busquedaA2 = revenueGrowthY.find(i => i.Fecha === fechas);
//         resultadoA2 = Object.entries(busquedaA2).filter(([i]) => i.includes(empresas));

//         // Grafico 2
//         busquedaA3 = revenue.find(i => i.Fecha === fechas);
//         resultadoA3 = Object.entries(busquedaA3).filter(([i]) => i.includes(empresas));

//         // Grafico 3
//         busquedaA4 = grossProfit.find(i => i.Fecha === fechas);
//         resultadoA4 = Object.entries(busquedaA4).filter(([i]) => i.includes(empresas));

//         // Grafico 4
//         busquedaA5 = operatingIncome.find(i => i.Fecha === fechas);
//         resultadoA5 = Object.entries(busquedaA5).filter(([i]) => i.includes(empresas));

//         // Grafico 5
//         busquedaA6 = netIncome.find(i => i.Fecha === fechas);
//         resultadoA6 = Object.entries(busquedaA6).filter(([i]) => i.includes(empresas));

//         // Grafico 7
//         busquedaA7 = grossProfitGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA7 = Object.entries(busquedaA7).filter(([i]) => i.includes(empresas));

//         busquedaA8 = grossProfitGrowthY.find(i => i.Fecha === fechas);
//         resultadoA8 = Object.entries(busquedaA8).filter(([i]) => i.includes(empresas));

//         // Grafico 8
//         busquedaA9 = ebitda.find(i => i.Fecha === fechas);
//         resultadoA9 = Object.entries(busquedaA9).filter(([i]) => i.includes(empresas));

//         // Grafico 9
//         busquedaA10 = ebit.find(i => i.Fecha === fechas);
//         resultadoA10 = Object.entries(busquedaA10).filter(([i]) => i.includes(empresas)); 

//         // Grafico 10
//         busquedaA11 = ebitdaGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA11 = Object.entries(busquedaA11).filter(([i]) => i.includes(empresas));

//         busquedaA12 = ebitdaGrowthY.find(i => i.Fecha === fechas);
//         resultadoA12 = Object.entries(busquedaA12).filter(([i]) => i.includes(empresas));

//         // Grafico 12
//         busquedaA13 = netIncomeGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA13 = Object.entries(busquedaA13).filter(([i]) => i.includes(empresas));

//         busquedaA14 = netIncomeGrowthY.find(i => i.Fecha === fechas);
//         resultadoA14 = Object.entries(busquedaA14).filter(([i]) => i.includes(empresas));

//         // Grafico 13
//         busquedaA15 = epsGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA15 = Object.entries(busquedaA15).filter(([i]) => i.includes(empresas));

//         busquedaA16 = epsGrowthY.find(i => i.Fecha === fechas);
//         resultadoA16 = Object.entries(busquedaA16).filter(([i]) => i.includes(empresas));

//         // PATRIMONIO - Grafico 1
//         busquedaB1 = assetsCurrentGrowthY.find(i => i.Fecha === fechas);
//         resultadoB1 = Object.entries(busquedaB1).filter(([i]) => i.includes(empresas));

//         busquedaB2 = assetsNonCurrentGrowthY.find(i => i.Fecha === fechas);
//         resultadoB2 = Object.entries(busquedaB2).filter(([i]) => i.includes(empresas));

//         // Grafico 2
//         busquedaB3 = totalAssets.find(i => i.Fecha === fechas);
//         resultadoB3 = Object.entries(busquedaB3).filter(([i]) => i.includes(empresas));

//         break;
//     case "Sep/2019":
//         // RESULTADO - Grafico 1
//         busquedaA1 = revenueGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA1 = Object.entries(busquedaA1).filter(([i]) => i.includes(empresas));

//         busquedaA2 = revenueGrowthY.find(i => i.Fecha === fechas);
//         resultadoA2 = Object.entries(busquedaA2).filter(([i]) => i.includes(empresas));

//         // Grafico 2
//         busquedaA3 = revenue.find(i => i.Fecha === fechas);
//         resultadoA3 = Object.entries(busquedaA3).filter(([i]) => i.includes(empresas));

//         // Grafico 3
//         busquedaA4 = grossProfit.find(i => i.Fecha === fechas);
//         resultadoA4 = Object.entries(busquedaA4).filter(([i]) => i.includes(empresas));

//         // Grafico 4
//         busquedaA5 = operatingIncome.find(i => i.Fecha === fechas);
//         resultadoA5 = Object.entries(busquedaA5).filter(([i]) => i.includes(empresas));

//         // Grafico 5
//         busquedaA6 = netIncome.find(i => i.Fecha === fechas);
//         resultadoA6 = Object.entries(busquedaA6).filter(([i]) => i.includes(empresas));

//         // Grafico 7
//         busquedaA7 = grossProfitGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA7 = Object.entries(busquedaA7).filter(([i]) => i.includes(empresas));

//         busquedaA8 = grossProfitGrowthY.find(i => i.Fecha === fechas);
//         resultadoA8 = Object.entries(busquedaA8).filter(([i]) => i.includes(empresas));

//         // Grafico 8
//         busquedaA9 = ebitda.find(i => i.Fecha === fechas);
//         resultadoA9 = Object.entries(busquedaA9).filter(([i]) => i.includes(empresas));

//         // Grafico 9
//         busquedaA10 = ebit.find(i => i.Fecha === fechas);
//         resultadoA10 = Object.entries(busquedaA10).filter(([i]) => i.includes(empresas)); 

//         // Grafico 10
//         busquedaA11 = ebitdaGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA11 = Object.entries(busquedaA11).filter(([i]) => i.includes(empresas));

//         busquedaA12 = ebitdaGrowthY.find(i => i.Fecha === fechas);
//         resultadoA12 = Object.entries(busquedaA12).filter(([i]) => i.includes(empresas));

//         // Grafico 12
//         busquedaA13 = netIncomeGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA13 = Object.entries(busquedaA13).filter(([i]) => i.includes(empresas));

//         busquedaA14 = netIncomeGrowthY.find(i => i.Fecha === fechas);
//         resultadoA14 = Object.entries(busquedaA14).filter(([i]) => i.includes(empresas));

//         // Grafico 13
//         busquedaA15 = epsGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA15 = Object.entries(busquedaA15).filter(([i]) => i.includes(empresas));

//         busquedaA16 = epsGrowthY.find(i => i.Fecha === fechas);
//         resultadoA16 = Object.entries(busquedaA16).filter(([i]) => i.includes(empresas));

//         // PATRIMONIO - Grafico 1
//         busquedaB1 = assetsCurrentGrowthY.find(i => i.Fecha === fechas);
//         resultadoB1 = Object.entries(busquedaB1).filter(([i]) => i.includes(empresas));

//         busquedaB2 = assetsNonCurrentGrowthY.find(i => i.Fecha === fechas);
//         resultadoB2 = Object.entries(busquedaB2).filter(([i]) => i.includes(empresas));

//         // Grafico 2
//         busquedaB3 = totalAssets.find(i => i.Fecha === fechas);
//         resultadoB3 = Object.entries(busquedaB3).filter(([i]) => i.includes(empresas));

//         break;
//     case "Dic/2019":
//         // RESULTADO - Grafico 1
//         busquedaA1 = revenueGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA1 = Object.entries(busquedaA1).filter(([i]) => i.includes(empresas));

//         busquedaA2 = revenueGrowthY.find(i => i.Fecha === fechas);
//         resultadoA2 = Object.entries(busquedaA2).filter(([i]) => i.includes(empresas));

//         // Grafico 2
//         busquedaA3 = revenue.find(i => i.Fecha === fechas);
//         resultadoA3 = Object.entries(busquedaA3).filter(([i]) => i.includes(empresas));

//         // Grafico 3
//         busquedaA4 = grossProfit.find(i => i.Fecha === fechas);
//         resultadoA4 = Object.entries(busquedaA4).filter(([i]) => i.includes(empresas));

//         // Grafico 4
//         busquedaA5 = operatingIncome.find(i => i.Fecha === fechas);
//         resultadoA5 = Object.entries(busquedaA5).filter(([i]) => i.includes(empresas));

//         // Grafico 5
//         busquedaA6 = netIncome.find(i => i.Fecha === fechas);
//         resultadoA6 = Object.entries(busquedaA6).filter(([i]) => i.includes(empresas));

//         // Grafico 7
//         busquedaA7 = grossProfitGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA7 = Object.entries(busquedaA7).filter(([i]) => i.includes(empresas));

//         busquedaA8 = grossProfitGrowthY.find(i => i.Fecha === fechas);
//         resultadoA8 = Object.entries(busquedaA8).filter(([i]) => i.includes(empresas));

//         // Grafico 8
//         busquedaA9 = ebitda.find(i => i.Fecha === fechas);
//         resultadoA9 = Object.entries(busquedaA9).filter(([i]) => i.includes(empresas));

//         // Grafico 9
//         busquedaA10 = ebit.find(i => i.Fecha === fechas);
//         resultadoA10 = Object.entries(busquedaA10).filter(([i]) => i.includes(empresas)); 

//         // Grafico 10
//         busquedaA11 = ebitdaGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA11 = Object.entries(busquedaA11).filter(([i]) => i.includes(empresas));

//         busquedaA12 = ebitdaGrowthY.find(i => i.Fecha === fechas);
//         resultadoA12 = Object.entries(busquedaA12).filter(([i]) => i.includes(empresas));

//         // Grafico 12
//         busquedaA13 = netIncomeGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA13 = Object.entries(busquedaA13).filter(([i]) => i.includes(empresas));

//         busquedaA14 = netIncomeGrowthY.find(i => i.Fecha === fechas);
//         resultadoA14 = Object.entries(busquedaA14).filter(([i]) => i.includes(empresas));

//         // Grafico 13
//         busquedaA15 = epsGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA15 = Object.entries(busquedaA15).filter(([i]) => i.includes(empresas));

//         busquedaA16 = epsGrowthY.find(i => i.Fecha === fechas);
//         resultadoA16 = Object.entries(busquedaA16).filter(([i]) => i.includes(empresas));

//         // PATRIMONIO - Grafico 1
//         busquedaB1 = assetsCurrentGrowthY.find(i => i.Fecha === fechas);
//         resultadoB1 = Object.entries(busquedaB1).filter(([i]) => i.includes(empresas));

//         busquedaB2 = assetsNonCurrentGrowthY.find(i => i.Fecha === fechas);
//         resultadoB2 = Object.entries(busquedaB2).filter(([i]) => i.includes(empresas));

//         // Grafico 2
//         busquedaB3 = totalAssets.find(i => i.Fecha === fechas);
//         resultadoB3 = Object.entries(busquedaB3).filter(([i]) => i.includes(empresas));


//         break;
//     case "Mar/2020":
//         // RESULTADO - Grafico 1
//         busquedaA1 = revenueGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA1 = Object.entries(busquedaA1).filter(([i]) => i.includes(empresas));

//         busquedaA2 = revenueGrowthY.find(i => i.Fecha === fechas);
//         resultadoA2 = Object.entries(busquedaA2).filter(([i]) => i.includes(empresas));

//         // Grafico 2
//         busquedaA3 = revenue.find(i => i.Fecha === fechas);
//         resultadoA3 = Object.entries(busquedaA3).filter(([i]) => i.includes(empresas));

//         // Grafico 3
//         busquedaA4 = grossProfit.find(i => i.Fecha === fechas);
//         resultadoA4 = Object.entries(busquedaA4).filter(([i]) => i.includes(empresas));

//         // Grafico 4
//         busquedaA5 = operatingIncome.find(i => i.Fecha === fechas);
//         resultadoA5 = Object.entries(busquedaA5).filter(([i]) => i.includes(empresas));

//         // Grafico 5
//         busquedaA6 = netIncome.find(i => i.Fecha === fechas);
//         resultadoA6 = Object.entries(busquedaA6).filter(([i]) => i.includes(empresas));

//         // Grafico 7
//         busquedaA7 = grossProfitGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA7 = Object.entries(busquedaA7).filter(([i]) => i.includes(empresas));

//         busquedaA8 = grossProfitGrowthY.find(i => i.Fecha === fechas);
//         resultadoA8 = Object.entries(busquedaA8).filter(([i]) => i.includes(empresas));

//         // Grafico 8
//         busquedaA9 = ebitda.find(i => i.Fecha === fechas);
//         resultadoA9 = Object.entries(busquedaA9).filter(([i]) => i.includes(empresas));

//         // Grafico 9
//         busquedaA10 = ebit.find(i => i.Fecha === fechas);
//         resultadoA10 = Object.entries(busquedaA10).filter(([i]) => i.includes(empresas)); 

//         // Grafico 10
//         busquedaA11 = ebitdaGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA11 = Object.entries(busquedaA11).filter(([i]) => i.includes(empresas));

//         busquedaA12 = ebitdaGrowthY.find(i => i.Fecha === fechas);
//         resultadoA12 = Object.entries(busquedaA12).filter(([i]) => i.includes(empresas));

//         // Grafico 12
//         busquedaA13 = netIncomeGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA13 = Object.entries(busquedaA13).filter(([i]) => i.includes(empresas));

//         busquedaA14 = netIncomeGrowthY.find(i => i.Fecha === fechas);
//         resultadoA14 = Object.entries(busquedaA14).filter(([i]) => i.includes(empresas));

//         // Grafico 13
//         busquedaA15 = epsGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA15 = Object.entries(busquedaA15).filter(([i]) => i.includes(empresas));

//         busquedaA16 = epsGrowthY.find(i => i.Fecha === fechas);
//         resultadoA16 = Object.entries(busquedaA16).filter(([i]) => i.includes(empresas));

//         // PATRIMONIO - Grafico 1
//         busquedaB1 = assetsCurrentGrowthY.find(i => i.Fecha === fechas);
//         resultadoB1 = Object.entries(busquedaB1).filter(([i]) => i.includes(empresas));

//         busquedaB2 = assetsNonCurrentGrowthY.find(i => i.Fecha === fechas);
//         resultadoB2 = Object.entries(busquedaB2).filter(([i]) => i.includes(empresas));

//         // Grafico 2
//         busquedaB3 = totalAssets.find(i => i.Fecha === fechas);
//         resultadoB3 = Object.entries(busquedaB3).filter(([i]) => i.includes(empresas));


//         break;
//     case "Jun/2020":
//         // RESULTADO - Grafico 1
//         busquedaA1 = revenueGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA1 = Object.entries(busquedaA1).filter(([i]) => i.includes(empresas));

//         busquedaA2 = revenueGrowthY.find(i => i.Fecha === fechas);
//         resultadoA2 = Object.entries(busquedaA2).filter(([i]) => i.includes(empresas));

//         // Grafico 2
//         busquedaA3 = revenue.find(i => i.Fecha === fechas);
//         resultadoA3 = Object.entries(busquedaA3).filter(([i]) => i.includes(empresas));

//         // Grafico 3
//         busquedaA4 = grossProfit.find(i => i.Fecha === fechas);
//         resultadoA4 = Object.entries(busquedaA4).filter(([i]) => i.includes(empresas));

//         // Grafico 4
//         busquedaA5 = operatingIncome.find(i => i.Fecha === fechas);
//         resultadoA5 = Object.entries(busquedaA5).filter(([i]) => i.includes(empresas));

//         // Grafico 5
//         busquedaA6 = netIncome.find(i => i.Fecha === fechas);
//         resultadoA6 = Object.entries(busquedaA6).filter(([i]) => i.includes(empresas));

//         // Grafico 7
//         busquedaA7 = grossProfitGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA7 = Object.entries(busquedaA7).filter(([i]) => i.includes(empresas));

//         busquedaA8 = grossProfitGrowthY.find(i => i.Fecha === fechas);
//         resultadoA8 = Object.entries(busquedaA8).filter(([i]) => i.includes(empresas));

//         // Grafico 8
//         busquedaA9 = ebitda.find(i => i.Fecha === fechas);
//         resultadoA9 = Object.entries(busquedaA9).filter(([i]) => i.includes(empresas));

//         // Grafico 9
//         busquedaA10 = ebit.find(i => i.Fecha === fechas);
//         resultadoA10 = Object.entries(busquedaA10).filter(([i]) => i.includes(empresas)); 

//         // Grafico 10
//         busquedaA11 = ebitdaGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA11 = Object.entries(busquedaA11).filter(([i]) => i.includes(empresas));

//         busquedaA12 = ebitdaGrowthY.find(i => i.Fecha === fechas);
//         resultadoA12 = Object.entries(busquedaA12).filter(([i]) => i.includes(empresas));

//         // Grafico 12
//         busquedaA13 = netIncomeGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA13 = Object.entries(busquedaA13).filter(([i]) => i.includes(empresas));

//         busquedaA14 = netIncomeGrowthY.find(i => i.Fecha === fechas);
//         resultadoA14 = Object.entries(busquedaA14).filter(([i]) => i.includes(empresas));

//         // Grafico 13
//         busquedaA15 = epsGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA15 = Object.entries(busquedaA15).filter(([i]) => i.includes(empresas));

//         busquedaA16 = epsGrowthY.find(i => i.Fecha === fechas);
//         resultadoA16 = Object.entries(busquedaA16).filter(([i]) => i.includes(empresas));

//         // PATRIMONIO - Grafico 1
//         busquedaB1 = assetsCurrentGrowthY.find(i => i.Fecha === fechas);
//         resultadoB1 = Object.entries(busquedaB1).filter(([i]) => i.includes(empresas));

//         busquedaB2 = assetsNonCurrentGrowthY.find(i => i.Fecha === fechas);
//         resultadoB2 = Object.entries(busquedaB2).filter(([i]) => i.includes(empresas));

//         // Grafico 2
//         busquedaB3 = totalAssets.find(i => i.Fecha === fechas);
//         resultadoB3 = Object.entries(busquedaB3).filter(([i]) => i.includes(empresas));


//         break;
//     case "Sep/2020":
//         // RESULTADO - Grafico 1
//         busquedaA1 = revenueGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA1 = Object.entries(busquedaA1).filter(([i]) => i.includes(empresas));

//         busquedaA2 = revenueGrowthY.find(i => i.Fecha === fechas);
//         resultadoA2 = Object.entries(busquedaA2).filter(([i]) => i.includes(empresas));

//         // Grafico 2
//         busquedaA3 = revenue.find(i => i.Fecha === fechas);
//         resultadoA3 = Object.entries(busquedaA3).filter(([i]) => i.includes(empresas));

//         // Grafico 3
//         busquedaA4 = grossProfit.find(i => i.Fecha === fechas);
//         resultadoA4 = Object.entries(busquedaA4).filter(([i]) => i.includes(empresas));

//         // Grafico 4
//         busquedaA5 = operatingIncome.find(i => i.Fecha === fechas);
//         resultadoA5 = Object.entries(busquedaA5).filter(([i]) => i.includes(empresas));

//         // Grafico 5
//         busquedaA6 = netIncome.find(i => i.Fecha === fechas);
//         resultadoA6 = Object.entries(busquedaA6).filter(([i]) => i.includes(empresas));

//         // Grafico 7
//         busquedaA7 = grossProfitGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA7 = Object.entries(busquedaA7).filter(([i]) => i.includes(empresas));

//         busquedaA8 = grossProfitGrowthY.find(i => i.Fecha === fechas);
//         resultadoA8 = Object.entries(busquedaA8).filter(([i]) => i.includes(empresas));

//         // Grafico 8
//         busquedaA9 = ebitda.find(i => i.Fecha === fechas);
//         resultadoA9 = Object.entries(busquedaA9).filter(([i]) => i.includes(empresas));

//         // Grafico 9
//         busquedaA10 = ebit.find(i => i.Fecha === fechas);
//         resultadoA10 = Object.entries(busquedaA10).filter(([i]) => i.includes(empresas)); 

//         // Grafico 10
//         busquedaA11 = ebitdaGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA11 = Object.entries(busquedaA11).filter(([i]) => i.includes(empresas));

//         busquedaA12 = ebitdaGrowthY.find(i => i.Fecha === fechas);
//         resultadoA12 = Object.entries(busquedaA12).filter(([i]) => i.includes(empresas));

//         // Grafico 12
//         busquedaA13 = netIncomeGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA13 = Object.entries(busquedaA13).filter(([i]) => i.includes(empresas));

//         busquedaA14 = netIncomeGrowthY.find(i => i.Fecha === fechas);
//         resultadoA14 = Object.entries(busquedaA14).filter(([i]) => i.includes(empresas));

//         // Grafico 13
//         busquedaA15 = epsGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA15 = Object.entries(busquedaA15).filter(([i]) => i.includes(empresas));

//         busquedaA16 = epsGrowthY.find(i => i.Fecha === fechas);
//         resultadoA16 = Object.entries(busquedaA16).filter(([i]) => i.includes(empresas));

//         // PATRIMONIO - Grafico 1
//         busquedaB1 = assetsCurrentGrowthY.find(i => i.Fecha === fechas);
//         resultadoB1 = Object.entries(busquedaB1).filter(([i]) => i.includes(empresas));

//         busquedaB2 = assetsNonCurrentGrowthY.find(i => i.Fecha === fechas);
//         resultadoB2 = Object.entries(busquedaB2).filter(([i]) => i.includes(empresas));

//         // Grafico 2
//         busquedaB3 = totalAssets.find(i => i.Fecha === fechas);
//         resultadoB3 = Object.entries(busquedaB3).filter(([i]) => i.includes(empresas));


//         break;
//     case "Dic/2020":
//         // RESULTADO - Grafico 1
//         busquedaA1 = revenueGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA1 = Object.entries(busquedaA1).filter(([i]) => i.includes(empresas));

//         busquedaA2 = revenueGrowthY.find(i => i.Fecha === fechas);
//         resultadoA2 = Object.entries(busquedaA2).filter(([i]) => i.includes(empresas));

//         // Grafico 2
//         busquedaA3 = revenue.find(i => i.Fecha === fechas);
//         resultadoA3 = Object.entries(busquedaA3).filter(([i]) => i.includes(empresas));

//         // Grafico 3
//         busquedaA4 = grossProfit.find(i => i.Fecha === fechas);
//         resultadoA4 = Object.entries(busquedaA4).filter(([i]) => i.includes(empresas));

//         // Grafico 4
//         busquedaA5 = operatingIncome.find(i => i.Fecha === fechas);
//         resultadoA5 = Object.entries(busquedaA5).filter(([i]) => i.includes(empresas));

//         // Grafico 5
//         busquedaA6 = netIncome.find(i => i.Fecha === fechas);
//         resultadoA6 = Object.entries(busquedaA6).filter(([i]) => i.includes(empresas));

//         // Grafico 7
//         busquedaA7 = grossProfitGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA7 = Object.entries(busquedaA7).filter(([i]) => i.includes(empresas));

//         busquedaA8 = grossProfitGrowthY.find(i => i.Fecha === fechas);
//         resultadoA8 = Object.entries(busquedaA8).filter(([i]) => i.includes(empresas));

//         // Grafico 8
//         busquedaA9 = ebitda.find(i => i.Fecha === fechas);
//         resultadoA9 = Object.entries(busquedaA9).filter(([i]) => i.includes(empresas));

//         // Grafico 9
//         busquedaA10 = ebit.find(i => i.Fecha === fechas);
//         resultadoA10 = Object.entries(busquedaA10).filter(([i]) => i.includes(empresas)); 

//         // Grafico 10
//         busquedaA11 = ebitdaGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA11 = Object.entries(busquedaA11).filter(([i]) => i.includes(empresas));

//         busquedaA12 = ebitdaGrowthY.find(i => i.Fecha === fechas);
//         resultadoA12 = Object.entries(busquedaA12).filter(([i]) => i.includes(empresas));

//         // Grafico 12
//         busquedaA13 = netIncomeGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA13 = Object.entries(busquedaA13).filter(([i]) => i.includes(empresas));

//         busquedaA14 = netIncomeGrowthY.find(i => i.Fecha === fechas);
//         resultadoA14 = Object.entries(busquedaA14).filter(([i]) => i.includes(empresas));

//         // Grafico 13
//         busquedaA15 = epsGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA15 = Object.entries(busquedaA15).filter(([i]) => i.includes(empresas));

//         busquedaA16 = epsGrowthY.find(i => i.Fecha === fechas);
//         resultadoA16 = Object.entries(busquedaA16).filter(([i]) => i.includes(empresas));

//         // PATRIMONIO - Grafico 1
//         busquedaB1 = assetsCurrentGrowthY.find(i => i.Fecha === fechas);
//         resultadoB1 = Object.entries(busquedaB1).filter(([i]) => i.includes(empresas));

//         busquedaB2 = assetsNonCurrentGrowthY.find(i => i.Fecha === fechas);
//         resultadoB2 = Object.entries(busquedaB2).filter(([i]) => i.includes(empresas));

//         // Grafico 2
//         busquedaB3 = totalAssets.find(i => i.Fecha === fechas);
//         resultadoB3 = Object.entries(busquedaB3).filter(([i]) => i.includes(empresas));


//         break;
//     case "Mar/2021":
//         // RESULTADO - Grafico 1
//         busquedaA1 = revenueGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA1 = Object.entries(busquedaA1).filter(([i]) => i.includes(empresas));

//         busquedaA2 = revenueGrowthY.find(i => i.Fecha === fechas);
//         resultadoA2 = Object.entries(busquedaA2).filter(([i]) => i.includes(empresas));

//         // Grafico 2
//         busquedaA3 = revenue.find(i => i.Fecha === fechas);
//         resultadoA3 = Object.entries(busquedaA3).filter(([i]) => i.includes(empresas));

//         // Grafico 3
//         busquedaA4 = grossProfit.find(i => i.Fecha === fechas);
//         resultadoA4 = Object.entries(busquedaA4).filter(([i]) => i.includes(empresas));

//         // Grafico 4
//         busquedaA5 = operatingIncome.find(i => i.Fecha === fechas);
//         resultadoA5 = Object.entries(busquedaA5).filter(([i]) => i.includes(empresas));

//         // Grafico 5
//         busquedaA6 = netIncome.find(i => i.Fecha === fechas);
//         resultadoA6 = Object.entries(busquedaA6).filter(([i]) => i.includes(empresas));

//         // Grafico 7
//         busquedaA7 = grossProfitGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA7 = Object.entries(busquedaA7).filter(([i]) => i.includes(empresas));

//         busquedaA8 = grossProfitGrowthY.find(i => i.Fecha === fechas);
//         resultadoA8 = Object.entries(busquedaA8).filter(([i]) => i.includes(empresas));

//         // Grafico 8
//         busquedaA9 = ebitda.find(i => i.Fecha === fechas);
//         resultadoA9 = Object.entries(busquedaA9).filter(([i]) => i.includes(empresas));

//         // Grafico 9
//         busquedaA10 = ebit.find(i => i.Fecha === fechas);
//         resultadoA10 = Object.entries(busquedaA10).filter(([i]) => i.includes(empresas)); 

//         // Grafico 10
//         busquedaA11 = ebitdaGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA11 = Object.entries(busquedaA11).filter(([i]) => i.includes(empresas));

//         busquedaA12 = ebitdaGrowthY.find(i => i.Fecha === fechas);
//         resultadoA12 = Object.entries(busquedaA12).filter(([i]) => i.includes(empresas));

//         // Grafico 12
//         busquedaA13 = netIncomeGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA13 = Object.entries(busquedaA13).filter(([i]) => i.includes(empresas));

//         busquedaA14 = netIncomeGrowthY.find(i => i.Fecha === fechas);
//         resultadoA14 = Object.entries(busquedaA14).filter(([i]) => i.includes(empresas));

//         // Grafico 13
//         busquedaA15 = epsGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA15 = Object.entries(busquedaA15).filter(([i]) => i.includes(empresas));

//         busquedaA16 = epsGrowthY.find(i => i.Fecha === fechas);
//         resultadoA16 = Object.entries(busquedaA16).filter(([i]) => i.includes(empresas));

//         // PATRIMONIO - Grafico 1
//         busquedaB1 = assetsCurrentGrowthY.find(i => i.Fecha === fechas);
//         resultadoB1 = Object.entries(busquedaB1).filter(([i]) => i.includes(empresas));

//         busquedaB2 = assetsNonCurrentGrowthY.find(i => i.Fecha === fechas);
//         resultadoB2 = Object.entries(busquedaB2).filter(([i]) => i.includes(empresas));

//         // Grafico 2
//         busquedaB3 = totalAssets.find(i => i.Fecha === fechas);
//         resultadoB3 = Object.entries(busquedaB3).filter(([i]) => i.includes(empresas));


//         break;
//     case "Jun/2021":
//         // RESULTADO - Grafico 1
//         busquedaA1 = revenueGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA1 = Object.entries(busquedaA1).filter(([i]) => i.includes(empresas));

//         busquedaA2 = revenueGrowthY.find(i => i.Fecha === fechas);
//         resultadoA2 = Object.entries(busquedaA2).filter(([i]) => i.includes(empresas));

//         // Grafico 2
//         busquedaA3 = revenue.find(i => i.Fecha === fechas);
//         resultadoA3 = Object.entries(busquedaA3).filter(([i]) => i.includes(empresas));

//         // Grafico 3
//         busquedaA4 = grossProfit.find(i => i.Fecha === fechas);
//         resultadoA4 = Object.entries(busquedaA4).filter(([i]) => i.includes(empresas));

//         // Grafico 4
//         busquedaA5 = operatingIncome.find(i => i.Fecha === fechas);
//         resultadoA5 = Object.entries(busquedaA5).filter(([i]) => i.includes(empresas));

//         // Grafico 5
//         busquedaA6 = netIncome.find(i => i.Fecha === fechas);
//         resultadoA6 = Object.entries(busquedaA6).filter(([i]) => i.includes(empresas));

//         // Grafico 7
//         busquedaA7 = grossProfitGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA7 = Object.entries(busquedaA7).filter(([i]) => i.includes(empresas));

//         busquedaA8 = grossProfitGrowthY.find(i => i.Fecha === fechas);
//         resultadoA8 = Object.entries(busquedaA8).filter(([i]) => i.includes(empresas));

//         // Grafico 8
//         busquedaA9 = ebitda.find(i => i.Fecha === fechas);
//         resultadoA9 = Object.entries(busquedaA9).filter(([i]) => i.includes(empresas));

//         // Grafico 9
//         busquedaA10 = ebit.find(i => i.Fecha === fechas);
//         resultadoA10 = Object.entries(busquedaA10).filter(([i]) => i.includes(empresas)); 

//         // Grafico 10
//         busquedaA11 = ebitdaGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA11 = Object.entries(busquedaA11).filter(([i]) => i.includes(empresas));

//         busquedaA12 = ebitdaGrowthY.find(i => i.Fecha === fechas);
//         resultadoA12 = Object.entries(busquedaA12).filter(([i]) => i.includes(empresas));

//         // Grafico 12
//         busquedaA13 = netIncomeGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA13 = Object.entries(busquedaA13).filter(([i]) => i.includes(empresas));

//         busquedaA14 = netIncomeGrowthY.find(i => i.Fecha === fechas);
//         resultadoA14 = Object.entries(busquedaA14).filter(([i]) => i.includes(empresas));

//         // Grafico 13
//         busquedaA15 = epsGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA15 = Object.entries(busquedaA15).filter(([i]) => i.includes(empresas));

//         busquedaA16 = epsGrowthY.find(i => i.Fecha === fechas);
//         resultadoA16 = Object.entries(busquedaA16).filter(([i]) => i.includes(empresas));

//         // PATRIMONIO - Grafico 1
//         busquedaB1 = assetsCurrentGrowthY.find(i => i.Fecha === fechas);
//         resultadoB1 = Object.entries(busquedaB1).filter(([i]) => i.includes(empresas));

//         busquedaB2 = assetsNonCurrentGrowthY.find(i => i.Fecha === fechas);
//         resultadoB2 = Object.entries(busquedaB2).filter(([i]) => i.includes(empresas));

//         // Grafico 2
//         busquedaB3 = totalAssets.find(i => i.Fecha === fechas);
//         resultadoB3 = Object.entries(busquedaB3).filter(([i]) => i.includes(empresas));


//         break;
//     case "Sep/2021":
//         // RESULTADO - Grafico 1
//         busquedaA1 = revenueGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA1 = Object.entries(busquedaA1).filter(([i]) => i.includes(empresas));

//         busquedaA2 = revenueGrowthY.find(i => i.Fecha === fechas);
//         resultadoA2 = Object.entries(busquedaA2).filter(([i]) => i.includes(empresas));

//         // Grafico 2
//         busquedaA3 = revenue.find(i => i.Fecha === fechas);
//         resultadoA3 = Object.entries(busquedaA3).filter(([i]) => i.includes(empresas));

//         // Grafico 3
//         busquedaA4 = grossProfit.find(i => i.Fecha === fechas);
//         resultadoA4 = Object.entries(busquedaA4).filter(([i]) => i.includes(empresas));

//         // Grafico 4
//         busquedaA5 = operatingIncome.find(i => i.Fecha === fechas);
//         resultadoA5 = Object.entries(busquedaA5).filter(([i]) => i.includes(empresas));

//         // Grafico 5
//         busquedaA6 = netIncome.find(i => i.Fecha === fechas);
//         resultadoA6 = Object.entries(busquedaA6).filter(([i]) => i.includes(empresas));

//         // Grafico 7
//         busquedaA7 = grossProfitGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA7 = Object.entries(busquedaA7).filter(([i]) => i.includes(empresas));

//         busquedaA8 = grossProfitGrowthY.find(i => i.Fecha === fechas);
//         resultadoA8 = Object.entries(busquedaA8).filter(([i]) => i.includes(empresas));

//         // Grafico 8
//         busquedaA9 = ebitda.find(i => i.Fecha === fechas);
//         resultadoA9 = Object.entries(busquedaA9).filter(([i]) => i.includes(empresas));

//         // Grafico 9
//         busquedaA10 = ebit.find(i => i.Fecha === fechas);
//         resultadoA10 = Object.entries(busquedaA10).filter(([i]) => i.includes(empresas)); 

//         // Grafico 10
//         busquedaA11 = ebitdaGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA11 = Object.entries(busquedaA11).filter(([i]) => i.includes(empresas));

//         busquedaA12 = ebitdaGrowthY.find(i => i.Fecha === fechas);
//         resultadoA12 = Object.entries(busquedaA12).filter(([i]) => i.includes(empresas));

//         // Grafico 12
//         busquedaA13 = netIncomeGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA13 = Object.entries(busquedaA13).filter(([i]) => i.includes(empresas));

//         busquedaA14 = netIncomeGrowthY.find(i => i.Fecha === fechas);
//         resultadoA14 = Object.entries(busquedaA14).filter(([i]) => i.includes(empresas));

//         // Grafico 13
//         busquedaA15 = epsGrowthQ.find(i => i.Fecha === fechas);
//         resultadoA15 = Object.entries(busquedaA15).filter(([i]) => i.includes(empresas));

//         busquedaA16 = epsGrowthY.find(i => i.Fecha === fechas);
//         resultadoA16 = Object.entries(busquedaA16).filter(([i]) => i.includes(empresas));

//         // PATRIMONIO - Grafico 1
//         busquedaB1 = assetsCurrentGrowthY.find(i => i.Fecha === fechas);
//         resultadoB1 = Object.entries(busquedaB1).filter(([i]) => i.includes(empresas));

//         busquedaB2 = assetsNonCurrentGrowthY.find(i => i.Fecha === fechas);
//         resultadoB2 = Object.entries(busquedaB2).filter(([i]) => i.includes(empresas));

//         // Grafico 2
//         busquedaB3 = totalAssets.find(i => i.Fecha === fechas);
//         resultadoB3 = Object.entries(busquedaB3).filter(([i]) => i.includes(empresas));


//         break;
// }

// // Por medio de estas variables, se les asignan un selector dedsde los archivos .html, en los que luego, por medio de esa funcion, se imprimira un texto en pantalla.
// // Resultados
// let parrafo1;
// let parrafo2;
// let parrafo3;
// let parrafo4;
// let parrafo5;
// let parrafo6;

// let parrafo7;

// let divBanner = document.getElementById("Banner");
// let divRevenue = document.getElementById("Revenue");
// let divGrossProfit = document.getElementById("GrossProfit");
// let divOperatingIncome = document.getElementById("OperatingIncome");
// let divNetIncome = document.getElementById("NetIncome");
// let divEbitda = document.getElementById("Ebitda");
// let divEbit = document.getElementById("Ebit");

// let divAssets = document.getElementById("Assets");

// function resultadosCards(){
//     parrafo1 = document.createElement("p");
//     parrafo2 = document.createElement("p");
//     parrafo3 = document.createElement("p");
//     parrafo4 = document.createElement("p");
//     parrafo5 = document.createElement("p");
//     parrafo6 = document.createElement("p");


//     parrafo1.innerHTML = "<br>"+ resultadoA3[0][1].toFixed(2) +" M";
//     divRevenue.appendChild(parrafo1);

//     parrafo2.innerHTML = "<br>"+ resultadoA4[0][1].toFixed(2) +" M";
//     divGrossProfit.appendChild(parrafo2);

//     parrafo3.innerHTML = "<br>"+ resultadoA5[0][1].toFixed(2) +" M";
//     divOperatingIncome.appendChild(parrafo3);

//     parrafo4.innerHTML = "<br>"+ resultadoA6[0][1].toFixed(2) +" M";
//     divNetIncome.appendChild(parrafo4);

//     parrafo5.innerHTML = "<br>"+ resultadoA9[0][1].toFixed(2) +" M";
//     divEbitda.appendChild(parrafo5);

//     parrafo6.innerHTML = "<br>"+ resultadoA10[0][1].toFixed(2) +" M";
//     divEbit.appendChild(parrafo6);
// }
// resultadosCards();

// function patrimonioCards(){
//     parrafo7 = document.createElement("p");

//     parrafo7.innerHTML = `<br> ${resultadoB3[0][1].toFixed(2)} M`;
//     divAssets.appendChild(parrafo7); 
// }
// patrimonioCards();

// // let prueba = revenue.map((i) => i.AAPL);
// // console.log(prueba);

// // let td;
// // let tablaA1 = document.getElementById("tablaA1");

// // function tablaA() {
// //     td = document.createElement("td");

// //     td.innerHTML = prueba[0];
// //     tablaA1.appendChild(td);
// // }
// // tablaA();
// //