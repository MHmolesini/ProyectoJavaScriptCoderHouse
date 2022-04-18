// --------------------------------Switch Toggle-------------------------------

const botonSwitch = document.querySelector("#switch__boton__input");
botonSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    botonSwitch.classList.toggle('active');
});

// --------------------------------Elementos HTML---------------------------------------

const input = document.querySelector('.dashboard__form__input');
const button = document.querySelector('.dashboard__form__button');
const apiDiv = document.querySelector('.dashboard__div');

const dashboardPanel = document.querySelector('.dashboard__div__1__panel');

const trRevenue = document.querySelector('#trRevenue');
const trCostOfRevenue = document.querySelector('#trCostOfRevenue');
const trGrossProfit = document.querySelector('#trGrossProfit');
const trRDExpenses = document.querySelector('#trRDExpenses');
const trSellingGeneralAdminExpenses = document.querySelector('#trSellingGeneralAdminExpenses');
const trOperatingExpenses = document.querySelector('#trOperatingExpenses');
const trInterestIncome = document.querySelector('#trInterestIncome');
const trInterestExpense = document.querySelector('#trInterestExpense');
const trDepreciationAndAmortization = document.querySelector('#trDepreciationAndAmortization');
const trOperatingIncome = document.querySelector('#trOperatingIncome');
const trIncomeBeforeTax = document.querySelector('#trIncomeBeforeTax');
const trNetIncome = document.querySelector('#trNetIncome');
const trEbitda = document.querySelector('#trEbitda');
const trEPS = document.querySelector('#trEPS');

const trTotalAssets = document.querySelector('#trTotalAssets');
const trTotalCurrentAssets = document.querySelector('#trTotalCurrentAssets');
const trCashAndCashEquivalents = document.querySelector('#trCashAndCashEquivalents');
const trShortTermInvestments = document.querySelector('#trShortTermInvestments');
const trNetReceivables = document.querySelector('#trNetReceivables');
const trInventory = document.querySelector('#trInventory');
const trOtherCurrentAssets = document.querySelector('#trOtherCurrentAssets');
const trTotalNonCurrentAssets = document.querySelector('#trTotalNonCurrentAssets');
const trPropertyPlantEquipmentNet = document.querySelector('#trPropertyPlantEquipmentNet');
const trGoodwillAndIntangibleAssets = document.querySelector('#trGoodwillAndIntangibleAssets');
const trLongTermInvestments = document.querySelector('#trLongTermInvestments');
const trTaxAssets = document.querySelector('#trTaxAssets');
const trOtherNonCurrentAssets = document.querySelector('#trOtherNonCurrentAssets');
const trTotalLiabilitiesAndTotalEquity = document.querySelector('#trTotalLiabilitiesAndTotalEquity');
const trTotalLiabilities = document.querySelector('#trTotalLiabilities');
const trTotalCurrentLiabilities = document.querySelector('#trTotalCurrentLiabilities');
const trAccountPayables = document.querySelector('#trAccountPayables');
const trShortTermDebt = document.querySelector('#trShortTermDebt');
const trTaxPayables = document.querySelector('#trTaxPayables');
const trDeferredRevenue = document.querySelector('#trDeferredRevenue');
const trOtherCurrentLiabilities = document.querySelector('#trOtherCurrentLiabilities');
const trTotalNonCurrentLiabilities = document.querySelector('#trTotalNonCurrentLiabilities');
const trLongTermDebt = document.querySelector('#trLongTermDebt');
const trDeferredRevenueNonCurrent = document.querySelector('#trDeferredRevenueNonCurrent');
const trDeferredTaxLiabilitiesNonCurrent = document.querySelector('#trDeferredTaxLiabilitiesNonCurrent');
const trOtherNonCurrentLiabilities = document.querySelector('#trOtherNonCurrentLiabilities');
const trTotalEquity = document.querySelector('#trTotalEquity');
const trTotalInvestments = document.querySelector('#trTotalInvestments');
const trTotalDebt = document.querySelector('#trTotalDebt');

