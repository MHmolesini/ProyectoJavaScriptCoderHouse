// Menu Desplegable
let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
   let arrowParent = e.target.parentElement.parentElement;
   arrowParent.classList.toggle("showMenu");
    });
  }
  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".bx-menu");
  console.log(sidebarBtn);
  sidebarBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");
});

const botonSwitch = document.querySelector("#switch");
botonSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    botonSwitch.classList.toggle('active');
});


// Por medio de los filtros, el usuario selecciona la empresa que desea analizar, y la fecha en la que se hara dicho analisis. 
// ------------------------------- a revisar ----------------------------------
let empresas = "AAPL";
let fechas = "Sep/2020";


// function seleccionarfiltro1(i) {
//     console.log(i);
//     // let homeFilters__select1 = document.getElementById("home-filters__select").value;
//     // empresas = homeFilters__select1;
// }

// function seleccionarfiltro2() {
//     let homeFilters__select2 = document.getElementById("home-filters__select2").value;
//     fechas = homeFilters__select2;
//     console.log(fechas);
// }

// Se crean variables vacias, ordenadas por las paginas HTML, en las que luego de seleccionar los valores de los filtros, estas variables, tomaran los valores correspondientes de las Bases de Datos.

// Resultados
let busquedaA1;
let resultadoA1;
let busquedaA2;
let resultadoA2;
let busquedaA3;
let resultadoA3;
let busquedaA4;
let resultadoA4;
let busquedaA5;
let resultadoA5;
let busquedaA6;
let resultadoA6;

let busquedaA7;
let resultadoA7;
let busquedaA8;
let resultadoA8;
let busquedaA9;
let resultadoA9;
let busquedaA10;
let resultadoA10;
let busquedaA11;
let resultadoA11;
let busquedaA12;
let resultadoA12;
let busquedaA13;
let resultadoA13;
let busquedaA14;
let resultadoA14;
let busquedaA15;
let resultadoA15;
let busquedaA16;
let resultadoA16;

// let resultadoA12;
// let resultadoA13;
// let resultadoA14;
// let resultadoA15;
// let resultadoA16;

// Patrimonio
let busquedaB1;
let resultadoB1;
let busquedaB2;
let resultadoB2;
let busquedaB3;
let resultadoB3;

// Variables que se utilizan para las columnas de los graficos estaticos (graficos de columnas).
// Grafico de columnas Revenue 
let mes1 = revenue.find(i => i.Fecha === "Dic/2018");
let mes2 = revenue.find(i => i.Fecha === "Mar/2019");
let mes3 = revenue.find(i => i.Fecha === "Jun/2019");
let mes4 = revenue.find(i => i.Fecha === "Sep/2019");
let mes5 = revenue.find(i => i.Fecha === "Dic/2019");
let mes6 = revenue.find(i => i.Fecha === "Mar/2020");
let mes7 = revenue.find(i => i.Fecha === "Jun/2020");
let mes8 = revenue.find(i => i.Fecha === "Sep/2020");
let mes9 = revenue.find(i => i.Fecha === "Dic/2020");
let mes10 = revenue.find(i => i.Fecha === "Mar/2021");
let mes11 = revenue.find(i => i.Fecha === "Jun/2021");
let mes12 = revenue.find(i => i.Fecha === "Sep/2021");
let valor1 = Object.entries(mes1).filter(([i]) => i.includes(empresas));
let valor2 = Object.entries(mes2).filter(([i]) => i.includes(empresas));
let valor3 = Object.entries(mes3).filter(([i]) => i.includes(empresas));
let valor4 = Object.entries(mes4).filter(([i]) => i.includes(empresas));
let valor5 = Object.entries(mes5).filter(([i]) => i.includes(empresas));
let valor6 = Object.entries(mes6).filter(([i]) => i.includes(empresas));
let valor7 = Object.entries(mes7).filter(([i]) => i.includes(empresas));
let valor8 = Object.entries(mes8).filter(([i]) => i.includes(empresas));
let valor9 = Object.entries(mes9).filter(([i]) => i.includes(empresas));
let valor10 = Object.entries(mes10).filter(([i]) => i.includes(empresas));
let valor11 = Object.entries(mes11).filter(([i]) => i.includes(empresas));
let valor12 = Object.entries(mes12).filter(([i]) => i.includes(empresas));

// Grafico de columnas Gross Profit 
let mes13 = grossProfit.find(i => i.Fecha === "Dic/2018");
let mes14 = grossProfit.find(i => i.Fecha === "Mar/2019");
let mes15 = grossProfit.find(i => i.Fecha === "Jun/2019");
let mes16 = grossProfit.find(i => i.Fecha === "Sep/2019");
let mes17 = grossProfit.find(i => i.Fecha === "Dic/2019");
let mes18 = grossProfit.find(i => i.Fecha === "Mar/2020");
let mes19 = grossProfit.find(i => i.Fecha === "Jun/2020");
let mes20 = grossProfit.find(i => i.Fecha === "Sep/2020");
let mes21 = grossProfit.find(i => i.Fecha === "Dic/2020");
let mes22 = grossProfit.find(i => i.Fecha === "Mar/2021");
let mes23 = grossProfit.find(i => i.Fecha === "Jun/2021");
let mes24 = grossProfit.find(i => i.Fecha === "Sep/2021");
let valor13 = Object.entries(mes13).filter(([i]) => i.includes(empresas));
let valor14 = Object.entries(mes14).filter(([i]) => i.includes(empresas));
let valor15 = Object.entries(mes15).filter(([i]) => i.includes(empresas));
let valor16 = Object.entries(mes16).filter(([i]) => i.includes(empresas));
let valor17 = Object.entries(mes17).filter(([i]) => i.includes(empresas));
let valor18 = Object.entries(mes18).filter(([i]) => i.includes(empresas));
let valor19 = Object.entries(mes19).filter(([i]) => i.includes(empresas));
let valor20 = Object.entries(mes20).filter(([i]) => i.includes(empresas));
let valor21 = Object.entries(mes21).filter(([i]) => i.includes(empresas));
let valor22 = Object.entries(mes22).filter(([i]) => i.includes(empresas));
let valor23 = Object.entries(mes23).filter(([i]) => i.includes(empresas));
let valor24 = Object.entries(mes24).filter(([i]) => i.includes(empresas));

// Grafico de columnas Operating Income
let mes25 = operatingIncome.find(i => i.Fecha === "Dic/2018");
let mes26 = operatingIncome.find(i => i.Fecha === "Mar/2019");
let mes27 = operatingIncome.find(i => i.Fecha === "Jun/2019");
let mes28 = operatingIncome.find(i => i.Fecha === "Sep/2019");
let mes29 = operatingIncome.find(i => i.Fecha === "Dic/2019");
let mes30 = operatingIncome.find(i => i.Fecha === "Mar/2020");
let mes31 = operatingIncome.find(i => i.Fecha === "Jun/2020");
let mes32 = operatingIncome.find(i => i.Fecha === "Sep/2020");
let mes33 = operatingIncome.find(i => i.Fecha === "Dic/2020");
let mes34 = operatingIncome.find(i => i.Fecha === "Mar/2021");
let mes35 = operatingIncome.find(i => i.Fecha === "Jun/2021");
let mes36 = operatingIncome.find(i => i.Fecha === "Sep/2021");
let valor25 = Object.entries(mes25).filter(([i]) => i.includes(empresas));
let valor26 = Object.entries(mes26).filter(([i]) => i.includes(empresas));
let valor27 = Object.entries(mes27).filter(([i]) => i.includes(empresas));
let valor28 = Object.entries(mes28).filter(([i]) => i.includes(empresas));
let valor29 = Object.entries(mes29).filter(([i]) => i.includes(empresas));
let valor30 = Object.entries(mes30).filter(([i]) => i.includes(empresas));
let valor31 = Object.entries(mes31).filter(([i]) => i.includes(empresas));
let valor32 = Object.entries(mes32).filter(([i]) => i.includes(empresas));
let valor33 = Object.entries(mes33).filter(([i]) => i.includes(empresas));
let valor34 = Object.entries(mes34).filter(([i]) => i.includes(empresas));
let valor35 = Object.entries(mes35).filter(([i]) => i.includes(empresas));
let valor36 = Object.entries(mes36).filter(([i]) => i.includes(empresas));

