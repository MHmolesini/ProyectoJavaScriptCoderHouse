// Se le solicita al usuario que ingrese el nombre de una de las empresas incluidas en el menu desplegable (aun no estan el 100%) y una fecha.

let empresas = prompt("Seleccione una empresa");
let fechas = prompt("Seleccione la fecha");

// se crea una variable vacia, en el que posteriormente se le asignara el valor de las ventas de una determinada empresa, en una fecha en concreto.
let busqueda;
let busqueda2;
let busqueda3;
let busqueda4;
let busqueda5;
let busqueda6;
let resultado;
let resultado2;
let resultado3;
let resultado4;
let resultado5;
let resultado6;

// A traves de este switch se establecera las condiciones a ejecutar dependiendo del nombre de la empresa que el usuario haya indicado anteriormente, en el que, iterando en los arrays, que estan en el otro archivo .js, y ubicandose en la fecha tambien indicada por el usuario, hasta hallar el datos de las ventas de esa empresa en concreto. 
// A su vez, se crearon 2 funciones para que me determine la variacion trimestral y anual de las ventas.
switch(fechas){
    case "Dic/2018":
        busqueda = revenue.find(i => i.Fecha === fechas);
        resultado = Object.entries(busqueda).filter(([i]) => i.includes(empresas));

        busqueda2 = grossProfit.find(i => i.Fecha === fechas);
        resultado2 = Object.entries(busqueda2).filter(([i]) => i.includes(empresas));

        busqueda3 = operatingIncome.find(i => i.Fecha === fechas);
        resultado3 = Object.entries(busqueda3).filter(([i]) => i.includes(empresas));

        busqueda4 = netIncome.find(i => i.Fecha === fechas);
        resultado4 = Object.entries(busqueda4).filter(([i]) => i.includes(empresas));

        busqueda5 = ebitda.find(i => i.Fecha === fechas);
        resultado5 = Object.entries(busqueda5).filter(([i]) => i.includes(empresas));

        busqueda6 = ebit.find(i => i.Fecha === fechas);
        resultado6 = Object.entries(busqueda6).filter(([i]) => i.includes(empresas));

        break;
    case "Mar/2019":
        busqueda = revenue.find(i => i.Fecha === fechas);
        resultado = Object.entries(busqueda).filter(([i]) => i.includes(empresas));

        busqueda2 = grossProfit.find(i => i.Fecha === fechas);
        resultado2 = Object.entries(busqueda2).filter(([i]) => i.includes(empresas));

        busqueda3 = operatingIncome.find(i => i.Fecha === fechas);
        resultado3 = Object.entries(busqueda3).filter(([i]) => i.includes(empresas));

        busqueda4 = netIncome.find(i => i.Fecha === fechas);
        resultado4 = Object.entries(busqueda4).filter(([i]) => i.includes(empresas));

        busqueda5 = ebitda.find(i => i.Fecha === fechas);
        resultado5 = Object.entries(busqueda5).filter(([i]) => i.includes(empresas));

        busqueda6 = ebit.find(i => i.Fecha === fechas);
        resultado6 = Object.entries(busqueda6).filter(([i]) => i.includes(empresas));
        break;
    case "Jun/2019":
        busqueda = revenue.find(i => i.Fecha === fechas);
        resultado = Object.entries(busqueda).filter(([i]) => i.includes(empresas));

        busqueda2 = grossProfit.find(i => i.Fecha === fechas);
        resultado2 = Object.entries(busqueda2).filter(([i]) => i.includes(empresas));

        busqueda3 = operatingIncome.find(i => i.Fecha === fechas);
        resultado3 = Object.entries(busqueda3).filter(([i]) => i.includes(empresas));

        busqueda4 = netIncome.find(i => i.Fecha === fechas);
        resultado4 = Object.entries(busqueda4).filter(([i]) => i.includes(empresas));

        busqueda5 = ebitda.find(i => i.Fecha === fechas);
        resultado5 = Object.entries(busqueda5).filter(([i]) => i.includes(empresas));

        busqueda6 = ebit.find(i => i.Fecha === fechas);
        resultado6 = Object.entries(busqueda6).filter(([i]) => i.includes(empresas));
        break;
    case "Sep/2019":
        busqueda = revenue.find(i => i.Fecha === fechas);
        resultado = Object.entries(busqueda).filter(([i]) => i.includes(empresas));

        busqueda2 = grossProfit.find(i => i.Fecha === fechas);
        resultado2 = Object.entries(busqueda2).filter(([i]) => i.includes(empresas));

        busqueda3 = operatingIncome.find(i => i.Fecha === fechas);
        resultado3 = Object.entries(busqueda3).filter(([i]) => i.includes(empresas));

        busqueda4 = netIncome.find(i => i.Fecha === fechas);
        resultado4 = Object.entries(busqueda4).filter(([i]) => i.includes(empresas));

        busqueda5 = ebitda.find(i => i.Fecha === fechas);
        resultado5 = Object.entries(busqueda5).filter(([i]) => i.includes(empresas));

        busqueda6 = ebit.find(i => i.Fecha === fechas);
        resultado6 = Object.entries(busqueda6).filter(([i]) => i.includes(empresas));        
        break;
    case "Dic/2019":
        busqueda = revenue.find(i => i.Fecha === fechas);
        resultado = Object.entries(busqueda).filter(([i]) => i.includes(empresas));

        busqueda2 = grossProfit.find(i => i.Fecha === fechas);
        resultado2 = Object.entries(busqueda2).filter(([i]) => i.includes(empresas));

        busqueda3 = operatingIncome.find(i => i.Fecha === fechas);
        resultado3 = Object.entries(busqueda3).filter(([i]) => i.includes(empresas));

        busqueda4 = netIncome.find(i => i.Fecha === fechas);
        resultado4 = Object.entries(busqueda4).filter(([i]) => i.includes(empresas));

        busqueda5 = ebitda.find(i => i.Fecha === fechas);
        resultado5 = Object.entries(busqueda5).filter(([i]) => i.includes(empresas));

        busqueda6 = ebit.find(i => i.Fecha === fechas);
        resultado6 = Object.entries(busqueda6).filter(([i]) => i.includes(empresas));    
        break;
    case "Mar/2020":
        busqueda = revenue.find(i => i.Fecha === fechas);
        resultado = Object.entries(busqueda).filter(([i]) => i.includes(empresas));

        busqueda2 = grossProfit.find(i => i.Fecha === fechas);
        resultado2 = Object.entries(busqueda2).filter(([i]) => i.includes(empresas));

        busqueda3 = operatingIncome.find(i => i.Fecha === fechas);
        resultado3 = Object.entries(busqueda3).filter(([i]) => i.includes(empresas));

        busqueda4 = netIncome.find(i => i.Fecha === fechas);
        resultado4 = Object.entries(busqueda4).filter(([i]) => i.includes(empresas));

        busqueda5 = ebitda.find(i => i.Fecha === fechas);
        resultado5 = Object.entries(busqueda5).filter(([i]) => i.includes(empresas));

        busqueda6 = ebit.find(i => i.Fecha === fechas);
        resultado6 = Object.entries(busqueda6).filter(([i]) => i.includes(empresas));
        break;
    case "Jun/2020":
        busqueda = revenue.find(i => i.Fecha === fechas);
        resultado = Object.entries(busqueda).filter(([i]) => i.includes(empresas));

        busqueda2 = grossProfit.find(i => i.Fecha === fechas);
        resultado2 = Object.entries(busqueda2).filter(([i]) => i.includes(empresas));

        busqueda3 = operatingIncome.find(i => i.Fecha === fechas);
        resultado3 = Object.entries(busqueda3).filter(([i]) => i.includes(empresas));

        busqueda4 = netIncome.find(i => i.Fecha === fechas);
        resultado4 = Object.entries(busqueda4).filter(([i]) => i.includes(empresas));

        busqueda5 = ebitda.find(i => i.Fecha === fechas);
        resultado5 = Object.entries(busqueda5).filter(([i]) => i.includes(empresas));

        busqueda6 = ebit.find(i => i.Fecha === fechas);
        resultado6 = Object.entries(busqueda6).filter(([i]) => i.includes(empresas));
        break;
    case "Sep/2020":
        busqueda = revenue.find(i => i.Fecha === fechas);
        resultado = Object.entries(busqueda).filter(([i]) => i.includes(empresas));

        busqueda2 = grossProfit.find(i => i.Fecha === fechas);
        resultado2 = Object.entries(busqueda2).filter(([i]) => i.includes(empresas));

        busqueda3 = operatingIncome.find(i => i.Fecha === fechas);
        resultado3 = Object.entries(busqueda3).filter(([i]) => i.includes(empresas));

        busqueda4 = netIncome.find(i => i.Fecha === fechas);
        resultado4 = Object.entries(busqueda4).filter(([i]) => i.includes(empresas));

        busqueda5 = ebitda.find(i => i.Fecha === fechas);
        resultado5 = Object.entries(busqueda5).filter(([i]) => i.includes(empresas));

        busqueda6 = ebit.find(i => i.Fecha === fechas);
        resultado6 = Object.entries(busqueda6).filter(([i]) => i.includes(empresas));
        break;
    case "Dic/2020":
        busqueda = revenue.find(i => i.Fecha === fechas);
        resultado = Object.entries(busqueda).filter(([i]) => i.includes(empresas));

        busqueda2 = grossProfit.find(i => i.Fecha === fechas);
        resultado2 = Object.entries(busqueda2).filter(([i]) => i.includes(empresas));

        busqueda3 = operatingIncome.find(i => i.Fecha === fechas);
        resultado3 = Object.entries(busqueda3).filter(([i]) => i.includes(empresas));

        busqueda4 = netIncome.find(i => i.Fecha === fechas);
        resultado4 = Object.entries(busqueda4).filter(([i]) => i.includes(empresas));

        busqueda5 = ebitda.find(i => i.Fecha === fechas);
        resultado5 = Object.entries(busqueda5).filter(([i]) => i.includes(empresas));

        busqueda6 = ebit.find(i => i.Fecha === fechas);
        resultado6 = Object.entries(busqueda6).filter(([i]) => i.includes(empresas));
        break;
    case "Mar/2021":
        busqueda = revenue.find(i => i.Fecha === fechas);
        resultado = Object.entries(busqueda).filter(([i]) => i.includes(empresas));

        busqueda2 = grossProfit.find(i => i.Fecha === fechas);
        resultado2 = Object.entries(busqueda2).filter(([i]) => i.includes(empresas));

        busqueda3 = operatingIncome.find(i => i.Fecha === fechas);
        resultado3 = Object.entries(busqueda3).filter(([i]) => i.includes(empresas));

        busqueda4 = netIncome.find(i => i.Fecha === fechas);
        resultado4 = Object.entries(busqueda4).filter(([i]) => i.includes(empresas));

        busqueda5 = ebitda.find(i => i.Fecha === fechas);
        resultado5 = Object.entries(busqueda5).filter(([i]) => i.includes(empresas));

        busqueda6 = ebit.find(i => i.Fecha === fechas);
        resultado6 = Object.entries(busqueda6).filter(([i]) => i.includes(empresas));
        break;
    case "Jun/2021":
        busqueda = revenue.find(i => i.Fecha === fechas);
        resultado = Object.entries(busqueda).filter(([i]) => i.includes(empresas));

        busqueda2 = grossProfit.find(i => i.Fecha === fechas);
        resultado2 = Object.entries(busqueda2).filter(([i]) => i.includes(empresas));

        busqueda3 = operatingIncome.find(i => i.Fecha === fechas);
        resultado3 = Object.entries(busqueda3).filter(([i]) => i.includes(empresas));

        busqueda4 = netIncome.find(i => i.Fecha === fechas);
        resultado4 = Object.entries(busqueda4).filter(([i]) => i.includes(empresas));

        busqueda5 = ebitda.find(i => i.Fecha === fechas);
        resultado5 = Object.entries(busqueda5).filter(([i]) => i.includes(empresas));

        busqueda6 = ebit.find(i => i.Fecha === fechas);
        resultado6 = Object.entries(busqueda6).filter(([i]) => i.includes(empresas));
        break;
    case "Sep/2021":
        busqueda = revenue.find(i => i.Fecha === fechas);
        resultado = Object.entries(busqueda).filter(([i]) => i.includes(empresas));

        busqueda2 = grossProfit.find(i => i.Fecha === fechas);
        resultado2 = Object.entries(busqueda2).filter(([i]) => i.includes(empresas));

        busqueda3 = operatingIncome.find(i => i.Fecha === fechas);
        resultado3 = Object.entries(busqueda3).filter(([i]) => i.includes(empresas));

        busqueda4 = netIncome.find(i => i.Fecha === fechas);
        resultado4 = Object.entries(busqueda4).filter(([i]) => i.includes(empresas));

        busqueda5 = ebitda.find(i => i.Fecha === fechas);
        resultado5 = Object.entries(busqueda5).filter(([i]) => i.includes(empresas));

        busqueda6 = ebit.find(i => i.Fecha === fechas);
        resultado6 = Object.entries(busqueda6).filter(([i]) => i.includes(empresas)); 
        break;
}

