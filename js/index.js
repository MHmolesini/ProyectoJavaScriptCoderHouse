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

// Estados financieros de la empresa (AAPL)

//"fecha":  "2021-09-25" ,
// "símbolo":  
// "moneda reportada": 
// "cik":  
// "fecha de llenado":  
// "fecha aceptada" :  
// "añocalendario" : 
// "período" : 
// "ingresos" : 
// "costOfRevenue" :  
// "beneficio bruto": 
// "proporción de beneficio bruto":  
// "InvestigaciónDindevelopentExpenses":  
// "GeneralandadminInsexpenses":  
// "SellingAndMarketingExpenses":  
// "SellingGeneralandAdminInsignExpenses":  
// "OtrosExpenses":  
// "OperationExpess": 
// "CostandExPess" :  
// "COSTANICIE":
// " INTERNESTEPENSE ":
// "depreciación y amortización":
// "ebitda" : 
// "Ebitdaratio": 
// "operatingIncome": 
// "operatingIncomeRatio": 
// "totalOtherIncomeExpensesNet":  
// "incomeBeforeTax": 
// "incomeBeforeTaxRatio": , 
// "incomeTaxExpense":  
// "netIncome":  
// "proporción de ingresos netos":  
// "eps":  
// "epsdiluido":  
// "weightedAverageShsOut" : 
// "weightedAverageShsOutDil" : 
// "enlace" :  
// " index.htm finalLink":  
// "ingresos de intereses":
const API_URL = "https://financialmodelingprep.com/api/v3/income-statement/AAPL?limit=120&apikey=07469b7ca38e2cfbcb54480fd03cd1c1";

fetch(API_URL)
.then(response => response.json() )
.then(data => {
    console.log(data)
})
.catch(err => console.log(err));

// Estado financieros de la empresa https://financialmodelingprep.com/api/v3/balance-sheet-statement/AAPL?limit=120&apikey=07469b7ca38e2cfbcb54480fd03cd1c1

// "fecha": "2021-09-25",
//   "símbolo" : "AAPL",
//   "moneda reportada": "USD",
//   "cik": "0000320193",
//   "fecha de llenado": "2021-10-29",
//   "fecha aceptada": "2021-10-28 18:04:28",
//   "añocalendario": "2021",
//   "período": "año fiscal",
//   "efectivo y equivalentes de efectivo": 34940000000,
//   "inversiones a corto plazo": 27699000000,
//   "efectivo e inversiones a corto plazo": 62639000000,
//   "cuentas por cobrar netas": 51506000000,
//   "inventario": 6580000000,
//   "otros activos actuales": 14111000000,
//   "activos actuales totales": 134836000000,
//   "propiedadPlantEquipmentNet": 39440000000,
//   "buena voluntad": 0.0,
//   "activos intangibles": 0.0,
//   "buena voluntad y activos intangibles": 0.0,
//   "inversiones a largo plazo": 127877000000,
//   "activos fiscales": 0.0,
//   "otros activos no corrientes": 48849000000,
//   "total de activos no corrientes": 216166000000,
//   "otros Activos" : 0.0,
//   "Activos totales": 351002000000,
//   "cuentas por pagar": 54763000000,
//   "deuda a corto plazo": 15613000000,
//   "impuestos a pagar": 0.0,
//   "Ingresos diferidos": 7612000000,
//   "otrosPasivosCorrientes" : 47493000000,
//   "pasivo actual total": 125481000000,
//   "deuda a largo plazo": 109106000000,
//   "Ingresos diferidos no actuales": 0.0,
//   "DeferredTaxLiabilitiesNonCurrent": 0.0,
//   "otrosPasivosNoCorrientes" : 53325000000,
//   "pasivo total no corriente": 162431000000,
//   "otrosPasivos" : 0.0,
//   "obligaciones de arrendamiento de capital": 0.0,
//   "pasivo total": 287912000000,
//   "Stock preferido": 0.0,
//   "acción común": 57365000000,
//   "ganancias retenidas": 5562000000,
//   "Pérdida total acumulada de otros ingresos": 163000000,
//   "otrototalAccionistasPatrimonio" : 0.0,
//   "patrimonio total de los accionistas": 63090000000,
//   "pasivo total y patrimonio de los accionistas": 351002000000,
//   "interés minoritario": 0,
//   "equidad total": 63090000000,
//   "pasivo total y patrimonio total": 351002000000,
//   "inversionestotales": 155576000000,
//   "deuda total": 124719000000,
//   "deuda neta": 89779000000,
//   "enlace": "https://www.sec.gov/Archives/edgar/data/320193/000032019321000105/0000320193-21-000105-index.htm",
//   "enlace final": "https://www.sec.gov/Archives/edgar/data/320193/000032019321000105/aapl-20210925.htm"

// Estado de flujo de efectivo
//https://financialmodelingprep.com/api/v3/cash-flow-statement/AAPL?limit=120&apikey=07469b7ca38e2cfbcb54480fd03cd1c1

