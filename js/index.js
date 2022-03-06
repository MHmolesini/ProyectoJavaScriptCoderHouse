let empresas = prompt("Seleccione una empresa");
let meses = prompt("Seleccione la fecha");

// Seleccione una empresa

const aapl = [
    {mes: "Dic/2018", revenue: 84373},
    {mes: "Mar/2019", revenue: 57918},
    {mes: "Jun/2019", revenue: 53741},
    {mes: "Sep/2019", revenue: 63936},
    {mes: "Dic/2019", revenue: 91722},
    {mes: "Mar/2020", revenue: 58347},
    {mes: "Jun/2020", revenue: 59415},
    {mes: "Sep/2020", revenue: 64666},
    {mes: "Dic/2020", revenue: 111543},
    {mes: "Mar/2021", revenue: 89898},
    {mes: "Jun/2021", revenue: 81494},
    {mes: "Sep/2021", revenue: 83360},
    {mes: "Dic/2021", revenue: 0}
];

const abev = [
    {mes: "Dic/2018", revenue: 4207},
    {mes: "Mar/2019", revenue: 3355},
    {mes: "Jun/2019", revenue: 3098},
    {mes: "Sep/2019", revenue: 3013},
    {mes: "Dic/2019", revenue: 3852},
    {mes: "Mar/2020", revenue: 2823},
    {mes: "Jun/2020", revenue: 2158},
    {mes: "Sep/2020", revenue: 2902},
    {mes: "Dic/2020", revenue: 3437},
    {mes: "Mar/2021", revenue: 3037},
    {mes: "Jun/2021", revenue: 2970},
    {mes: "Sep/2021", revenue: 3536},
    {mes: "Dic/2021", revenue: 0}
];

const abt = [
    {mes: "Dic/2018", revenue: 7765},
    {mes: "Mar/2019", revenue: 7535},
    {mes: "Jun/2019", revenue: 7979},
    {mes: "Sep/2019", revenue: 8076},
    {mes: "Dic/2019", revenue: 8314},
    {mes: "Mar/2020", revenue: 7726},
    {mes: "Jun/2020", revenue: 7328},
    {mes: "Sep/2020", revenue: 8853},
    {mes: "Dic/2020", revenue: 10701},
    {mes: "Mar/2021", revenue: 10456},
    {mes: "Jun/2021", revenue: 10223},
    {mes: "Sep/2021", revenue: 10928},
    {mes: "Dic/2021", revenue: 0}
];

const adbe = [
    {mes: "Dic/2018", revenue: 2434},
    {mes: "Mar/2019", revenue: 2592},
    {mes: "Jun/2019", revenue: 2735},
    {mes: "Sep/2019", revenue: 2823},
    {mes: "Dic/2019", revenue: 2980},
    {mes: "Mar/2020", revenue: 3084},
    {mes: "Jun/2020", revenue: 3123},
    {mes: "Sep/2020", revenue: 3226},
    {mes: "Dic/2020", revenue: 3432},
    {mes: "Mar/2021", revenue: 3916},
    {mes: "Jun/2021", revenue: 3846},
    {mes: "Sep/2021", revenue: 3940},
    {mes: "Dic/2021", revenue: 4110}
];

const agro = [
    {mes: "Dic/2018", revenue: 246.909},
    {mes: "Mar/2019", revenue: 79.815},
    {mes: "Jun/2019", revenue: 218.786},
    {mes: "Sep/2019", revenue: 254.312},
    {mes: "Dic/2019", revenue: 262.525},
    {mes: "Mar/2020", revenue: 156.130},
    {mes: "Jun/2020", revenue: 161.853},
    {mes: "Sep/2020", revenue: 260.532},
    {mes: "Dic/2020", revenue: 243.049},
    {mes: "Mar/2021", revenue: 108.592},
    {mes: "Jun/2021", revenue: 289.769},
    {mes: "Sep/2021", revenue: 309.016},
    {mes: "Dic/2021", revenue: 0}
];

