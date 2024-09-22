let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);


let diaSemana = +(input().trim());
let hora = +(input().trim());

let trabalhando = false;

if (diaSemana >= 2 && diaSemana <= 6) {
    if ((hora >= 8 && hora < 12) || (hora >= 14 && hora < 18)) {
        trabalhando = true;
    }
} else if (diaSemana === 7) {
    if (hora >= 8 && hora < 12) {
        trabalhando = true;
    }
}

write(trabalhando ? "SIM" : "NAO");