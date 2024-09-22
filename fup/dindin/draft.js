let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let qtd = +input();

// Contadores começa com 0
let saborCount = { 'c': 0, 'l': 0 };
let turnoCount = { 'm': 0, 't': 0 };

// vai lendo e adicionando na contagem
for (let i = 0; i < qtd; i++) {
    let [sabor, turno] = input().split(" ");
    saborCount[sabor]++;
    turnoCount[turno]++;
}

let saborMaisVendido = '';

if (saborCount['c'] === saborCount['l']) {
    saborMaisVendido = 'empate';
} else {
    saborMaisVendido = saborCount['c'] > saborCount['l'] ? 'c' : 'l'; // se c for maior que l, c recebe l
}
write(saborMaisVendido);

let turnoMaisVago = '';

if (turnoCount['m'] === turnoCount['t']) {
    turnoMaisVago = 'empate';
} else {
    turnoMaisVago = turnoCount['m'] < turnoCount['t'] ? 'm' : 't'; // se m for menor t, m recebe t
}
write(turnoMaisVago);

// let qtd = +input()
// let saborCont = { 'c': 0, 'l': 0 };
// let turnoCont = { 'm': 0, 't': 0 };

// for (let i = 0; i < qtd; i++) {
//    let [sabor, turno] = input().split(" ")
//    saborCont[sabor] ++;
//    turnoCont[turno] ++;
// }

// let maxSaborCont = Math.max(saborCont['c'], saborCont['l']);
// let saborMaisVendido = '';
// if (saborCont['c'] === saborCont['l']) {
//     saborMaisVendido = 'empate';
// } else {
//     saborMaisVendido = saborCont['c'] > saborCont['l'] ? 'c' : 'l';
// }
// write(saborMaisVendido);

// let maxTurnoCont = Math.max(turnoCont['m'], turnoCont['t']);
// let turnoMaisVago = '';
// if (turnoCont ['m'] === turnoCont['t']) {
//     tunoMaisVago = 'empate';
// } else {
//   turnoMaisVago = turnoCont['m'] > turnoCont['t'] ? 'm' : 't';
// }
// write(turnoMaisVago);