const aig = [
    {mes: "Dic/2018", revenue: 12560},
    {mes: "Mar/2019", revenue: 12456},
    {mes: "Jun/2019", revenue: 12561},
    {mes: "Sep/2019", revenue: 12914},
    {mes: "Dic/2019", revenue: 11815},
    {mes: "Mar/2020", revenue: 14443},
    {mes: "Jun/2020", revenue: 9396},
    {mes: "Sep/2020", revenue: 10221},
    {mes: "Dic/2020", revenue: 9676},
    {mes: "Mar/2021", revenue: 14454},
    {mes: "Jun/2021", revenue: 10681},
    {mes: "Sep/2021", revenue: 12835},
    {mes: "Dic/2021", revenue: 0}
];

const amd = [
    {mes: "Dic/2018", revenue: 1419},
    {mes: "Mar/2019", revenue: 1272},
    {mes: "Jun/2019", revenue: 1531},
    {mes: "Sep/2019", revenue: 1801},
    {mes: "Dic/2019", revenue: 2127},
    {mes: "Mar/2020", revenue: 1786},
    {mes: "Jun/2020", revenue: 1932},
    {mes: "Sep/2020", revenue: 2801},
    {mes: "Dic/2020", revenue: 3244},
    {mes: "Mar/2021", revenue: 3445},
    {mes: "Jun/2021", revenue: 3850},
    {mes: "Sep/2021", revenue: 4313},
    {mes: "Dic/2021", revenue: 0}
];

const amgn = [
    {mes: "Dic/2018", revenue: 6200},
    {mes: "Mar/2019", revenue: 5543},
    {mes: "Jun/2019", revenue: 5849},
    {mes: "Sep/2019", revenue: 5711},
    {mes: "Dic/2019", revenue: 6158},
    {mes: "Mar/2020", revenue: 6112},
    {mes: "Jun/2020", revenue: 6138},
    {mes: "Sep/2020", revenue: 6382},
    {mes: "Dic/2020", revenue: 6614},
    {mes: "Mar/2021", revenue: 5902},
    {mes: "Jun/2021", revenue: 6544},
    {mes: "Sep/2021", revenue: 6711},
    {mes: "Dic/2021", revenue: 0}
];

const amx = [
    {mes: "Dic/2018", revenue: 13230},
    {mes: "Mar/2019", revenue: 12793},
    {mes: "Jun/2019", revenue: 13080},
    {mes: "Sep/2019", revenue: 12785},
    {mes: "Dic/2019", revenue: 13670},
    {mes: "Mar/2020", revenue: 12477},
    {mes: "Jun/2020", revenue: 10792},
    {mes: "Sep/2020", revenue: 11778},
    {mes: "Dic/2020", revenue: 12407},
    {mes: "Mar/2021", revenue: 12192},
    {mes: "Jun/2021", revenue: 12621},
    {mes: "Sep/2021", revenue: 12648},
    {mes: "Dic/2021", revenue: 0}
];

const amzn = [
    {mes: "Dic/2018", revenue: 72383},
    {mes: "Mar/2019", revenue: 59700},
    {mes: "Jun/2019", revenue: 63404},
    {mes: "Sep/2019", revenue: 69981},
    {mes: "Dic/2019", revenue: 87437},
    {mes: "Mar/2020", revenue: 75452},
    {mes: "Jun/2020", revenue: 88912},
    {mes: "Sep/2020", revenue: 96145},
    {mes: "Dic/2020", revenue: 125555},
    {mes: "Mar/2021", revenue: 108518},
    {mes: "Jun/2021", revenue: 113080},
    {mes: "Sep/2021", revenue: 110812},
    {mes: "Dic/2021", revenue: 0}
];

const arco = [
    {mes: "Dic/2018", revenue: 753.342},
    {mes: "Mar/2019", revenue: 730.999},
    {mes: "Jun/2019", revenue: 723.744},
    {mes: "Sep/2019", revenue: 749.969},
    {mes: "Dic/2019", revenue: 754.366},
    {mes: "Mar/2020", revenue: 617.504},
    {mes: "Jun/2020", revenue: 292.524},
    {mes: "Sep/2020", revenue: 466.799},
    {mes: "Dic/2020", revenue: 607.392},
    {mes: "Mar/2021", revenue: 561.116},
    {mes: "Jun/2021", revenue: 592.696},
    {mes: "Sep/2021", revenue: 725.836},
    {mes: "Dic/2021", revenue: 0}
];

