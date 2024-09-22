let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let vel = +input();
let tempo = +input();
let cons = +input();

let tempoHoras = tempo / 60;
let dist = vel * tempoHoras;
let des = dist / cons;

write(des.toFixed(2));