const trNetIncomeCF = document.querySelector('#trNetIncomeCF');
const trNetCashProvidedByOperatingActivities = document.querySelector('#trNetCashProvidedByOperatingActivities');
const trDepreciationAndAmortizationCF = document.querySelector('#trDepreciationAndAmortizationCF');
const trDeferredIncomeTax = document.querySelector('#trDeferredIncomeTax');
const trStockBasedCompensation = document.querySelector('#trStockBasedCompensation');
const trChangeInWorkingCapital = document.querySelector('#trChangeInWorkingCapital');
const trAccountsReceivables = document.querySelector('#trAccountsReceivables');
const trInventoryCF = document.querySelector('#trInventoryCF');
const trAccountsPayables = document.querySelector('#trAccountsPayables');
const trOtherWorkingCapital = document.querySelector('#trOtherWorkingCapital');
const trOtherNonCashItems = document.querySelector('#trOtherNonCashItems');
const trNetCashUsedForInvestingActivites = document.querySelector('#trNetCashUsedForInvestingActivites');
const trInvestmentsInPropertyPlantAndEquipment = document.querySelector('#trInvestmentsInPropertyPlantAndEquipment');
const trAcquisitionsNet = document.querySelector('#trAcquisitionsNet');
const trPurchasesOfInvestments = document.querySelector('#trPurchasesOfInvestments');
const trSalesMaturitiesOfInvestments = document.querySelector('#trSalesMaturitiesOfInvestments');
const trOtherInvestingActivites = document.querySelector('#trOtherInvestingActivites');
const trNetCashUsedProvidedByFinancingActivities = document.querySelector('#trNetCashUsedProvidedByFinancingActivities');
const trDebtRepayment = document.querySelector('#trDebtRepayment');
const trCommonStockIssued = document.querySelector('#trCommonStockIssued');
const trCommonStockRepurchased = document.querySelector('#trCommonStockRepurchased');
const trDividendsPaid = document.querySelector('#trDividendsPaid');
const trOtherFinancingActivites = document.querySelector('#trOtherFinancingActivites');
const trCashAtBeginningOfPeriod = document.querySelector('#trCashAtBeginningOfPeriod');
const trNetChangeInCash = document.querySelector('#trNetChangeInCash');
const trCashAtEndOfPeriod = document.querySelector('#trCashAtEndOfPeriod');
const trFreeCashFlow = document.querySelector('#trFreeCashFlow');

// ---------------------------------- Funcion que extraer info de la API ----------------------------------------
button.addEventListener('click', (i) => {
    i.preventDefault();
    buscarEmpresa(input.value);
    buscarEmpresa2(input.value);
    buscarEmpresa3(input.value);
    buscarEmpresa4(input.value);
})

// ------------------------------------- Estado de Resultados -----------------------------------------------------
function buscarEmpresa(empresa){
    fetch(`https://financialmodelingprep.com/api/v3/income-statement/${empresa}?limit=120&apikey=07469b7ca38e2cfbcb54480fd03cd1c1`)
    .then((resultado) => resultado.json())
    .then((data) => {
        mostrarEmpresa(data);
        console.log(data);
    });
}

