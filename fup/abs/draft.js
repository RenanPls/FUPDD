let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

// function absoluto(valor) {
//     if (valor < 0) {
//     return -valor;
// }
// return valor;
// }

// let num1 = input()
// let num2 = input()

// let resultado = absoluto(num1 - num2);

// write(resultado);

