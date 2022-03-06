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

let busqueda;

// while(empresas != ""){
    switch(empresas){
        case "Apple":
            busqueda = aapl.find((i) => i.mes === meses);
            console.log("Las ventas de "+ empresas +" fueron de "+ busqueda.revenue +" en el mes de "+ meses);
            break;
        case "Ambev":
            busqueda = abev.find((i) => i.mes === meses);
            console.log("Las ventas de "+ empresas +" fueron de "+ busqueda.revenue +" en el mes de "+ meses);
            break;
        case "Abbott Laboratories":
            busqueda = abt.find((i) => i.mes === meses);
            console.log("Las ventas de "+ empresas +" fueron de "+ busqueda.revenue +" en el mes de "+ meses);
            break;
        case "Adobe":
            busqueda = adbe.find((i) => i.mes === meses);
            console.log("Las ventas de "+ empresas +" fueron de "+ busqueda.revenue +" en el mes de "+ meses);
            break; 
        case "Adecoagro":
            busqueda = agro.find((i) => i.mes === meses);
            console.log("Las ventas de "+ empresas +" fueron de "+ busqueda.revenue +" en el mes de "+ meses);

            console.log(busqueda.revenue.indexOf(busqueda.revenue));


            
            function variacion(){
                return parseFloat(((busqueda.revenue - agro[agro.indexOf(meses)].revenue)/agro[agro.indexOf(meses)].revenue)*100).toFixed(2);
            }
            console.log("La variacion anual fue del "+ variacion() +"%");
            break;    
        default:
            break;
    }
// }

// console.log(busqueda.revenue);

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