const auy = [
    {mes: "Dic/2018", revenue: 467.415},
    {mes: "Mar/2019", revenue: 405.097},
    {mes: "Jun/2019", revenue: 474.558},
    {mes: "Sep/2019", revenue: 356.883},
    {mes: "Dic/2019", revenue: 390.688},
    {mes: "Mar/2020", revenue: 336.887},
    {mes: "Jun/2020", revenue: 308.621},
    {mes: "Sep/2020", revenue: 438.34},
    {mes: "Dic/2020", revenue: 472.335},
    {mes: "Mar/2021", revenue: 425.152},
    {mes: "Jun/2021", revenue: 433.689},
    {mes: "Sep/2021", revenue: 449.121},
    {mes: "Dic/2021", revenue: 0}
];

const axp = [
    {mes: "Dic/2018", revenue: 11308},
    {mes: "Mar/2019", revenue: 11259},
    {mes: "Jun/2019", revenue: 11729},
    {mes: "Sep/2019", revenue: 11866},
    {mes: "Dic/2019", revenue: 12166},
    {mes: "Mar/2020", revenue: 11026},
    {mes: "Jun/2020", revenue: 8217},
    {mes: "Sep/2020", revenue: 9201},
    {mes: "Dic/2020", revenue: 9741},
    {mes: "Mar/2021", revenue: 9426},
    {mes: "Jun/2021", revenue: 10565},
    {mes: "Sep/2021", revenue: 11235},
    {mes: "Dic/2021", revenue: 0}
];

const azn = [
    {mes: "Dic/2018", revenue: 7189},
    {mes: "Mar/2019", revenue: 6070},
    {mes: "Jun/2019", revenue: 5794},
    {mes: "Sep/2019", revenue: 6607},
    {mes: "Dic/2019", revenue: 7154},
    {mes: "Mar/2020", revenue: 6708},
    {mes: "Jun/2020", revenue: 6341},
    {mes: "Sep/2020", revenue: 6870},
    {mes: "Dic/2020", revenue: 7987},
    {mes: "Mar/2021", revenue: 8434},
    {mes: "Jun/2021", revenue: 8204},
    {mes: "Sep/2021", revenue: 9866},
    {mes: "Dic/2021", revenue: 0}
];

const ba = [
    {mes: "Dic/2018", revenue: 28341},
    {mes: "Mar/2019", revenue: 22912},
    {mes: "Jun/2019", revenue: 15750},
    {mes: "Sep/2019", revenue: 19986},
    {mes: "Dic/2019", revenue: 17911},
    {mes: "Mar/2020", revenue: 16909},
    {mes: "Jun/2020", revenue: 11807},
    {mes: "Sep/2020", revenue: 14140},
    {mes: "Dic/2020", revenue: 15305},
    {mes: "Mar/2021", revenue: 15217},
    {mes: "Jun/2021", revenue: 16998},
    {mes: "Sep/2021", revenue: 15278},
    {mes: "Dic/2021", revenue: 0}
];

const baba = [
    {mes: "Dic/2018", revenue: 16954},
    {mes: "Mar/2019", revenue: 13860},
    {mes: "Jun/2019", revenue: 16840},
    {mes: "Sep/2019", revenue: 16964},
    {mes: "Dic/2019", revenue: 22917},
    {mes: "Mar/2020", revenue: 16380},
    {mes: "Jun/2020", revenue: 21691},
    {mes: "Sep/2020", revenue: 22412},
    {mes: "Dic/2020", revenue: 33362},
    {mes: "Mar/2021", revenue: 28922},
    {mes: "Jun/2021", revenue: 31861},
    {mes: "Sep/2021", revenue: 31023},
    {mes: "Dic/2021", revenue: 0}
];