// "fecha": "2021-09-25",
// "símbolo" : "AAPL",
// "moneda reportada": "USD",
// "cik": "0000320193",
// "fecha de llenado": "2021-10-29",
// "fecha aceptada": "2021-10-28 18:04:28",
// "añocalendario": "2021",
// "período": "año fiscal",
// "ingreso neto": 94680000000,
// "depreciación y amortización": 11284000000,
// "impuesto sobre la renta diferido": -4774000000,
// "Compensación basada en acciones": 7906000000,
// "cambioEnCapitalDeTrabajo": -4911000000,
// "cuentas por cobrar": -10125000000,
// "inventario": -2642000000,
// "cuentas por pagar": 12326000000,
// "otro capital de trabajo": 1676000000,
// "otros artículos que no son en efectivo": -147000000,
// "NetCashProvidedByOperatingActivities": 104038000000,
// "inversionesEnPropiedadPlantaYEquipo" : -11085000000,
// "adquisicionesNet": -33000000,
// "comprasDeInversiones" : -109689000000,
// "vencimientosdeventasdeinversiones": 106870000000,
// "otras actividades de inversión": -608000000,
// "NetCashUsedForInvestingActivites": -14545000000,
// "reembolso de la deuda": -8750000000,
// "acción común emitida": 1105000000,
// "StockComúnRecomprado": -85971000000,
// "dividendos pagados": -14467000000,
// "otras actividades de financiación": 14730000000,
// "NetCashUsedProvidedByFinancingActivities": -93353000000,
// "efectoDeCambiosForexEnCash": 0.0,
// "netChangeInCash" : -3860000000,
// "efectivo al final del período": 35929000000,
// "efectivo al comienzo del período": 39789000000,
// "flujo de efectivo operativo": 104038000000,
// "gastos de capital": -11085000000,
// "freeCashFlow": 92953000000,
// "enlace": "https://www.sec.gov/Archives/edgar/data/320193/000032019321000105/0000320193-21-000105-index.htm",
// "enlace final": "https://www.sec.gov/Archives/edgar/data/320193/000032019321000105/aapl-20210925.htm"

// Coeficicientes de la empresa https://financialmodelingprep.com/api/v3/ratios/AAPL?limit=40&apikey=07469b7ca38e2cfbcb54480fd03cd1c1

//"symbol" : "AAPL",
// "date" : "2021-09-25",
// "period" : "FY",
// "currentRatio" : 1.0745531195957954,
// "quickRatio" : 0.9096596297447422,
// "cashRatio" : 0.2784485300563432,
// "daysOfSalesOutstanding" : 51.390968708397914,
// "daysOfInventoryOutstanding" : 11.27659274770989,
// "operatingCycle" : 62.667561456107805,
// "daysOfPayablesOutstanding" : 93.85107122231561,
// "cashConversionCycle" : -31.183509766207806,
// "grossProfitMargin" : 0.4177935962516778,
// "operatingProfitMargin" : 0.29782377527561593,
// "pretaxProfitMargin" : 0.2985290459437369,
// "netProfitMargin" : 0.2588179335569424,
// "effectiveTaxRate" : 0.13302260844085087,
// "returnOnAssets" : 0.26974205275183616,
// "returnOnEquity" : 1.5007132667617689,
// "returnOnCapitalEmployed" : 0.48309913489209433,
// "netIncomePerEBT" : 0.8669773915591491,
// "ebtPerEbit" : 1.0023680804780217,
// "ebitPerRevenue" : 0.29782377527561593,
// "debtRatio" : 0.8202574344305731,
// "debtEquityRatio" : 4.563512442542399,
// "longTermDebtToCapitalization" : 0.6336151826987851,
// "totalDebtToCapitalization" : 0.6640736066961648,
// "interestCoverage" : 41.19054820415879,
// "cashFlowToDebtRatio" : 0.8341792349201004,
// "companyEquityMultiplier" : 5.563512442542399,
// "receivablesTurnover" : 7.102415252591931,
// "payablesTurnover" : 3.889140478060004,
// "inventoryTurnover" : 32.367933130699086,
// "fixedAssetTurnover" : 9.275278904665315,
// "assetTurnover" : 1.042207736708053,
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
// "dividendPayoutRatio" : 0.15279890156316012,
// "priceBookValueRatio" : 39.34818597842333,
// "priceToBookRatio" : 39.34818597842333,
// "priceToSalesRatio" : 6.786117248183458,
// "priceEarningsRatio" : 26.219656246078664,
// "priceToFreeCashFlowsRatio" : 26.706798633489267,
// "priceToOperatingCashFlowsRatio" : 23.86125313230481,
// "priceCashFlowRatio" : 23.86125313230481,
// "priceEarningsToGrowthRatio" : 0.3677417888750864,
// "priceSalesRatio" : 6.786117248183458,
// "dividendYield" : 0.005827647019057021,
// "enterpriseValueMultiple" : 20.889553448047103,
// "priceFairValue" : 39.34818597842333