// Grafico de columnas Net Income
let mes37 = netIncome.find(i => i.Fecha === "Dic/2018");
let mes38 = netIncome.find(i => i.Fecha === "Mar/2019");
let mes39 = netIncome.find(i => i.Fecha === "Jun/2019");
let mes40 = netIncome.find(i => i.Fecha === "Sep/2019");
let mes41 = netIncome.find(i => i.Fecha === "Dic/2019");
let mes42 = netIncome.find(i => i.Fecha === "Mar/2020");
let mes43 = netIncome.find(i => i.Fecha === "Jun/2020");
let mes44 = netIncome.find(i => i.Fecha === "Sep/2020");
let mes45 = netIncome.find(i => i.Fecha === "Dic/2020");
let mes46 = netIncome.find(i => i.Fecha === "Mar/2021");
let mes47 = netIncome.find(i => i.Fecha === "Jun/2021");
let mes48 = netIncome.find(i => i.Fecha === "Sep/2021");
let valor37 = Object.entries(mes37).filter(([i]) => i.includes(empresas));
let valor38 = Object.entries(mes38).filter(([i]) => i.includes(empresas));
let valor39 = Object.entries(mes39).filter(([i]) => i.includes(empresas));
let valor40 = Object.entries(mes40).filter(([i]) => i.includes(empresas));
let valor41 = Object.entries(mes41).filter(([i]) => i.includes(empresas));
let valor42 = Object.entries(mes42).filter(([i]) => i.includes(empresas));
let valor43 = Object.entries(mes43).filter(([i]) => i.includes(empresas));
let valor44 = Object.entries(mes44).filter(([i]) => i.includes(empresas));
let valor45 = Object.entries(mes45).filter(([i]) => i.includes(empresas));
let valor46 = Object.entries(mes46).filter(([i]) => i.includes(empresas));
let valor47 = Object.entries(mes47).filter(([i]) => i.includes(empresas));
let valor48 = Object.entries(mes48).filter(([i]) => i.includes(empresas));


// document.addEventListener('DOMContentLoaded', function () {
//     const chart = Highcharts.chart('WeighingPlot', {
//         chart: {
//             type: 'waterfall',
//         },
//         title: {
//             text: 'Highcharts Waterfall',
//         },
//         xAxis: {
//             type: 'category',
//         },
//         yAxis: {
//             title: {
//                 text: 'USD',
//             },
//         },
//         legend: {
//             enabled: false,
//         },
//         tooltip: {
//             pointFormat: '<b>${point.y:,.2f}</b> USD',
//         },
//         series: [{
//             upColor: Highcharts.getOptions().colors[2],
//             color: Highcharts.getOptions().colors[3],
//             data: [{
//                 name: 'Revenue',
//                 y: 120000,
//             }, {
//                 name: 'Cost of Goods',
//                 y: 569000,
//             }, {
//                 name: 'Operating Expenses',
//                 y: 231000,
//             }, {
//                 name: 'Non-Operating Income',
//                 isIntermediateSum: true,
//                 color: Highcharts.getOptions().colors[1],
//             }, {
//                 name: 'Interest Expense on Debt',
//                 y: -342000,
//             }, {
//                 name: 'Taxes',
//                 y: -233000,
//             }, {
//                 name: 'Others',
//                 isSum: true,
//                 color: Highcharts.getOptions().colors[1],
//             }, {
//                 name: 'Net Income',
//                 isSum: true,
//                 color: Highcharts.getOptions().colors[1],
//             }],
//             dataLabels: {
//                 enabled: true,
//                 formatter: function () {
//                     return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'k';
//                 },
//                 style: {
//                     fontWeight: 'bold',
//                 }
//             },
//             pointPadding: 0,
//         }]
//     });
// });