const bac = [
    {mes: "Dic/2018", revenue: 28380},
    {mes: "Mar/2019", revenue: 28373},
    {mes: "Jun/2019", revenue: 29295},
    {mes: "Sep/2019", revenue: 28564},
    {mes: "Dic/2019", revenue: 29409},
    {mes: "Mar/2020", revenue: 27541},
    {mes: "Jun/2020", revenue: 24773},
    {mes: "Sep/2020", revenue: 24153},
    {mes: "Dic/2020", revenue: 22374},
    {mes: "Mar/2021", revenue: 24460},
    {mes: "Jun/2021", revenue: 22918},
    {mes: "Sep/2021", revenue: 24256},
    {mes: "Dic/2021", revenue: 0}
];

const bbd = [
    {mes: "Dic/2018", revenue: 16028},
    {mes: "Mar/2019", revenue: 16038},
    {mes: "Jun/2019", revenue: 15472},
    {mes: "Sep/2019", revenue: 15178},
    {mes: "Dic/2019", revenue: 15410},
    {mes: "Mar/2020", revenue: 8199},
    {mes: "Jun/2020", revenue: 5687},
    {mes: "Sep/2020", revenue: 6732},
    {mes: "Dic/2020", revenue: 6333},
    {mes: "Mar/2021", revenue: 7204},
    {mes: "Jun/2021", revenue: 5778},
    {mes: "Sep/2021", revenue: 8193},
    {mes: "Dic/2021", revenue: 0}
];

const bbva = [
    {mes: "Dic/2018", revenue: 7184},
    {mes: "Mar/2019", revenue: 6890},
    {mes: "Jun/2019", revenue: 12082},
    {mes: "Sep/2019", revenue: 11914},
    {mes: "Dic/2019", revenue: 10399},
    {mes: "Mar/2020", revenue: 7142},
    {mes: "Jun/2020", revenue: 9622},
    {mes: "Sep/2020", revenue: 9676},
    {mes: "Dic/2020", revenue: 6122},
    {mes: "Mar/2021", revenue: 10366},
    {mes: "Jun/2021", revenue: 10454},
    {mes: "Sep/2021", revenue: 10383},
    {mes: "Dic/2021", revenue: 0}
];

const bcs = [
    {mes: "Dic/2018", revenue: 6526},
    {mes: "Mar/2019", revenue: 6840},
    {mes: "Jun/2019", revenue: 7118},
    {mes: "Sep/2019", revenue: 6830},
    {mes: "Dic/2019", revenue: 6820},
    {mes: "Mar/2020", revenue: 8028},
    {mes: "Jun/2020", revenue: 6626},
    {mes: "Sep/2020", revenue: 6721},
    {mes: "Dic/2020", revenue: 6524},
    {mes: "Mar/2021", revenue: 8135},
    {mes: "Jun/2021", revenue: 7573},
    {mes: "Sep/2021", revenue: 7530},
    {mes: "Dic/2021", revenue: 0}
];

const bg = [
    {mes: "Dic/2018", revenue: 11543},
    {mes: "Mar/2019", revenue: 9937},
    {mes: "Jun/2019", revenue: 10095},
    {mes: "Sep/2019", revenue: 10325},
    {mes: "Dic/2019", revenue: 10786},
    {mes: "Mar/2020", revenue: 9173},
    {mes: "Jun/2020", revenue: 9467},
    {mes: "Sep/2020", revenue: 10163},
    {mes: "Dic/2020", revenue: 12614},
    {mes: "Mar/2021", revenue: 12961},
    {mes: "Jun/2021", revenue: 15390},
    {mes: "Sep/2021", revenue: 14116},
    {mes: "Dic/2021", revenue: 0}
];

const bidu = [
    {mes: "Dic/2018", revenue: 3931},
    {mes: "Mar/2019", revenue: 3576},
    {mes: "Jun/2019", revenue: 3858},
    {mes: "Sep/2019", revenue: 4002},
    {mes: "Dic/2019", revenue: 4100},
    {mes: "Mar/2020", revenue: 3230},
    {mes: "Jun/2020", revenue: 3673},
    {mes: "Sep/2020", revenue: 4081},
    {mes: "Dic/2020", revenue: 4567},
    {mes: "Mar/2021", revenue: 4342},
    {mes: "Jun/2021", revenue: 4855},
    {mes: "Sep/2021", revenue: 4934},
    {mes: "Dic/2021", revenue: 0}
];