// Valor empresarial de la empresa https://financialmodelingprep.com/api/v3/enterprise-values/AAPL?limit=40&apikey=07469b7ca38e2cfbcb54480fd03cd1c1
// "símbolo" : "AAPL",
//   "fecha": "2021-09-25",
//   "precio de las existencias": 148.639999,
//   "númeroDeAcciones": 16701272000,
//   "capitalización de mercado": 2482477053378.728,
//   "menosEfectivoYEquivalentesEfectivo": 34940000000,
//   "añadirDeudaTotal": 124719000000,
//   "valor empresarial": 2572256053378.728

// Resultados creciemiento https://financialmodelingprep.com/api/v3/income-statement-growth/AAPL?limit=40&apikey=07469b7ca38e2cfbcb54480fd03cd1c1
// balance crecimiento https://financialmodelingprep.com/api/v3/balance-sheet-statement-growth/AAPL?limit=40&apikey=07469b7ca38e2cfbcb54480fd03cd1c1
// flujo de fondos https://financialmodelingprep.com/api/v3/cash-flow-statement-growth/AAPL?limit=40&apikey=07469b7ca38e2cfbcb54480fd03cd1c1

// Metricas clave de la empresa https://financialmodelingprep.com/api/v3/key-metrics/AAPL?limit=40&apikey=07469b7ca38e2cfbcb54480fd03cd1c1
// "símbolo" : "AAPL",
//   "fecha": "2021-09-25",
//   "período": "año fiscal",
//   "ingresos por acción": 21.90354123925411,
//   "NetIncomePerShare": 5.669029281123018,
//   "operatingCashFlowPerShare": 6.229345884552985,
//   "freeCashFlowPerShare": 5.56562398361035,
//   "dinero por acción": 3.750552652516527,
//   "ValorLibroPerShare" : 3.7775565837141025,
//   "tangibleBookValuePerShare": 3.7775565837141025,
//   "accionistasEquityPerShare": 3.7775565837141025,
//   "interestDebtPerShare": 7.6260059712817085,
//   "MarketCap": 2482477053378.728,
//   "valor empresarial": 2572256053378.728,
//   "relación": 26.219656246078664,
//   "relación precio a ventas": 6.786117248183458,
//   "pocfratio" : 23.86125313230481,
//   "pfcfRatio" : 26.706798633489267,
//   "pbRatio" : 39.34818597842333,
//   "ptbRatio" : 39.34818597842333,
//   "evToSales": 7.031537772653343,
//   "valor empresarial sobre EBITDA": 20.889553448047103,
//   "evToOperatingCashFlow": 24.724197441115056,
//   "evToFreeCashFlow": 27.672652344504513,
//   "rendimiento de ganancias": 0.03813932534487584,
//   "rendimiento de flujo de efectivo libre": 0.03744364922668191,
//   "deuda a la equidad": 1.729370740212395,
//   "deuda a activos": 0.8202574344305731,
//   "deuda neta a EBITDA": 0.7291044048856549,
//   "relación actual": 1.0745531195957954,
//   "cobertura de interés": 41.19054820415879,
//   "calidad de ingresos": 1.0988381918039714,
//   "rendimiento de dividendos": 0.005827647019057021,
//   "relación de pago": 0.15279890156316012,
//   "ventasGeneralAndAdministrativeToRevenue" : 0.0,
//   "investigación y desarrollo a ingresos": 0.059904269074427925,
//   "intangiblesToTotalActives" : 0.0,
//   "capexToOperatingCashFlow": -0.1065476076049136,
//   "capexToRevenue" : -0.030302036264033657,
//   "capexToDepreciation" : -0.9823644097837646,
//   "Compensación a ingresos basada en acciones": 0.021611898845597662,
//   "número graham": 21.950837680915992,
//   "roico" : 0.48309913489209433,
//   "returnOnTangibleAssets": 0.26974205275183616,
//   "grahamNetNet": -10.97841529675105,
//   "capital de trabajo": 9355000000,
//   "valor de activo tangible": nulo,
//   "valor de activo neto actual": -153076000000,
//   "Capital invertido": 1.9768426058012363,
//   "promedio de cuentas por cobrar": 44475500000,
//   "promedio de cuentas por pagar": 48529500000,
//   "inventariopromedio": 5320500000,
//   "daysSalesOutstanding": 51.390968708397914,
//   "daysPayablesOutstanding": 93.85107122231561,
//   "daysOfInventoryOnHand": 11.27659274770989,
//   "Volumen de cuentas por cobrar": 7.102415252591931,
//   "Volumen de cuentas por pagar" : 3.889140478060004,
//   "Volumen de inventario": 32.367933130699086,
//   "hueva" : 1.5007132667617689,
//   "capexPerShare": -0.6637219009426348

// FCF descontado https://financialmodelingprep.com/api/v3/discounted-cash-flow/AAPL?apikey=07469b7ca38e2cfbcb54480fd03cd1c1

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