// A traves de este Switch se establecera las condiciones a ejecutar dependiendo de la fecha que el usuario haya seleccionado en el filtro, y el nombre de la empresa, para asi buscar los valores que se desean encontrar en los distintos arrays objects, ubicados en las bases de datos (ej: resultado.js) y asignando dichos valores en las variables vacias de mas arriba.
switch(fechas){
    case "Dic/2018":
        // RESULTADO - Grafico 1
        busquedaA1 = revenueGrowthQ.find(i => i.Fecha === fechas);
        resultadoA1 = Object.entries(busquedaA1).filter(([i]) => i.includes(empresas));

        busquedaA2 = revenueGrowthY.find(i => i.Fecha === fechas);
        resultadoA2 = Object.entries(busquedaA2).filter(([i]) => i.includes(empresas));

        // Grafico 2
        busquedaA3 = revenue.find(i => i.Fecha === fechas);
        resultadoA3 = Object.entries(busquedaA3).filter(([i]) => i.includes(empresas));

        // Grafico 3
        busquedaA4 = grossProfit.find(i => i.Fecha === fechas);
        resultadoA4 = Object.entries(busquedaA4).filter(([i]) => i.includes(empresas));

        // Grafico 4
        busquedaA5 = operatingIncome.find(i => i.Fecha === fechas);
        resultadoA5 = Object.entries(busquedaA5).filter(([i]) => i.includes(empresas));

        // Grafico 5
        busquedaA6 = netIncome.find(i => i.Fecha === fechas);
        resultadoA6 = Object.entries(busquedaA6).filter(([i]) => i.includes(empresas));

        // Grafico 7
        busquedaA7 = grossProfitGrowthQ.find(i => i.Fecha === fechas);
        resultadoA7 = Object.entries(busquedaA7).filter(([i]) => i.includes(empresas));

        busquedaA8 = grossProfitGrowthY.find(i => i.Fecha === fechas);
        resultadoA8 = Object.entries(busquedaA8).filter(([i]) => i.includes(empresas));

        // Grafico 8
        busquedaA9 = ebitda.find(i => i.Fecha === fechas);
        resultadoA9 = Object.entries(busquedaA9).filter(([i]) => i.includes(empresas));

        // Grafico 9
        busquedaA10 = ebit.find(i => i.Fecha === fechas);
        resultadoA10 = Object.entries(busquedaA10).filter(([i]) => i.includes(empresas)); 

        // Grafico 10
        busquedaA11 = ebitdaGrowthQ.find(i => i.Fecha === fechas);
        resultadoA11 = Object.entries(busquedaA11).filter(([i]) => i.includes(empresas));

        busquedaA12 = ebitdaGrowthY.find(i => i.Fecha === fechas);
        resultadoA12 = Object.entries(busquedaA12).filter(([i]) => i.includes(empresas));

        // Grafico 12
        busquedaA13 = netIncomeGrowthQ.find(i => i.Fecha === fechas);
        resultadoA13 = Object.entries(busquedaA13).filter(([i]) => i.includes(empresas));

        busquedaA14 = netIncomeGrowthY.find(i => i.Fecha === fechas);
        resultadoA14 = Object.entries(busquedaA14).filter(([i]) => i.includes(empresas));

        // Grafico 13
        busquedaA15 = epsGrowthQ.find(i => i.Fecha === fechas);
        resultadoA15 = Object.entries(busquedaA15).filter(([i]) => i.includes(empresas));

        busquedaA16 = epsGrowthY.find(i => i.Fecha === fechas);
        resultadoA16 = Object.entries(busquedaA16).filter(([i]) => i.includes(empresas));

        // PATRIMONIO - Grafico 1
        busquedaB1 = assetsCurrentGrowthY.find(i => i.Fecha === fechas);
        resultadoB1 = Object.entries(busquedaB1).filter(([i]) => i.includes(empresas));

        busquedaB2 = assetsNonCurrentGrowthY.find(i => i.Fecha === fechas);
        resultadoB2 = Object.entries(busquedaB2).filter(([i]) => i.includes(empresas));

        // Grafico 2
        busquedaB3 = totalAssets.find(i => i.Fecha === fechas);
        resultadoB3 = Object.entries(busquedaB3).filter(([i]) => i.includes(empresas));


        break;
    case "Mar/2019":
        // RESULTADO - Grafico 1
        busquedaA1 = revenueGrowthQ.find(i => i.Fecha === fechas);
        resultadoA1 = Object.entries(busquedaA1).filter(([i]) => i.includes(empresas));

        busquedaA2 = revenueGrowthY.find(i => i.Fecha === fechas);
        resultadoA2 = Object.entries(busquedaA2).filter(([i]) => i.includes(empresas));

        // Grafico 2
        busquedaA3 = revenue.find(i => i.Fecha === fechas);
        resultadoA3 = Object.entries(busquedaA3).filter(([i]) => i.includes(empresas));

        // Grafico 3
        busquedaA4 = grossProfit.find(i => i.Fecha === fechas);
        resultadoA4 = Object.entries(busquedaA4).filter(([i]) => i.includes(empresas));

        // Grafico 4
        busquedaA5 = operatingIncome.find(i => i.Fecha === fechas);
        resultadoA5 = Object.entries(busquedaA5).filter(([i]) => i.includes(empresas));

        // Grafico 5
        busquedaA6 = netIncome.find(i => i.Fecha === fechas);
        resultadoA6 = Object.entries(busquedaA6).filter(([i]) => i.includes(empresas));

        // Grafico 7
        busquedaA7 = grossProfitGrowthQ.find(i => i.Fecha === fechas);
        resultadoA7 = Object.entries(busquedaA7).filter(([i]) => i.includes(empresas));

        busquedaA8 = grossProfitGrowthY.find(i => i.Fecha === fechas);
        resultadoA8 = Object.entries(busquedaA8).filter(([i]) => i.includes(empresas));

        // Grafico 8
        busquedaA9 = ebitda.find(i => i.Fecha === fechas);
        resultadoA9 = Object.entries(busquedaA9).filter(([i]) => i.includes(empresas));

        // Grafico 9
        busquedaA10 = ebit.find(i => i.Fecha === fechas);
        resultadoA10 = Object.entries(busquedaA10).filter(([i]) => i.includes(empresas)); 

        // Grafico 10
        busquedaA11 = ebitdaGrowthQ.find(i => i.Fecha === fechas);
        resultadoA11 = Object.entries(busquedaA11).filter(([i]) => i.includes(empresas));

        busquedaA12 = ebitdaGrowthY.find(i => i.Fecha === fechas);
        resultadoA12 = Object.entries(busquedaA12).filter(([i]) => i.includes(empresas));


        // Grafico 9
        // resultadoA11 = (resultadoA4[0][1]/resultadoA3[0][1])*100
        // resultadoA12 = (resultadoA5[0][1]/resultadoA3[0][1])*100
        
        // resultadoA14 = (resultadoA6[0][1]/resultadoA3[0][1])*100
        // resultadoA15 = (resultadoA9[0][1]/resultadoA3[0][1])*100

        // Grafico 12
        busquedaA13 = netIncomeGrowthQ.find(i => i.Fecha === fechas);
        resultadoA13 = Object.entries(busquedaA13).filter(([i]) => i.includes(empresas));

        busquedaA14 = netIncomeGrowthY.find(i => i.Fecha === fechas);
        resultadoA14 = Object.entries(busquedaA14).filter(([i]) => i.includes(empresas));

        // Grafico 13
        busquedaA15 = epsGrowthQ.find(i => i.Fecha === fechas);
        resultadoA15 = Object.entries(busquedaA15).filter(([i]) => i.includes(empresas));

        busquedaA16 = epsGrowthY.find(i => i.Fecha === fechas);
        resultadoA16 = Object.entries(busquedaA16).filter(([i]) => i.includes(empresas));

        // PATRIMONIO - Grafico 1
        busquedaB1 = assetsCurrentGrowthY.find(i => i.Fecha === fechas);
        resultadoB1 = Object.entries(busquedaB1).filter(([i]) => i.includes(empresas));

        busquedaB2 = assetsNonCurrentGrowthY.find(i => i.Fecha === fechas);
        resultadoB2 = Object.entries(busquedaB2).filter(([i]) => i.includes(empresas));

        // Grafico 2
        busquedaB3 = totalAssets.find(i => i.Fecha === fechas);
        resultadoB3 = Object.entries(busquedaB3).filter(([i]) => i.includes(empresas));


        break;
    case "Jun/2019":
        // RESULTADO - Grafico 1
        busquedaA1 = revenueGrowthQ.find(i => i.Fecha === fechas);
        resultadoA1 = Object.entries(busquedaA1).filter(([i]) => i.includes(empresas));

        busquedaA2 = revenueGrowthY.find(i => i.Fecha === fechas);
        resultadoA2 = Object.entries(busquedaA2).filter(([i]) => i.includes(empresas));

        // Grafico 2
        busquedaA3 = revenue.find(i => i.Fecha === fechas);
        resultadoA3 = Object.entries(busquedaA3).filter(([i]) => i.includes(empresas));

        // Grafico 3
        busquedaA4 = grossProfit.find(i => i.Fecha === fechas);
        resultadoA4 = Object.entries(busquedaA4).filter(([i]) => i.includes(empresas));

        // Grafico 4
        busquedaA5 = operatingIncome.find(i => i.Fecha === fechas);
        resultadoA5 = Object.entries(busquedaA5).filter(([i]) => i.includes(empresas));

        // Grafico 5
        busquedaA6 = netIncome.find(i => i.Fecha === fechas);
        resultadoA6 = Object.entries(busquedaA6).filter(([i]) => i.includes(empresas));

        // Grafico 7
        busquedaA7 = grossProfitGrowthQ.find(i => i.Fecha === fechas);
        resultadoA7 = Object.entries(busquedaA7).filter(([i]) => i.includes(empresas));

        busquedaA8 = grossProfitGrowthY.find(i => i.Fecha === fechas);
        resultadoA8 = Object.entries(busquedaA8).filter(([i]) => i.includes(empresas));

        // Grafico 8
        busquedaA9 = ebitda.find(i => i.Fecha === fechas);
        resultadoA9 = Object.entries(busquedaA9).filter(([i]) => i.includes(empresas));

        // Grafico 9
        busquedaA10 = ebit.find(i => i.Fecha === fechas);
        resultadoA10 = Object.entries(busquedaA10).filter(([i]) => i.includes(empresas)); 

        // Grafico 10
        busquedaA11 = ebitdaGrowthQ.find(i => i.Fecha === fechas);
        resultadoA11 = Object.entries(busquedaA11).filter(([i]) => i.includes(empresas));

        busquedaA12 = ebitdaGrowthY.find(i => i.Fecha === fechas);
        resultadoA12 = Object.entries(busquedaA12).filter(([i]) => i.includes(empresas));

        // Grafico 12
        busquedaA13 = netIncomeGrowthQ.find(i => i.Fecha === fechas);
        resultadoA13 = Object.entries(busquedaA13).filter(([i]) => i.includes(empresas));

        busquedaA14 = netIncomeGrowthY.find(i => i.Fecha === fechas);
        resultadoA14 = Object.entries(busquedaA14).filter(([i]) => i.includes(empresas));

        // Grafico 13
        busquedaA15 = epsGrowthQ.find(i => i.Fecha === fechas);
        resultadoA15 = Object.entries(busquedaA15).filter(([i]) => i.includes(empresas));

        busquedaA16 = epsGrowthY.find(i => i.Fecha === fechas);
        resultadoA16 = Object.entries(busquedaA16).filter(([i]) => i.includes(empresas));

        // PATRIMONIO - Grafico 1
        busquedaB1 = assetsCurrentGrowthY.find(i => i.Fecha === fechas);
        resultadoB1 = Object.entries(busquedaB1).filter(([i]) => i.includes(empresas));

        busquedaB2 = assetsNonCurrentGrowthY.find(i => i.Fecha === fechas);
        resultadoB2 = Object.entries(busquedaB2).filter(([i]) => i.includes(empresas));

        // Grafico 2
        busquedaB3 = totalAssets.find(i => i.Fecha === fechas);
        resultadoB3 = Object.entries(busquedaB3).filter(([i]) => i.includes(empresas));

        break;
    case "Sep/2019":
        // RESULTADO - Grafico 1
        busquedaA1 = revenueGrowthQ.find(i => i.Fecha === fechas);
        resultadoA1 = Object.entries(busquedaA1).filter(([i]) => i.includes(empresas));

        busquedaA2 = revenueGrowthY.find(i => i.Fecha === fechas);
        resultadoA2 = Object.entries(busquedaA2).filter(([i]) => i.includes(empresas));

        // Grafico 2
        busquedaA3 = revenue.find(i => i.Fecha === fechas);
        resultadoA3 = Object.entries(busquedaA3).filter(([i]) => i.includes(empresas));

        // Grafico 3
        busquedaA4 = grossProfit.find(i => i.Fecha === fechas);
        resultadoA4 = Object.entries(busquedaA4).filter(([i]) => i.includes(empresas));

        // Grafico 4
        busquedaA5 = operatingIncome.find(i => i.Fecha === fechas);
        resultadoA5 = Object.entries(busquedaA5).filter(([i]) => i.includes(empresas));

        // Grafico 5
        busquedaA6 = netIncome.find(i => i.Fecha === fechas);
        resultadoA6 = Object.entries(busquedaA6).filter(([i]) => i.includes(empresas));

        // Grafico 7
        busquedaA7 = grossProfitGrowthQ.find(i => i.Fecha === fechas);
        resultadoA7 = Object.entries(busquedaA7).filter(([i]) => i.includes(empresas));

        busquedaA8 = grossProfitGrowthY.find(i => i.Fecha === fechas);
        resultadoA8 = Object.entries(busquedaA8).filter(([i]) => i.includes(empresas));

        // Grafico 8
        busquedaA9 = ebitda.find(i => i.Fecha === fechas);
        resultadoA9 = Object.entries(busquedaA9).filter(([i]) => i.includes(empresas));

        // Grafico 9
        busquedaA10 = ebit.find(i => i.Fecha === fechas);
        resultadoA10 = Object.entries(busquedaA10).filter(([i]) => i.includes(empresas)); 

        // Grafico 10
        busquedaA11 = ebitdaGrowthQ.find(i => i.Fecha === fechas);
        resultadoA11 = Object.entries(busquedaA11).filter(([i]) => i.includes(empresas));

        busquedaA12 = ebitdaGrowthY.find(i => i.Fecha === fechas);
        resultadoA12 = Object.entries(busquedaA12).filter(([i]) => i.includes(empresas));

        // Grafico 12
        busquedaA13 = netIncomeGrowthQ.find(i => i.Fecha === fechas);
        resultadoA13 = Object.entries(busquedaA13).filter(([i]) => i.includes(empresas));

        busquedaA14 = netIncomeGrowthY.find(i => i.Fecha === fechas);
        resultadoA14 = Object.entries(busquedaA14).filter(([i]) => i.includes(empresas));

        // Grafico 13
        busquedaA15 = epsGrowthQ.find(i => i.Fecha === fechas);
        resultadoA15 = Object.entries(busquedaA15).filter(([i]) => i.includes(empresas));

        busquedaA16 = epsGrowthY.find(i => i.Fecha === fechas);
        resultadoA16 = Object.entries(busquedaA16).filter(([i]) => i.includes(empresas));

        // PATRIMONIO - Grafico 1
        busquedaB1 = assetsCurrentGrowthY.find(i => i.Fecha === fechas);
        resultadoB1 = Object.entries(busquedaB1).filter(([i]) => i.includes(empresas));

        busquedaB2 = assetsNonCurrentGrowthY.find(i => i.Fecha === fechas);
        resultadoB2 = Object.entries(busquedaB2).filter(([i]) => i.includes(empresas));

        // Grafico 2
        busquedaB3 = totalAssets.find(i => i.Fecha === fechas);
        resultadoB3 = Object.entries(busquedaB3).filter(([i]) => i.includes(empresas));

        break;
    case "Dic/2019":
        // RESULTADO - Grafico 1
        busquedaA1 = revenueGrowthQ.find(i => i.Fecha === fechas);
        resultadoA1 = Object.entries(busquedaA1).filter(([i]) => i.includes(empresas));

        busquedaA2 = revenueGrowthY.find(i => i.Fecha === fechas);
        resultadoA2 = Object.entries(busquedaA2).filter(([i]) => i.includes(empresas));

        // Grafico 2
        busquedaA3 = revenue.find(i => i.Fecha === fechas);
        resultadoA3 = Object.entries(busquedaA3).filter(([i]) => i.includes(empresas));

        // Grafico 3
        busquedaA4 = grossProfit.find(i => i.Fecha === fechas);
        resultadoA4 = Object.entries(busquedaA4).filter(([i]) => i.includes(empresas));

        // Grafico 4
        busquedaA5 = operatingIncome.find(i => i.Fecha === fechas);
        resultadoA5 = Object.entries(busquedaA5).filter(([i]) => i.includes(empresas));

        // Grafico 5
        busquedaA6 = netIncome.find(i => i.Fecha === fechas);
        resultadoA6 = Object.entries(busquedaA6).filter(([i]) => i.includes(empresas));

        // Grafico 7
        busquedaA7 = grossProfitGrowthQ.find(i => i.Fecha === fechas);
        resultadoA7 = Object.entries(busquedaA7).filter(([i]) => i.includes(empresas));

        busquedaA8 = grossProfitGrowthY.find(i => i.Fecha === fechas);
        resultadoA8 = Object.entries(busquedaA8).filter(([i]) => i.includes(empresas));

        // Grafico 8
        busquedaA9 = ebitda.find(i => i.Fecha === fechas);
        resultadoA9 = Object.entries(busquedaA9).filter(([i]) => i.includes(empresas));

        // Grafico 9
        busquedaA10 = ebit.find(i => i.Fecha === fechas);
        resultadoA10 = Object.entries(busquedaA10).filter(([i]) => i.includes(empresas)); 

        // Grafico 10
        busquedaA11 = ebitdaGrowthQ.find(i => i.Fecha === fechas);
        resultadoA11 = Object.entries(busquedaA11).filter(([i]) => i.includes(empresas));

        busquedaA12 = ebitdaGrowthY.find(i => i.Fecha === fechas);
        resultadoA12 = Object.entries(busquedaA12).filter(([i]) => i.includes(empresas));

        // Grafico 12
        busquedaA13 = netIncomeGrowthQ.find(i => i.Fecha === fechas);
        resultadoA13 = Object.entries(busquedaA13).filter(([i]) => i.includes(empresas));

        busquedaA14 = netIncomeGrowthY.find(i => i.Fecha === fechas);
        resultadoA14 = Object.entries(busquedaA14).filter(([i]) => i.includes(empresas));

        // Grafico 13
        busquedaA15 = epsGrowthQ.find(i => i.Fecha === fechas);
        resultadoA15 = Object.entries(busquedaA15).filter(([i]) => i.includes(empresas));

        busquedaA16 = epsGrowthY.find(i => i.Fecha === fechas);
        resultadoA16 = Object.entries(busquedaA16).filter(([i]) => i.includes(empresas));

        // PATRIMONIO - Grafico 1
        busquedaB1 = assetsCurrentGrowthY.find(i => i.Fecha === fechas);
        resultadoB1 = Object.entries(busquedaB1).filter(([i]) => i.includes(empresas));

        busquedaB2 = assetsNonCurrentGrowthY.find(i => i.Fecha === fechas);
        resultadoB2 = Object.entries(busquedaB2).filter(([i]) => i.includes(empresas));

        // Grafico 2
        busquedaB3 = totalAssets.find(i => i.Fecha === fechas);
        resultadoB3 = Object.entries(busquedaB3).filter(([i]) => i.includes(empresas));


        break;
    case "Mar/2020":
        // RESULTADO - Grafico 1
        busquedaA1 = revenueGrowthQ.find(i => i.Fecha === fechas);
        resultadoA1 = Object.entries(busquedaA1).filter(([i]) => i.includes(empresas));

        busquedaA2 = revenueGrowthY.find(i => i.Fecha === fechas);
        resultadoA2 = Object.entries(busquedaA2).filter(([i]) => i.includes(empresas));

        // Grafico 2
        busquedaA3 = revenue.find(i => i.Fecha === fechas);
        resultadoA3 = Object.entries(busquedaA3).filter(([i]) => i.includes(empresas));

        // Grafico 3
        busquedaA4 = grossProfit.find(i => i.Fecha === fechas);
        resultadoA4 = Object.entries(busquedaA4).filter(([i]) => i.includes(empresas));

        // Grafico 4
        busquedaA5 = operatingIncome.find(i => i.Fecha === fechas);
        resultadoA5 = Object.entries(busquedaA5).filter(([i]) => i.includes(empresas));

        // Grafico 5
        busquedaA6 = netIncome.find(i => i.Fecha === fechas);
        resultadoA6 = Object.entries(busquedaA6).filter(([i]) => i.includes(empresas));

        // Grafico 7
        busquedaA7 = grossProfitGrowthQ.find(i => i.Fecha === fechas);
        resultadoA7 = Object.entries(busquedaA7).filter(([i]) => i.includes(empresas));

        busquedaA8 = grossProfitGrowthY.find(i => i.Fecha === fechas);
        resultadoA8 = Object.entries(busquedaA8).filter(([i]) => i.includes(empresas));

        // Grafico 8
        busquedaA9 = ebitda.find(i => i.Fecha === fechas);
        resultadoA9 = Object.entries(busquedaA9).filter(([i]) => i.includes(empresas));

        // Grafico 9
        busquedaA10 = ebit.find(i => i.Fecha === fechas);
        resultadoA10 = Object.entries(busquedaA10).filter(([i]) => i.includes(empresas)); 

        // Grafico 10
        busquedaA11 = ebitdaGrowthQ.find(i => i.Fecha === fechas);
        resultadoA11 = Object.entries(busquedaA11).filter(([i]) => i.includes(empresas));

        busquedaA12 = ebitdaGrowthY.find(i => i.Fecha === fechas);
        resultadoA12 = Object.entries(busquedaA12).filter(([i]) => i.includes(empresas));

        // Grafico 12
        busquedaA13 = netIncomeGrowthQ.find(i => i.Fecha === fechas);
        resultadoA13 = Object.entries(busquedaA13).filter(([i]) => i.includes(empresas));

        busquedaA14 = netIncomeGrowthY.find(i => i.Fecha === fechas);
        resultadoA14 = Object.entries(busquedaA14).filter(([i]) => i.includes(empresas));

        // Grafico 13
        busquedaA15 = epsGrowthQ.find(i => i.Fecha === fechas);
        resultadoA15 = Object.entries(busquedaA15).filter(([i]) => i.includes(empresas));

        busquedaA16 = epsGrowthY.find(i => i.Fecha === fechas);
        resultadoA16 = Object.entries(busquedaA16).filter(([i]) => i.includes(empresas));

        // PATRIMONIO - Grafico 1
        busquedaB1 = assetsCurrentGrowthY.find(i => i.Fecha === fechas);
        resultadoB1 = Object.entries(busquedaB1).filter(([i]) => i.includes(empresas));

        busquedaB2 = assetsNonCurrentGrowthY.find(i => i.Fecha === fechas);
        resultadoB2 = Object.entries(busquedaB2).filter(([i]) => i.includes(empresas));

        // Grafico 2
        busquedaB3 = totalAssets.find(i => i.Fecha === fechas);
        resultadoB3 = Object.entries(busquedaB3).filter(([i]) => i.includes(empresas));


        break;
    case "Jun/2020":
        // RESULTADO - Grafico 1
        busquedaA1 = revenueGrowthQ.find(i => i.Fecha === fechas);
        resultadoA1 = Object.entries(busquedaA1).filter(([i]) => i.includes(empresas));

        busquedaA2 = revenueGrowthY.find(i => i.Fecha === fechas);
        resultadoA2 = Object.entries(busquedaA2).filter(([i]) => i.includes(empresas));

        // Grafico 2
        busquedaA3 = revenue.find(i => i.Fecha === fechas);
        resultadoA3 = Object.entries(busquedaA3).filter(([i]) => i.includes(empresas));

        // Grafico 3
        busquedaA4 = grossProfit.find(i => i.Fecha === fechas);
        resultadoA4 = Object.entries(busquedaA4).filter(([i]) => i.includes(empresas));

        // Grafico 4
        busquedaA5 = operatingIncome.find(i => i.Fecha === fechas);
        resultadoA5 = Object.entries(busquedaA5).filter(([i]) => i.includes(empresas));

        // Grafico 5
        busquedaA6 = netIncome.find(i => i.Fecha === fechas);
        resultadoA6 = Object.entries(busquedaA6).filter(([i]) => i.includes(empresas));

        // Grafico 7
        busquedaA7 = grossProfitGrowthQ.find(i => i.Fecha === fechas);
        resultadoA7 = Object.entries(busquedaA7).filter(([i]) => i.includes(empresas));

        busquedaA8 = grossProfitGrowthY.find(i => i.Fecha === fechas);
        resultadoA8 = Object.entries(busquedaA8).filter(([i]) => i.includes(empresas));

        // Grafico 8
        busquedaA9 = ebitda.find(i => i.Fecha === fechas);
        resultadoA9 = Object.entries(busquedaA9).filter(([i]) => i.includes(empresas));

        // Grafico 9
        busquedaA10 = ebit.find(i => i.Fecha === fechas);
        resultadoA10 = Object.entries(busquedaA10).filter(([i]) => i.includes(empresas)); 

        // Grafico 10
        busquedaA11 = ebitdaGrowthQ.find(i => i.Fecha === fechas);
        resultadoA11 = Object.entries(busquedaA11).filter(([i]) => i.includes(empresas));

        busquedaA12 = ebitdaGrowthY.find(i => i.Fecha === fechas);
        resultadoA12 = Object.entries(busquedaA12).filter(([i]) => i.includes(empresas));

        // Grafico 12
        busquedaA13 = netIncomeGrowthQ.find(i => i.Fecha === fechas);
        resultadoA13 = Object.entries(busquedaA13).filter(([i]) => i.includes(empresas));

        busquedaA14 = netIncomeGrowthY.find(i => i.Fecha === fechas);
        resultadoA14 = Object.entries(busquedaA14).filter(([i]) => i.includes(empresas));

        // Grafico 13
        busquedaA15 = epsGrowthQ.find(i => i.Fecha === fechas);
        resultadoA15 = Object.entries(busquedaA15).filter(([i]) => i.includes(empresas));

        busquedaA16 = epsGrowthY.find(i => i.Fecha === fechas);
        resultadoA16 = Object.entries(busquedaA16).filter(([i]) => i.includes(empresas));

        // PATRIMONIO - Grafico 1
        busquedaB1 = assetsCurrentGrowthY.find(i => i.Fecha === fechas);
        resultadoB1 = Object.entries(busquedaB1).filter(([i]) => i.includes(empresas));

        busquedaB2 = assetsNonCurrentGrowthY.find(i => i.Fecha === fechas);
        resultadoB2 = Object.entries(busquedaB2).filter(([i]) => i.includes(empresas));

        // Grafico 2
        busquedaB3 = totalAssets.find(i => i.Fecha === fechas);
        resultadoB3 = Object.entries(busquedaB3).filter(([i]) => i.includes(empresas));


        break;
    case "Sep/2020":
        // RESULTADO - Grafico 1
        busquedaA1 = revenueGrowthQ.find(i => i.Fecha === fechas);
        resultadoA1 = Object.entries(busquedaA1).filter(([i]) => i.includes(empresas));

        busquedaA2 = revenueGrowthY.find(i => i.Fecha === fechas);
        resultadoA2 = Object.entries(busquedaA2).filter(([i]) => i.includes(empresas));

        // Grafico 2
        busquedaA3 = revenue.find(i => i.Fecha === fechas);
        resultadoA3 = Object.entries(busquedaA3).filter(([i]) => i.includes(empresas));

        // Grafico 3
        busquedaA4 = grossProfit.find(i => i.Fecha === fechas);
        resultadoA4 = Object.entries(busquedaA4).filter(([i]) => i.includes(empresas));

        // Grafico 4
        busquedaA5 = operatingIncome.find(i => i.Fecha === fechas);
        resultadoA5 = Object.entries(busquedaA5).filter(([i]) => i.includes(empresas));

        // Grafico 5
        busquedaA6 = netIncome.find(i => i.Fecha === fechas);
        resultadoA6 = Object.entries(busquedaA6).filter(([i]) => i.includes(empresas));

        // Grafico 7
        busquedaA7 = grossProfitGrowthQ.find(i => i.Fecha === fechas);
        resultadoA7 = Object.entries(busquedaA7).filter(([i]) => i.includes(empresas));

        busquedaA8 = grossProfitGrowthY.find(i => i.Fecha === fechas);
        resultadoA8 = Object.entries(busquedaA8).filter(([i]) => i.includes(empresas));

        // Grafico 8
        busquedaA9 = ebitda.find(i => i.Fecha === fechas);
        resultadoA9 = Object.entries(busquedaA9).filter(([i]) => i.includes(empresas));

        // Grafico 9
        busquedaA10 = ebit.find(i => i.Fecha === fechas);
        resultadoA10 = Object.entries(busquedaA10).filter(([i]) => i.includes(empresas)); 

        // Grafico 10
        busquedaA11 = ebitdaGrowthQ.find(i => i.Fecha === fechas);
        resultadoA11 = Object.entries(busquedaA11).filter(([i]) => i.includes(empresas));

        busquedaA12 = ebitdaGrowthY.find(i => i.Fecha === fechas);
        resultadoA12 = Object.entries(busquedaA12).filter(([i]) => i.includes(empresas));

        // Grafico 12
        busquedaA13 = netIncomeGrowthQ.find(i => i.Fecha === fechas);
        resultadoA13 = Object.entries(busquedaA13).filter(([i]) => i.includes(empresas));

        busquedaA14 = netIncomeGrowthY.find(i => i.Fecha === fechas);
        resultadoA14 = Object.entries(busquedaA14).filter(([i]) => i.includes(empresas));

        // Grafico 13
        busquedaA15 = epsGrowthQ.find(i => i.Fecha === fechas);
        resultadoA15 = Object.entries(busquedaA15).filter(([i]) => i.includes(empresas));

        busquedaA16 = epsGrowthY.find(i => i.Fecha === fechas);
        resultadoA16 = Object.entries(busquedaA16).filter(([i]) => i.includes(empresas));

        // PATRIMONIO - Grafico 1
        busquedaB1 = assetsCurrentGrowthY.find(i => i.Fecha === fechas);
        resultadoB1 = Object.entries(busquedaB1).filter(([i]) => i.includes(empresas));

        busquedaB2 = assetsNonCurrentGrowthY.find(i => i.Fecha === fechas);
        resultadoB2 = Object.entries(busquedaB2).filter(([i]) => i.includes(empresas));

        // Grafico 2
        busquedaB3 = totalAssets.find(i => i.Fecha === fechas);
        resultadoB3 = Object.entries(busquedaB3).filter(([i]) => i.includes(empresas));


        break;
    case "Dic/2020":
        // RESULTADO - Grafico 1
        busquedaA1 = revenueGrowthQ.find(i => i.Fecha === fechas);
        resultadoA1 = Object.entries(busquedaA1).filter(([i]) => i.includes(empresas));

        busquedaA2 = revenueGrowthY.find(i => i.Fecha === fechas);
        resultadoA2 = Object.entries(busquedaA2).filter(([i]) => i.includes(empresas));

        // Grafico 2
        busquedaA3 = revenue.find(i => i.Fecha === fechas);
        resultadoA3 = Object.entries(busquedaA3).filter(([i]) => i.includes(empresas));

        // Grafico 3
        busquedaA4 = grossProfit.find(i => i.Fecha === fechas);
        resultadoA4 = Object.entries(busquedaA4).filter(([i]) => i.includes(empresas));

        // Grafico 4
        busquedaA5 = operatingIncome.find(i => i.Fecha === fechas);
        resultadoA5 = Object.entries(busquedaA5).filter(([i]) => i.includes(empresas));

        // Grafico 5
        busquedaA6 = netIncome.find(i => i.Fecha === fechas);
        resultadoA6 = Object.entries(busquedaA6).filter(([i]) => i.includes(empresas));

        // Grafico 7
        busquedaA7 = grossProfitGrowthQ.find(i => i.Fecha === fechas);
        resultadoA7 = Object.entries(busquedaA7).filter(([i]) => i.includes(empresas));

        busquedaA8 = grossProfitGrowthY.find(i => i.Fecha === fechas);
        resultadoA8 = Object.entries(busquedaA8).filter(([i]) => i.includes(empresas));

        // Grafico 8
        busquedaA9 = ebitda.find(i => i.Fecha === fechas);
        resultadoA9 = Object.entries(busquedaA9).filter(([i]) => i.includes(empresas));

        // Grafico 9
        busquedaA10 = ebit.find(i => i.Fecha === fechas);
        resultadoA10 = Object.entries(busquedaA10).filter(([i]) => i.includes(empresas)); 

        // Grafico 10
        busquedaA11 = ebitdaGrowthQ.find(i => i.Fecha === fechas);
        resultadoA11 = Object.entries(busquedaA11).filter(([i]) => i.includes(empresas));

        busquedaA12 = ebitdaGrowthY.find(i => i.Fecha === fechas);
        resultadoA12 = Object.entries(busquedaA12).filter(([i]) => i.includes(empresas));

        // Grafico 12
        busquedaA13 = netIncomeGrowthQ.find(i => i.Fecha === fechas);
        resultadoA13 = Object.entries(busquedaA13).filter(([i]) => i.includes(empresas));

        busquedaA14 = netIncomeGrowthY.find(i => i.Fecha === fechas);
        resultadoA14 = Object.entries(busquedaA14).filter(([i]) => i.includes(empresas));

        // Grafico 13
        busquedaA15 = epsGrowthQ.find(i => i.Fecha === fechas);
        resultadoA15 = Object.entries(busquedaA15).filter(([i]) => i.includes(empresas));

        busquedaA16 = epsGrowthY.find(i => i.Fecha === fechas);
        resultadoA16 = Object.entries(busquedaA16).filter(([i]) => i.includes(empresas));

        // PATRIMONIO - Grafico 1
        busquedaB1 = assetsCurrentGrowthY.find(i => i.Fecha === fechas);
        resultadoB1 = Object.entries(busquedaB1).filter(([i]) => i.includes(empresas));

        busquedaB2 = assetsNonCurrentGrowthY.find(i => i.Fecha === fechas);
        resultadoB2 = Object.entries(busquedaB2).filter(([i]) => i.includes(empresas));

        // Grafico 2
        busquedaB3 = totalAssets.find(i => i.Fecha === fechas);
        resultadoB3 = Object.entries(busquedaB3).filter(([i]) => i.includes(empresas));


        break;
    case "Mar/2021":
        // RESULTADO - Grafico 1
        busquedaA1 = revenueGrowthQ.find(i => i.Fecha === fechas);
        resultadoA1 = Object.entries(busquedaA1).filter(([i]) => i.includes(empresas));

        busquedaA2 = revenueGrowthY.find(i => i.Fecha === fechas);
        resultadoA2 = Object.entries(busquedaA2).filter(([i]) => i.includes(empresas));

        // Grafico 2
        busquedaA3 = revenue.find(i => i.Fecha === fechas);
        resultadoA3 = Object.entries(busquedaA3).filter(([i]) => i.includes(empresas));

        // Grafico 3
        busquedaA4 = grossProfit.find(i => i.Fecha === fechas);
        resultadoA4 = Object.entries(busquedaA4).filter(([i]) => i.includes(empresas));

        // Grafico 4
        busquedaA5 = operatingIncome.find(i => i.Fecha === fechas);
        resultadoA5 = Object.entries(busquedaA5).filter(([i]) => i.includes(empresas));

        // Grafico 5
        busquedaA6 = netIncome.find(i => i.Fecha === fechas);
        resultadoA6 = Object.entries(busquedaA6).filter(([i]) => i.includes(empresas));

        // Grafico 7
        busquedaA7 = grossProfitGrowthQ.find(i => i.Fecha === fechas);
        resultadoA7 = Object.entries(busquedaA7).filter(([i]) => i.includes(empresas));

        busquedaA8 = grossProfitGrowthY.find(i => i.Fecha === fechas);
        resultadoA8 = Object.entries(busquedaA8).filter(([i]) => i.includes(empresas));

        // Grafico 8
        busquedaA9 = ebitda.find(i => i.Fecha === fechas);
        resultadoA9 = Object.entries(busquedaA9).filter(([i]) => i.includes(empresas));

        // Grafico 9
        busquedaA10 = ebit.find(i => i.Fecha === fechas);
        resultadoA10 = Object.entries(busquedaA10).filter(([i]) => i.includes(empresas)); 

        // Grafico 10
        busquedaA11 = ebitdaGrowthQ.find(i => i.Fecha === fechas);
        resultadoA11 = Object.entries(busquedaA11).filter(([i]) => i.includes(empresas));

        busquedaA12 = ebitdaGrowthY.find(i => i.Fecha === fechas);
        resultadoA12 = Object.entries(busquedaA12).filter(([i]) => i.includes(empresas));

        // Grafico 12
        busquedaA13 = netIncomeGrowthQ.find(i => i.Fecha === fechas);
        resultadoA13 = Object.entries(busquedaA13).filter(([i]) => i.includes(empresas));

        busquedaA14 = netIncomeGrowthY.find(i => i.Fecha === fechas);
        resultadoA14 = Object.entries(busquedaA14).filter(([i]) => i.includes(empresas));

        // Grafico 13
        busquedaA15 = epsGrowthQ.find(i => i.Fecha === fechas);
        resultadoA15 = Object.entries(busquedaA15).filter(([i]) => i.includes(empresas));

        busquedaA16 = epsGrowthY.find(i => i.Fecha === fechas);
        resultadoA16 = Object.entries(busquedaA16).filter(([i]) => i.includes(empresas));

        // PATRIMONIO - Grafico 1
        busquedaB1 = assetsCurrentGrowthY.find(i => i.Fecha === fechas);
        resultadoB1 = Object.entries(busquedaB1).filter(([i]) => i.includes(empresas));

        busquedaB2 = assetsNonCurrentGrowthY.find(i => i.Fecha === fechas);
        resultadoB2 = Object.entries(busquedaB2).filter(([i]) => i.includes(empresas));

        // Grafico 2
        busquedaB3 = totalAssets.find(i => i.Fecha === fechas);
        resultadoB3 = Object.entries(busquedaB3).filter(([i]) => i.includes(empresas));


        break;
    case "Jun/2021":
        // RESULTADO - Grafico 1
        busquedaA1 = revenueGrowthQ.find(i => i.Fecha === fechas);
        resultadoA1 = Object.entries(busquedaA1).filter(([i]) => i.includes(empresas));

        busquedaA2 = revenueGrowthY.find(i => i.Fecha === fechas);
        resultadoA2 = Object.entries(busquedaA2).filter(([i]) => i.includes(empresas));

        // Grafico 2
        busquedaA3 = revenue.find(i => i.Fecha === fechas);
        resultadoA3 = Object.entries(busquedaA3).filter(([i]) => i.includes(empresas));

        // Grafico 3
        busquedaA4 = grossProfit.find(i => i.Fecha === fechas);
        resultadoA4 = Object.entries(busquedaA4).filter(([i]) => i.includes(empresas));

        // Grafico 4
        busquedaA5 = operatingIncome.find(i => i.Fecha === fechas);
        resultadoA5 = Object.entries(busquedaA5).filter(([i]) => i.includes(empresas));

        // Grafico 5
        busquedaA6 = netIncome.find(i => i.Fecha === fechas);
        resultadoA6 = Object.entries(busquedaA6).filter(([i]) => i.includes(empresas));

        // Grafico 7
        busquedaA7 = grossProfitGrowthQ.find(i => i.Fecha === fechas);
        resultadoA7 = Object.entries(busquedaA7).filter(([i]) => i.includes(empresas));

        busquedaA8 = grossProfitGrowthY.find(i => i.Fecha === fechas);
        resultadoA8 = Object.entries(busquedaA8).filter(([i]) => i.includes(empresas));

        // Grafico 8
        busquedaA9 = ebitda.find(i => i.Fecha === fechas);
        resultadoA9 = Object.entries(busquedaA9).filter(([i]) => i.includes(empresas));

        // Grafico 9
        busquedaA10 = ebit.find(i => i.Fecha === fechas);
        resultadoA10 = Object.entries(busquedaA10).filter(([i]) => i.includes(empresas)); 

        // Grafico 10
        busquedaA11 = ebitdaGrowthQ.find(i => i.Fecha === fechas);
        resultadoA11 = Object.entries(busquedaA11).filter(([i]) => i.includes(empresas));

        busquedaA12 = ebitdaGrowthY.find(i => i.Fecha === fechas);
        resultadoA12 = Object.entries(busquedaA12).filter(([i]) => i.includes(empresas));

        // Grafico 12
        busquedaA13 = netIncomeGrowthQ.find(i => i.Fecha === fechas);
        resultadoA13 = Object.entries(busquedaA13).filter(([i]) => i.includes(empresas));

        busquedaA14 = netIncomeGrowthY.find(i => i.Fecha === fechas);
        resultadoA14 = Object.entries(busquedaA14).filter(([i]) => i.includes(empresas));

        // Grafico 13
        busquedaA15 = epsGrowthQ.find(i => i.Fecha === fechas);
        resultadoA15 = Object.entries(busquedaA15).filter(([i]) => i.includes(empresas));

        busquedaA16 = epsGrowthY.find(i => i.Fecha === fechas);
        resultadoA16 = Object.entries(busquedaA16).filter(([i]) => i.includes(empresas));

        // PATRIMONIO - Grafico 1
        busquedaB1 = assetsCurrentGrowthY.find(i => i.Fecha === fechas);
        resultadoB1 = Object.entries(busquedaB1).filter(([i]) => i.includes(empresas));

        busquedaB2 = assetsNonCurrentGrowthY.find(i => i.Fecha === fechas);
        resultadoB2 = Object.entries(busquedaB2).filter(([i]) => i.includes(empresas));

        // Grafico 2
        busquedaB3 = totalAssets.find(i => i.Fecha === fechas);
        resultadoB3 = Object.entries(busquedaB3).filter(([i]) => i.includes(empresas));


        break;
    case "Sep/2021":
        // RESULTADO - Grafico 1
        busquedaA1 = revenueGrowthQ.find(i => i.Fecha === fechas);
        resultadoA1 = Object.entries(busquedaA1).filter(([i]) => i.includes(empresas));

        busquedaA2 = revenueGrowthY.find(i => i.Fecha === fechas);
        resultadoA2 = Object.entries(busquedaA2).filter(([i]) => i.includes(empresas));

        // Grafico 2
        busquedaA3 = revenue.find(i => i.Fecha === fechas);
        resultadoA3 = Object.entries(busquedaA3).filter(([i]) => i.includes(empresas));

        // Grafico 3
        busquedaA4 = grossProfit.find(i => i.Fecha === fechas);
        resultadoA4 = Object.entries(busquedaA4).filter(([i]) => i.includes(empresas));

        // Grafico 4
        busquedaA5 = operatingIncome.find(i => i.Fecha === fechas);
        resultadoA5 = Object.entries(busquedaA5).filter(([i]) => i.includes(empresas));

        // Grafico 5
        busquedaA6 = netIncome.find(i => i.Fecha === fechas);
        resultadoA6 = Object.entries(busquedaA6).filter(([i]) => i.includes(empresas));

        // Grafico 7
        busquedaA7 = grossProfitGrowthQ.find(i => i.Fecha === fechas);
        resultadoA7 = Object.entries(busquedaA7).filter(([i]) => i.includes(empresas));

        busquedaA8 = grossProfitGrowthY.find(i => i.Fecha === fechas);
        resultadoA8 = Object.entries(busquedaA8).filter(([i]) => i.includes(empresas));

        // Grafico 8
        busquedaA9 = ebitda.find(i => i.Fecha === fechas);
        resultadoA9 = Object.entries(busquedaA9).filter(([i]) => i.includes(empresas));

        // Grafico 9
        busquedaA10 = ebit.find(i => i.Fecha === fechas);
        resultadoA10 = Object.entries(busquedaA10).filter(([i]) => i.includes(empresas)); 

        // Grafico 10
        busquedaA11 = ebitdaGrowthQ.find(i => i.Fecha === fechas);
        resultadoA11 = Object.entries(busquedaA11).filter(([i]) => i.includes(empresas));

        busquedaA12 = ebitdaGrowthY.find(i => i.Fecha === fechas);
        resultadoA12 = Object.entries(busquedaA12).filter(([i]) => i.includes(empresas));

        // Grafico 12
        busquedaA13 = netIncomeGrowthQ.find(i => i.Fecha === fechas);
        resultadoA13 = Object.entries(busquedaA13).filter(([i]) => i.includes(empresas));

        busquedaA14 = netIncomeGrowthY.find(i => i.Fecha === fechas);
        resultadoA14 = Object.entries(busquedaA14).filter(([i]) => i.includes(empresas));

        // Grafico 13
        busquedaA15 = epsGrowthQ.find(i => i.Fecha === fechas);
        resultadoA15 = Object.entries(busquedaA15).filter(([i]) => i.includes(empresas));

        busquedaA16 = epsGrowthY.find(i => i.Fecha === fechas);
        resultadoA16 = Object.entries(busquedaA16).filter(([i]) => i.includes(empresas));

        // PATRIMONIO - Grafico 1
        busquedaB1 = assetsCurrentGrowthY.find(i => i.Fecha === fechas);
        resultadoB1 = Object.entries(busquedaB1).filter(([i]) => i.includes(empresas));

        busquedaB2 = assetsNonCurrentGrowthY.find(i => i.Fecha === fechas);
        resultadoB2 = Object.entries(busquedaB2).filter(([i]) => i.includes(empresas));

        // Grafico 2
        busquedaB3 = totalAssets.find(i => i.Fecha === fechas);
        resultadoB3 = Object.entries(busquedaB3).filter(([i]) => i.includes(empresas));


        break;
}