const biib = [
    {mes: "Dic/2018", revenue: 3148},
    {mes: "Mar/2019", revenue: 3081},
    {mes: "Jun/2019", revenue: 3206},
    {mes: "Sep/2019", revenue: 3171},
    {mes: "Dic/2019", revenue: 3257},
    {mes: "Mar/2020", revenue: 3157},
    {mes: "Jun/2020", revenue: 3402},
    {mes: "Sep/2020", revenue: 3119},
    {mes: "Dic/2020", revenue: 930.8},
    {mes: "Mar/2021", revenue: 2694},
    {mes: "Jun/2021", revenue: 2628},
    {mes: "Sep/2021", revenue: 2649},
    {mes: "Dic/2021", revenue: 0}
];

const bmy = [
    {mes: "Dic/2018", revenue: 5973},
    {mes: "Mar/2019", revenue: 5920},
    {mes: "Jun/2019", revenue: 6273},
    {mes: "Sep/2019", revenue: 6007},
    {mes: "Dic/2019", revenue: 7945},
    {mes: "Mar/2020", revenue: 10781},
    {mes: "Jun/2020", revenue: 10129},
    {mes: "Sep/2020", revenue: 10540},
    {mes: "Dic/2020", revenue: 11068},
    {mes: "Mar/2021", revenue: 11073},
    {mes: "Jun/2021", revenue: 11703},
    {mes: "Sep/2021", revenue: 11624},
    {mes: "Dic/2021", revenue: 0}
];

const bp = [
    {mes: "Dic/2018", revenue: 75048},
    {mes: "Mar/2019", revenue: 67026},
    {mes: "Jun/2019", revenue: 72319},
    {mes: "Sep/2019", revenue: 67863},
    {mes: "Dic/2019", revenue: 72074},
    {mes: "Mar/2020", revenue: 59687},
    {mes: "Jun/2020", revenue: 31754},
    {mes: "Sep/2020", revenue: 45044},
    {mes: "Dic/2020", revenue: 45170},
    {mes: "Mar/2021", revenue: 34664},
    {mes: "Jun/2021", revenue: 36396},
    {mes: "Sep/2021", revenue: 36174},
    {mes: "Dic/2021", revenue: 0}
];

const brfs = [
    {mes: "Dic/2018", revenue: 2507},
    {mes: "Mar/2019", revenue: 1953},
    {mes: "Jun/2019", revenue: 2127},
    {mes: "Sep/2019", revenue: 2132},
    {mes: "Dic/2019", revenue: 2257},
    {mes: "Mar/2020", revenue: 2005},
    {mes: "Jun/2020", revenue: 1692},
    {mes: "Sep/2020", revenue: 1849},
    {mes: "Dic/2020", revenue: 2125},
    {mes: "Mar/2021", revenue: 1933},
    {mes: "Jun/2021", revenue: 2200},
    {mes: "Sep/2021", revenue: 2369},
    {mes: "Dic/2021", revenue: 0}
];

const bsbr = [
    {mes: "Dic/2018", revenue: 6030},
    {mes: "Mar/2019", revenue: 6125},
    {mes: "Jun/2019", revenue: 6083},
    {mes: "Sep/2019", revenue: 5389},
    {mes: "Dic/2019", revenue: 6028},
    {mes: "Mar/2020", revenue: 2473},
    {mes: "Jun/2020", revenue: 3133},
    {mes: "Sep/2020", revenue: 3460},
    {mes: "Dic/2020", revenue: 4669},
    {mes: "Mar/2021", revenue: 3643},
    {mes: "Jun/2021", revenue: 4951},
    {mes: "Sep/2021", revenue: 4324},
    {mes: "Dic/2021", revenue: 0}
];
// cambiar
// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];

// const abev = [
//     {mes: "Dic/2018", revenue: 4207},
//     {mes: "Mar/2019", revenue: 3355},
//     {mes: "Jun/2019", revenue: 3098},
//     {mes: "Sep/2019", revenue: 3013},
//     {mes: "Dic/2019", revenue: 3852},
//     {mes: "Mar/2020", revenue: 2823},
//     {mes: "Jun/2020", revenue: 2158},
//     {mes: "Sep/2020", revenue: 2902},
//     {mes: "Dic/2020", revenue: 3437},
//     {mes: "Mar/2021", revenue: 3037},
//     {mes: "Jun/2021", revenue: 2970},
//     {mes: "Sep/2021", revenue: 3536},
//     {mes: "Dic/2021", revenue: 0}
// ];