function mostrarEmpresa(empresa){
    // Revenue Card
    const revenue2 = document.createElement('p');
    revenue2.innerHTML = `${new Intl.NumberFormat().format(empresa[0].revenue/1000000)} M`;
    const revenueCard = document.querySelector('#revenueCard');
    revenueCard.appendChild(revenue2);

    // Gross Profit Card
    const revenue3 = document.createElement('p');
    revenue3.innerHTML = `${new Intl.NumberFormat().format(empresa[0].grossProfit/1000000)} M`;
    const grossMarginCard = document.querySelector('#grossMarginCard');
    grossMarginCard.appendChild(revenue3);

    // EBITDA Card
    const revenue4 = document.createElement('p');
    revenue4.innerHTML = `${new Intl.NumberFormat().format(empresa[0].ebitda/1000000)} M`;
    const ebitdaCard = document.querySelector('#ebitdaCard');
    ebitdaCard.appendChild(revenue4);

    // Operating Income Card
    const revenue5 = document.createElement('p');
    revenue5.innerHTML = `${new Intl.NumberFormat().format(empresa[0].operatingIncome/1000000)} M`;
    const operatingCard = document.querySelector('#operatingCard');
    operatingCard.appendChild(revenue5);

    // Net income Card
    const revenue6 = document.createElement('p');
    revenue6.innerHTML = `${new Intl.NumberFormat().format(empresa[0].netIncome/1000000)} M`;
    const netIncomeCard = document.querySelector('#netIncomeCard');
    netIncomeCard.appendChild(revenue6);

    // EPS Card
    const revenue7 = document.createElement('p');
    revenue7.innerHTML = `${new Intl.NumberFormat().format(empresa[0].eps)}`;
    const epsCard = document.querySelector('#epsCard');
    epsCard.appendChild(revenue7);

    // EPS Card 2
    const revenue8 = document.createElement('p');
    revenue8.innerHTML = `${new Intl.NumberFormat().format(empresa[0].eps)}`;
    const ePSCard = document.querySelector('#ePSCard');
    ePSCard.appendChild(revenue8);

    // ------------------------ tabla -----------------------
    // Revenue
    for(let valor of empresa){
        trRevenue.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.revenue/1000000)}</td>`
    }
    // Cost of Revenue
    for(let valor of empresa){
        trCostOfRevenue.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.costOfRevenue/1000000)}</td>`
    }  
    // Gross Profit
    for(let valor of empresa){
        trGrossProfit.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.grossProfit/1000000)}</td>`
    }  
    // R & D Expenses
    for(let valor of empresa){
        trRDExpenses.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.researchAndDevelopmentExpenses/1000000)}</td>`
    }  
    // Selling General And Administrative Expenses
    for(let valor of empresa){
        trSellingGeneralAdminExpenses.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.sellingGeneralAndAdministrativeExpenses/1000000)}</td>`
    }  
    // Operating Expenses
    for(let valor of empresa){
        trOperatingExpenses.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.operatingExpenses/1000000)}</td>`
    }
    // Interest Income
    for(let valor of empresa){
        trInterestIncome.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.interestIncome/1000000)}</td>`
    } 
    // Interest Expense
    for(let valor of empresa){
        trInterestExpense.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.interestExpense/1000000)}</td>`
    }  
    // Depreciation And Amortization
    for(let valor of empresa){
        trDepreciationAndAmortization.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.depreciationAndAmortization/1000000)}</td>`
    } 
    // Operating Income
    for(let valor of empresa){
        trOperatingIncome.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.operatingIncome/1000000)}</td>`
    }  
    // Total Other Income Expenses Net
    for(let valor of empresa){
        trTotalOtherIncomeExpensesNet.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.totalOtherIncomeExpensesNet/1000000)}</td>`
    }  
    // Income Before Tax
    for(let valor of empresa){
        trIncomeBeforeTax.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.incomeBeforeTax/1000000)}</td>`
    }  
    // Income Tax Expense
    for(let valor of empresa){
        trIncomeTaxExpense.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.incomeTaxExpense/1000000)}</td>`
    }  
    // Net Income
    for(let valor of empresa){
        trNetIncome.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.netIncome/1000000)}</td>`
    }  
    // EBITDA
    for(let valor of empresa){
        trEbitda.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.ebitda/1000000)}</td>`
    }  
    // EPS
    for(let valor of empresa){
        trEPS.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.eps)}</td>`
    }  
}

// ------------------------------------------- Estado Patrimonial ---------------------------------------------------
function buscarEmpresa2(empresa){
    fetch(`https://financialmodelingprep.com/api/v3/balance-sheet-statement/${empresa}?limit=120&apikey=07469b7ca38e2cfbcb54480fd03cd1c1`)
    .then((resultado) => resultado.json())
    .then((data) => {
        mostrarEmpresa2(data);
        console.log(data);
    });
}