let parrafo;

let divBanner = document.getElementById("Banner");
let divRevenue = document.getElementById("Revenue");
let divGrossProfit = document.getElementById("GrossProfit");
let divOperatingIncome = document.getElementById("OperatingIncome");
let divNetIncome = document.getElementById("NetIncome");
let divEbitda = document.getElementById("Ebitda");
let divEbit = document.getElementById("Ebit");


function revenueF(){
    parrafo = document.createElement("div");
    parrafo.innerHTML = "Las ventas de "+ empresas +" fueron de "+ resultado[0][1] +" en el mes de "+ fechas;
    divRevenue.appendChild(parrafo);
}
revenueF();

function grossProfitF(){
    parrafo = document.createElement("div");
    parrafo.innerHTML = "El margen bruto de "+ empresas +" fue de "+ resultado2[0][1] +" en el mes de "+ fechas;
    divGrossProfit.appendChild(parrafo);
}
grossProfitF();

function operatingIncomeF(){
    parrafo = document.createElement("div");
    parrafo.innerHTML = "El margen operativo de "+ empresas +" fue de "+ resultado3[0][1] +" en el mes de "+ fechas;
    divOperatingIncome.appendChild(parrafo);
}
operatingIncomeF();

function netIncomeF(){
    parrafo = document.createElement("div");
    parrafo.innerHTML = "El margen neto de "+ empresas +" fue de "+ resultado4[0][1] +" en el mes de "+ fechas;
    divNetIncome.appendChild(parrafo);
}
netIncomeF();

function ebitdaF(){
    parrafo = document.createElement("div");
    parrafo.innerHTML = "El EBITDA de "+ empresas +" fue de "+ resultado5[0][1] +" en el mes de "+ fechas;
    divEbitda.appendChild(parrafo);
}
ebitdaF();

function ebitF(){
    parrafo = document.createElement("div");
    parrafo.innerHTML = "El EBIT de "+ empresas +" fue de "+ resultado6[0][1] +" en el mes de "+ fechas;
    divEbit.appendChild(parrafo);
}
ebitF();



