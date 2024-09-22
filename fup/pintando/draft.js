let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let a = +input()
let b = +input()
let c = +input()

let soma = (a + b + c) / 2
let area = Math.sqrt(soma * (soma - a) * (soma - b) * (soma - c));
// Math.sqrt é uma função que calcula a raiz quadrada
write(area.toFixed(2));