function mostrarEmpresa2(empresa){
    // Assets Card
    const cardB1 = document.createElement('p');
    cardB1.innerHTML = `${new Intl.NumberFormat().format(empresa[0].totalAssets/1000000)} M`;
    const assetsCard = document.querySelector('#assetsCard');
    assetsCard.appendChild(cardB1);

    // Liabilities Card
    const cardB2 = document.createElement('p');
    cardB2.innerHTML = `${new Intl.NumberFormat().format(empresa[0].totalLiabilities/1000000)} M`;
    const liabilitiesCard = document.querySelector('#liabilitiesCard');
    liabilitiesCard.appendChild(cardB2);

    // Equity Card
    const cardB3 = document.createElement('p');
    cardB3.innerHTML = `${new Intl.NumberFormat().format(empresa[0].totalEquity/1000000)} M`;
    const equityCard = document.querySelector('#equityCard');
    equityCard.appendChild(cardB3);

    // Debt Card
    const cardB4 = document.createElement('p');
    cardB4.innerHTML = `${new Intl.NumberFormat().format(empresa[0].totalDebt/1000000)} M`;
    const debtCard = document.querySelector('#debtCard');
    debtCard.appendChild(cardB4);

    // ------------------------ tabla -----------------------
    // Total Assets
    for(let valor of empresa){
        trTotalAssets.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.totalAssets/1000000)}</td>`
    }

    // Total Current Assets
    for(let valor of empresa){
        trTotalCurrentAssets.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.totalCurrentAssets/1000000)}</td>`
    }

    // Cash And Cash Equivalents
    for(let valor of empresa){
        trCashAndCashEquivalents.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.cashAndCashEquivalents/1000000)}</td>`
    }

    // Short Term Investments
    for(let valor of empresa){
        trShortTermInvestments.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.shortTermInvestments/1000000)}</td>`
    }

    // Net Receivables
    for(let valor of empresa){
        trNetReceivables.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.netReceivables/1000000)}</td>`
    }

    // inventory
    for(let valor of empresa){
        trInventory.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.inventory/1000000)}</td>`
    }

    // Other Current Assets
    for(let valor of empresa){
        trOtherCurrentAssets.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.otherCurrentAssets/1000000)}</td>`
    }

    // Total Non Current Assets
    for(let valor of empresa){
        trTotalNonCurrentAssets.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.totalNonCurrentAssets/1000000)}</td>`
    }

    // Property Plant Equipment Net
    for(let valor of empresa){
        trPropertyPlantEquipmentNet.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.propertyPlantEquipmentNet/1000000)}</td>`
    }

    // Goodwill And Intangible Assets
    for(let valor of empresa){
        trGoodwillAndIntangibleAssets.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.goodwillAndIntangibleAssets/1000000)}</td>`
    }

    // Long Term Investments
    for(let valor of empresa){
        trLongTermInvestments.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.longTermInvestments/1000000)}</td>`
    }

    // Tax Assets
    for(let valor of empresa){
        trTaxAssets.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.taxAssets/1000000)}</td>`
    }

    // Other Non Current Assets
    for(let valor of empresa){
        trOtherNonCurrentAssets.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.otherNonCurrentAssets/1000000)}</td>`
    }

    // Total Liabilities And Total Equity
    for(let valor of empresa){
        trTotalLiabilitiesAndTotalEquity.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.totalLiabilitiesAndTotalEquity/1000000)}</td>`
    }

    // Total Liabilities
    for(let valor of empresa){
        trTotalLiabilities.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.totalLiabilities/1000000)}</td>`
    }

    // Total Current Liabilities
    for(let valor of empresa){
        trTotalCurrentLiabilities.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.totalCurrentLiabilities/1000000)}</td>`
    }

    // Account Payables
    for(let valor of empresa){
        trAccountPayables.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.accountPayables/1000000)}</td>`
    }

    // Short Term Debt
    for(let valor of empresa){
        trShortTermDebt.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.shortTermDebt/1000000)}</td>`
    }

    // Tax Payables
    for(let valor of empresa){
        trTaxPayables.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.taxPayables/1000000)}</td>`
    }

    // Deferred Revenue
    for(let valor of empresa){
        trDeferredRevenue.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.deferredRevenue/1000000)}</td>`
    }

    // Other Current Liabilities
    for(let valor of empresa){
        trOtherCurrentLiabilities.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.otherCurrentLiabilities/1000000)}</td>`
    }

    // Total Non Current Liabilities
    for(let valor of empresa){
        trTotalNonCurrentLiabilities.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.totalNonCurrentLiabilities/1000000)}</td>`
    }

    // Long Term Debt
    for(let valor of empresa){
        trLongTermDebt.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.longTermDebt/1000000)}</td>`
    }

    // Deferred Revenue Non Current
    for(let valor of empresa){
        trDeferredRevenueNonCurrent.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.deferredRevenueNonCurrent/1000000)}</td>`
    }

    // Deferred Tax Liabilities Non Current
    for(let valor of empresa){
        trDeferredTaxLiabilitiesNonCurrent.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.deferredTaxLiabilitiesNonCurrent/1000000)}</td>`
    }

    // Other Non Current Liabilities
    for(let valor of empresa){
        trOtherNonCurrentLiabilities.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.otherNonCurrentLiabilities/1000000)}</td>`
    }

    // Total Equity
    for(let valor of empresa){
        trTotalEquity.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.totalEquity/1000000)}</td>`
    }

    // Total Investments
    for(let valor of empresa){
        trTotalInvestments.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.totalInvestments/1000000)}</td>`
    }

    // Total Debt
    for(let valor of empresa){
        trTotalDebt.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.totalDebt/1000000)}</td>`
    }
}

// ------------------------------------------- Estado de Flujo de Fondos ---------------------------------------------------
function buscarEmpresa3(empresa){
    fetch(`https://financialmodelingprep.com/api/v3/cash-flow-statement/${empresa}?limit=120&apikey=07469b7ca38e2cfbcb54480fd03cd1c1`)
    .then((resultado) => resultado.json())
    .then((data) => {
        mostrarEmpresa3(data);
        console.log(data);
    });
}

