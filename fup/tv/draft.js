let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let valor = +input().trim();
let parcelas = +input().trim();

let juros = 0;

if (parcelas === 1) juros = 0
else if (parcelas === 2) juros = 5;
else if (parcelas === 3) juros = 10;
else if (parcelas === 4) juros = 15;
else if (parcelas === 5) juros = 20;
else if (parcelas === 6) juros = 25;
else if (parcelas === 7) juros = 30;
else if (parcelas === 8) juros = 35;
else if (parcelas === 9) juros = 40;
else if (parcelas === 10) juros = 45;

let valorTotal = valor * (1 + juros / 100);
let valorParcela = valorTotal / parcelas;

write(valorParcela.toFixed(2));
write(valorTotal.toFixed(2));