// Por medio de estas variables, se les asignan un selector dedsde los archivos .html, en los que luego, por medio de esa funcion, se imprimira un texto en pantalla.
// Resultados
let parrafo1;
let parrafo2;
let parrafo3;
let parrafo4;
let parrafo5;
let parrafo6;

let parrafo7;

let divBanner = document.getElementById("Banner");
let divRevenue = document.getElementById("Revenue");
let divGrossProfit = document.getElementById("GrossProfit");
let divOperatingIncome = document.getElementById("OperatingIncome");
let divNetIncome = document.getElementById("NetIncome");
let divEbitda = document.getElementById("Ebitda");
let divEbit = document.getElementById("Ebit");

let divAssets = document.getElementById("Assets");

function resultadosCards(){
    parrafo1 = document.createElement("p");
    parrafo2 = document.createElement("p");
    parrafo3 = document.createElement("p");
    parrafo4 = document.createElement("p");
    parrafo5 = document.createElement("p");
    parrafo6 = document.createElement("p");


    parrafo1.innerHTML = "<br>"+ resultadoA3[0][1].toFixed(2) +" M";
    divRevenue.appendChild(parrafo1);

    parrafo2.innerHTML = "<br>"+ resultadoA4[0][1].toFixed(2) +" M";
    divGrossProfit.appendChild(parrafo2);

    parrafo3.innerHTML = "<br>"+ resultadoA5[0][1].toFixed(2) +" M";
    divOperatingIncome.appendChild(parrafo3);

    parrafo4.innerHTML = "<br>"+ resultadoA6[0][1].toFixed(2) +" M";
    divNetIncome.appendChild(parrafo4);

    parrafo5.innerHTML = "<br>"+ resultadoA9[0][1].toFixed(2) +" M";
    divEbitda.appendChild(parrafo5);

    parrafo6.innerHTML = "<br>"+ resultadoA10[0][1].toFixed(2) +" M";
    divEbit.appendChild(parrafo6);
}
resultadosCards();

function patrimonioCards(){
    parrafo7 = document.createElement("p");

    parrafo7.innerHTML = `<br> ${resultadoB3[0][1].toFixed(2)} M`;
    divAssets.appendChild(parrafo7); 
}
patrimonioCards();

// let prueba = revenue.map((i) => i.AAPL);
// console.log(prueba);

// let td;
// let tablaA1 = document.getElementById("tablaA1");

// function tablaA() {
//     td = document.createElement("td");

//     td.innerHTML = prueba[0];
//     tablaA1.appendChild(td);
// }
// tablaA();
//