function mostrarEmpresa3(empresa){
    // Net Cash Provided By Operating Activities
    const cardC1 = document.createElement('p');
    cardC1.innerHTML = `${new Intl.NumberFormat().format(empresa[0].netCashProvidedByOperatingActivities/1000000)} M`;
    const netCashProvidedByOperatingActivitiesCard = document.querySelector('#netCashProvidedByOperatingActivitiesCard');
    netCashProvidedByOperatingActivitiesCard.appendChild(cardC1);

    // Net Cash Used For Investing Activites
    const cardC2 = document.createElement('p');
    cardC2.innerHTML = `${new Intl.NumberFormat().format(empresa[0].netCashUsedForInvestingActivites/1000000)} M`;
    const netCashUsedForInvestingActivitesCard = document.querySelector('#netCashUsedForInvestingActivitesCard');
    netCashUsedForInvestingActivitesCard.appendChild(cardC2);

    // Net Cash Used Provided By Financing Activities
    const cardC3 = document.createElement('p');
    cardC3.innerHTML = `${new Intl.NumberFormat().format(empresa[0].netCashUsedProvidedByFinancingActivities/1000000)} M`;
    const netCashUsedProvidedByFinancingActivitiesCard = document.querySelector('#netCashUsedProvidedByFinancingActivitiesCard');
    netCashUsedProvidedByFinancingActivitiesCard.appendChild(cardC3);

    // Net Cash Used Provided By Financing Activities
    const cardC4 = document.createElement('p');
    cardC4.innerHTML = `${new Intl.NumberFormat().format(empresa[0].freeCashFlow/1000000)} M`;
    const freeCashFlowCard = document.querySelector('#freeCashFlowCard');
    freeCashFlowCard.appendChild(cardC4);

    // Net Income
    for(let valor of empresa){
        trNetIncomeCF.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.netIncome/1000000)}</td>`
    }

    // Net Cash Provided By Operating Activities
    for(let valor of empresa){
        trNetCashProvidedByOperatingActivities.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.netCashProvidedByOperatingActivities/1000000)}</td>`
    }

    // Depreciation And Amortization
    for(let valor of empresa){
        trDepreciationAndAmortizationCF.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.depreciationAndAmortization/1000000)}</td>`
    }

    // Deferred Income Tax
    for(let valor of empresa){
        trDeferredIncomeTax.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.deferredIncomeTax/1000000)}</td>`
    }

    // Stock Based Compensation
    for(let valor of empresa){
        trStockBasedCompensation.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.stockBasedCompensation/1000000)}</td>`
    }

    // Change In Working Capital --------------
    for(let valor of empresa){
        trChangeInWorkingCapital.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.changeInWorkingCapital/1000000)}</td>`
    }

    // Accounts Receivables
    for(let valor of empresa){
        trAccountsReceivables.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.accountsReceivables/1000000)}</td>`
    }

    // Inventory
    for(let valor of empresa){
        trInventoryCF.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.inventory/1000000)}</td>`
    }

    // Accounts Payables
    for(let valor of empresa){
        trAccountsPayables.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.accountsPayables/1000000)}</td>`
    }

    // Other Working Capital --------------
    for(let valor of empresa){
        trOtherWorkingCapital.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.otherWorkingCapital/1000000)}</td>`
    }

    // Other Non Cash Items -----------
    for(let valor of empresa){
        trOtherNonCashItems.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.otherNonCashItems/1000000)}</td>`
    }

    // Net Cash Used For Investing Activites
    for(let valor of empresa){
        trNetCashUsedForInvestingActivites.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.netCashUsedForInvestingActivites/1000000)}</td>`
    }

    // Investments In Property Plant And Equipment
    for(let valor of empresa){
        trInvestmentsInPropertyPlantAndEquipment.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.investmentsInPropertyPlantAndEquipment/1000000)}</td>`
    }

    // Acquisitions Net
    for(let valor of empresa){
        trAcquisitionsNet.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.acquisitionsNet/1000000)}</td>`
    }

    // Purchases Of Investments
    for(let valor of empresa){
        trPurchasesOfInvestments.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.purchasesOfInvestments/1000000)}</td>`
    }

    // Sales Maturities Of Investments
    for(let valor of empresa){
        trSalesMaturitiesOfInvestments.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.salesMaturitiesOfInvestments/1000000)}</td>`
    }

    // Other Investing Activites
    for(let valor of empresa){
        trOtherInvestingActivites.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.otherInvestingActivites/1000000)}</td>`
    }

    // Net Cash Used Provided By Financing Activities
    for(let valor of empresa){
        trNetCashUsedProvidedByFinancingActivities.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.netCashUsedProvidedByFinancingActivities/1000000)}</td>`
    }

    // Debt Repayment
    for(let valor of empresa){
        trDebtRepayment.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.debtRepayment/1000000)}</td>`
    }

    // Common Stock Issued
    for(let valor of empresa){
        trCommonStockIssued.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.commonStockIssued/1000000)}</td>`
    }

    // Common Stock Repurchased
    for(let valor of empresa){
        trCommonStockRepurchased.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.commonStockRepurchased/1000000)}</td>`
    }

    // Dividends Paid
    for(let valor of empresa){
        trDividendsPaid.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.dividendsPaid/1000000)}</td>`
    }

    // Other Financing Activites
    for(let valor of empresa){
        trOtherFinancingActivites.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.otherFinancingActivites/1000000)}</td>`
    }

    // Cash At Beginning Of Period
    for(let valor of empresa){
        trCashAtBeginningOfPeriod.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.cashAtBeginningOfPeriod/1000000)}</td>`
    }

    // Net Change In Cash
    for(let valor of empresa){
        trNetChangeInCash.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.netChangeInCash/1000000)}</td>`
    }

    // Cash At End Of Period
    for(let valor of empresa){
        trCashAtEndOfPeriod.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.cashAtEndOfPeriod/1000000)}</td>`
    }

    // Free Cash Flow
    for(let valor of empresa){
        trFreeCashFlow.innerHTML += 
            `<td>${new Intl.NumberFormat().format(valor.freeCashFlow/1000000)}</td>`
    }
}