// const busquedaEmpresa = aapl.find((i) => i.mes === meses);

var busqueda;

// while(empresas != ""){
    switch(empresas){
        case "Apple":
            busqueda = aapl.find((i) => i.mes === meses);
            document.write("<br> Las ventas de "+ empresas +" fueron de USD "+ busqueda.revenue +" millones, en el mes de "+ meses);
            break;
        case "Ambev":
            busqueda = abev.find((i) => i.mes === meses);
            document.write("<br> Las ventas de "+ empresas +" fueron de USD "+ busqueda.revenue +" millones, en el mes de "+ meses);
            break;
        case "Abbott Laboratories":
            busqueda = abt.find((i) => i.mes === meses);
            document.write("<br> Las ventas de "+ empresas +" fueron de USD "+ busqueda.revenue +" millones, en el mes de "+ meses);
            break;
        case "Adobe":
            busqueda = adbe.find((i) => i.mes === meses);
            document.write("<br> Las ventas de "+ empresas +" fueron de USD "+ busqueda.revenue +" millones, en el mes de "+ meses);
            break; 
        case "Adecoagro":
            busqueda = agro.find((i) => i.mes === meses);
            document.write("<br> Las ventas de "+ empresas +" fueron de USD "+ busqueda.revenue +" millones, en el mes de "+ meses);

            console.log((busqueda.revenue).indexOf(busqueda.revenue));


            
            function variacion(){
                return parseFloat(((busqueda.revenue - agro[agro.indexOf(meses)].revenue)/agro[agro.indexOf(meses)].revenue)*100).toFixed(2);
            }
            console.log("La variacion anual fue del "+ variacion() +"%");
            break;
        case "American International Group":
            busqueda = aig.find((i) => i.mes === meses);
            document.write("<br> Las ventas de "+ empresas +" fueron de USD "+ busqueda.revenue +" millones, en el mes de "+ meses);
            break; 
        case "Advanced Micro Devices":
            busqueda = amd.find((i) => i.mes === meses);
            document.write("<br> Las ventas de "+ empresas +" fueron de USD "+ busqueda.revenue +" millones, en el mes de "+ meses);
            break;
        case "Amgen":
            busqueda = amgn.find((i) => i.mes === meses);
            document.write("<br> Las ventas de "+ empresas +" fueron de USD "+ busqueda.revenue +" millones, en el mes de "+ meses);
            break; 
        case "America Movil":
            busqueda = amx.find((i) => i.mes === meses);
            document.write("<br> Las ventas de "+ empresas +" fueron de USD "+ busqueda.revenue +" millones, en el mes de "+ meses);
            break; 
        case "Amazon":
            busqueda = amzn.find((i) => i.mes === meses);
            document.write("<br> Las ventas de "+ empresas +" fueron de USD "+ busqueda.revenue +" millones, en el mes de "+ meses);
            break; 
        case "Arcos Dorados Holdings":
            busqueda = arco.find((i) => i.mes === meses);
            document.write("<br> Las ventas de "+ empresas +" fueron de USD "+ busqueda.revenue +" millones, en el mes de "+ meses);
            break; 
        case "Yamana Gold":
            busqueda = auy.find((i) => i.mes === meses);
            document.write("<br> Las ventas de "+ empresas +" fueron de USD "+ busqueda.revenue +" millones, en el mes de "+ meses);
            break;
        case "American Express Company":
            busqueda = axp.find((i) => i.mes === meses);
            document.write("<br> Las ventas de "+ empresas +" fueron de USD "+ busqueda.revenue +" millones, en el mes de "+ meses);
            break;
        case "Astrazeneca":
            busqueda = azn.find((i) => i.mes === meses);
            document.write("<br> Las ventas de "+ empresas +" fueron de USD "+ busqueda.revenue +" millones, en el mes de "+ meses);
            break;
        case "Boeing Company":
            busqueda = ba.find((i) => i.mes === meses);
            document.write("<br> Las ventas de "+ empresas +" fueron de USD "+ busqueda.revenue +" millones, en el mes de "+ meses);
            break;
        case "Alibaba Group Holdings":
            busqueda = baba.find((i) => i.mes === meses);
            document.write("<br> Las ventas de "+ empresas +" fueron de USD "+ busqueda.revenue +" millones, en el mes de "+ meses);
            break;
        case "Bank of America Corporation":
            busqueda = bac.find((i) => i.mes === meses);
            document.write("<br> Las ventas de "+ empresas +" fueron de USD "+ busqueda.revenue +" millones, en el mes de "+ meses);
            break;  
        case "Banco Bradesco":
            busqueda = bbd.find((i) => i.mes === meses);
            document.write("<br> Las ventas de "+ empresas +" fueron de USD "+ busqueda.revenue +" millones, en el mes de "+ meses);
            break;
        case "Banco Bilbao Vizcaya Argentaria":
            busqueda = bbva.find((i) => i.mes === meses);
            document.write("<br> Las ventas de "+ empresas +" fueron de USD "+ busqueda.revenue +" millones, en el mes de "+ meses);
            break;
        case "Barclays":
            busqueda = bcs.find((i) => i.mes === meses);
            document.write("<br> Las ventas de "+ empresas +" fueron de USD "+ busqueda.revenue +" millones, en el mes de "+ meses);
            break;
        case "Bunge Limited":
            busqueda = bg.find((i) => i.mes === meses);
            document.write("<br> Las ventas de "+ empresas +" fueron de USD "+ busqueda.revenue +" millones, en el mes de "+ meses);
            break;
        case "Baidu":
            busqueda = bidu.find((i) => i.mes === meses);
            document.write("<br> Las ventas de "+ empresas +" fueron de USD "+ busqueda.revenue +" millones, en el mes de "+ meses);
            break;
        case "Biogen":
            busqueda = biib.find((i) => i.mes === meses);
            document.write("<br> Las ventas de "+ empresas +" fueron de USD "+ busqueda.revenue +" millones, en el mes de "+ meses);
            break;
        case "Bristol-Myers Squibb Company":
            busqueda = bmy.find((i) => i.mes === meses);
            document.write("<br> Las ventas de "+ empresas +" fueron de USD "+ busqueda.revenue +" millones, en el mes de "+ meses);
            break;
        case "BP":
            busqueda = bp.find((i) => i.mes === meses);
            document.write("<br> Las ventas de "+ empresas +" fueron de USD "+ busqueda.revenue +" millones, en el mes de "+ meses);
            break;
        case "BRF":
            busqueda = brfs.find((i) => i.mes === meses);
            document.write("<br> Las ventas de "+ empresas +" fueron de USD "+ busqueda.revenue +" millones, en el mes de "+ meses);
            break;
        case "Banco Santander Brasil":
            busqueda = bsbr.find((i) => i.mes === meses);
            document.write("<br> Las ventas de "+ empresas +" fueron de USD "+ busqueda.revenue +" millones, en el mes de "+ meses);
            break;
        default:
            break;
    }
// }

console.log(busqueda.revenue);

// if(empresas === "Apple"){
//     let busqueda = aapl.find((i) => i.mes === meses);

// }


// const sep21 = [
//     {empresa: "Apple", revenue: 366295},
//     {empresa: "AbbVie", revenue: 55169},
//     {empresa: "Ambev", revenue: 12980},
//     {empresa: "Abbott Laboratories", revenue: 42308},
//     {empresa: "Adobe", revenue: 15134},
//     {empresa: "Adecoagro", revenue: 950},
//     {empresa: "American International Group", revenue: 47646},
//     {empresa: "Advanced Micro Devices", revenue: 14852}
// ];

// const busquedaEmpresa = sep21.find((i) => i.empresa === empresas);


//     document.write("Las ventas de "+ empresas +" fueron de "+ busqueda.revenue +" en el mes de Septiembre de 2021.")


// const busqueda = sep.map((i) => i.revenue);

// console.log(busquedaEmpresa.revenue);
// console.log(busqueda);