// ------------------------------------------- Ratios ---------------------------------------------------
function buscarEmpresa4(empresa){
    fetch(`https://financialmodelingprep.com/api/v3/ratios/${empresa}?limit=40&apikey=07469b7ca38e2cfbcb54480fd03cd1c1`)
    .then((resultado) => resultado.json())
    .then((data) => {
        mostrarEmpresa4(data);
        console.log(data);
    });
}

function mostrarEmpresa4(empresa){
    // Gross Profit Margin
    const cardD1 = document.createElement('p');
    cardD1.innerHTML = `${new Intl.NumberFormat().format(empresa[0].grossProfitMargin*100)} %`;
    const grossProfitMarginCard = document.querySelector('#grossProfitMarginCard');
    grossProfitMarginCard.appendChild(cardD1);

    // Operating Profit Margin
    const cardD2 = document.createElement('p');
    cardD2.innerHTML = `${new Intl.NumberFormat().format(empresa[0].operatingProfitMargin*100)} %`;
    const operatingProfitMarginCard = document.querySelector('#operatingProfitMarginCard');
    operatingProfitMarginCard.appendChild(cardD2);

    // Net Profit Margin
    const cardD3 = document.createElement('p');
    cardD3.innerHTML = `${new Intl.NumberFormat().format(empresa[0].netProfitMargin*100)} %`;
    const netProfitMarginCard = document.querySelector('#netProfitMarginCard');
    netProfitMarginCard.appendChild(cardD3);

    // Dividend Yield
    const cardD4 = document.createElement('p');
    cardD4.innerHTML = `${new Intl.NumberFormat().format(empresa[0].dividendYield*100)} %`;
    const dividendYieldCard = document.querySelector('#dividendYieldCard');
    dividendYieldCard.appendChild(cardD4);

    // Dividend Payout Ratio
    const cardD5 = document.createElement('p');
    cardD5.innerHTML = `${new Intl.NumberFormat().format(empresa[0].dividendPayoutRatio*100)} %`;
    const dividendPayoutRatioCard = document.querySelector('#dividendPayoutRatioCard');
    dividendPayoutRatioCard.appendChild(cardD5);

    // Return On Assets
    const cardD6 = document.createElement('p');
    cardD6.innerHTML = `${new Intl.NumberFormat().format(empresa[0].returnOnAssets*100)} %`;
    const returnOnAssetsCard = document.querySelector('#returnOnAssetsCard');
    returnOnAssetsCard.appendChild(cardD6);

    // Return On Equity
    const cardD7 = document.createElement('p');
    cardD7.innerHTML = `${new Intl.NumberFormat().format(empresa[0].returnOnEquity*100)} %`;
    const returnOnEquityCard = document.querySelector('#returnOnEquityCard');
    returnOnEquityCard.appendChild(cardD7);

    // -------------------------------------------------------------
    // Quick Ratio
    const cardD8 = document.createElement('p');
    cardD8.innerHTML = `${new Intl.NumberFormat().format(empresa[0].quickRatio*100)} %`;
    const quickRatioCard = document.querySelector('#quickRatioCard');
    quickRatioCard.appendChild(cardD8);

    // Current Ratio
    const cardD9 = document.createElement('p');
    cardD9.innerHTML = `${new Intl.NumberFormat().format(empresa[0].currentRatio*100)} %`;
    const currentRatioCard = document.querySelector('#currentRatioCard');
    currentRatioCard.appendChild(cardD9);

    // Interest Coverage
    const cardD10 = document.createElement('p');
    cardD10.innerHTML = `${new Intl.NumberFormat().format(empresa[0].interestCoverage)}`;
    const interestCoverageCard = document.querySelector('#interestCoverageCard');
    interestCoverageCard.appendChild(cardD10);

    // Cash Flow To Debt Ratio
    const cardD11 = document.createElement('p');
    cardD11.innerHTML = `${new Intl.NumberFormat().format(empresa[0].cashFlowToDebtRatio*100)} %`;
    const cashFlowToDebtRatioCard = document.querySelector('#cashFlowToDebtRatioCard');
    cashFlowToDebtRatioCard.appendChild(cardD11);

    // -----------------------------------------------------------
    // Debt Equity Ratio
    const cardD12 = document.createElement('p');
    cardD12.innerHTML = `${new Intl.NumberFormat().format(empresa[0].debtEquityRatio*100)} %`;
    const debtEquityRatioCard = document.querySelector('#debtEquityRatioCard');
    debtEquityRatioCard.appendChild(cardD12);

    // -----------------------------------------------------------
    // Inventory Turnover
    const cardD13 = document.createElement('p');
    cardD13.innerHTML = `${new Intl.NumberFormat().format(empresa[0].inventoryTurnover)}`;
    const inventoryTurnoverCard = document.querySelector('#inventoryTurnoverCard');
    inventoryTurnoverCard.appendChild(cardD13);

    // Asset Turnover
    const cardD14 = document.createElement('p');
    cardD14.innerHTML = `${new Intl.NumberFormat().format(empresa[0].assetTurnover)}`;
    const assetTurnoverCard = document.querySelector('#assetTurnoverCard');
    assetTurnoverCard.appendChild(cardD14);

    // Cash Conversion Cycle
    const cardD15 = document.createElement('p');
    cardD15.innerHTML = `${new Intl.NumberFormat().format(empresa[0].cashConversionCycle)}`;
    const cashConversionCycleCard = document.querySelector('#cashConversionCycleCard');
    cashConversionCycleCard.appendChild(cardD15);

    // Days Of Inventory Outstanding
    const cardD16 = document.createElement('p');
    cardD16.innerHTML = `${new Intl.NumberFormat().format(empresa[0].daysOfInventoryOutstanding)}`;
    const daysOfInventoryOutstandingCard = document.querySelector('#daysOfInventoryOutstandingCard');
    daysOfInventoryOutstandingCard.appendChild(cardD16);

    // Days Of Payables Outstanding
    const cardD17 = document.createElement('p');
    cardD17.innerHTML = `${new Intl.NumberFormat().format(empresa[0].daysOfPayablesOutstanding)}`;
    const daysOfPayablesOutstandingCard = document.querySelector('#daysOfPayablesOutstandingCard');
    daysOfPayablesOutstandingCard.appendChild(cardD17);

    // Days Of Sales Outstanding
    const cardD18 = document.createElement('p');
    cardD18.innerHTML = `${new Intl.NumberFormat().format(empresa[0].daysOfSalesOutstanding)}`;
    const daysOfSalesOutstandingCard = document.querySelector('#daysOfSalesOutstandingCard');
    daysOfSalesOutstandingCard.appendChild(cardD18);

    // --------------------------------------------------------------
    // Price Earnings Ratio
    const cardD19 = document.createElement('p');
    cardD19.innerHTML = `${new Intl.NumberFormat().format(empresa[0].priceEarningsRatio)}`;
    const priceEarningsRatioCard = document.querySelector('#priceEarningsRatioCard');
    priceEarningsRatioCard.appendChild(cardD19);

    // Price Sales Ratio
    const cardD20 = document.createElement('p');
    cardD20.innerHTML = `${new Intl.NumberFormat().format(empresa[0].priceSalesRatio)}`;
    const priceSalesRatioCard = document.querySelector('#priceSalesRatioCard');
    priceSalesRatioCard.appendChild(cardD20);

    // Price Cash Flow Ratio
    const cardD21 = document.createElement('p');
    cardD21.innerHTML = `${new Intl.NumberFormat().format(empresa[0].priceCashFlowRatio)}`;
    const priceCashFlowRatioCard = document.querySelector('#priceCashFlowRatioCard');
    priceCashFlowRatioCard.appendChild(cardD21);

    // Price Book Value Ratio
    const cardD22 = document.createElement('p');
    cardD22.innerHTML = `${new Intl.NumberFormat().format(empresa[0].priceBookValueRatio)}`;
    const priceBookValueRatioCard = document.querySelector('#priceBookValueRatioCard');
    priceBookValueRatioCard.appendChild(cardD22);

    // Price To Free Cash Flows Ratio
    const cardD23 = document.createElement('p');
    cardD23.innerHTML = `${new Intl.NumberFormat().format(empresa[0].priceToFreeCashFlowsRatio)}`;
    const priceToFreeCashFlowsRatioCard = document.querySelector('#priceToFreeCashFlowsRatioCard');
    priceToFreeCashFlowsRatioCard.appendChild(cardD23);

    // Price Earnings To Growth Ratio
    const cardD24 = document.createElement('p');
    cardD24.innerHTML = `${new Intl.NumberFormat().format(empresa[0].priceEarningsToGrowthRatio)}`;
    const priceEarningsToGrowthRatioCard = document.querySelector('#priceEarningsToGrowthRatioCard');
    priceEarningsToGrowthRatioCard.appendChild(cardD24);
}
