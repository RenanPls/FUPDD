let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let a = +input(); // Primeiro número
let b = +input(); // Segundo número
let op = input().trim(); // Operador

let result;

if (op === '+') {
    result = a + b;
} else if (op === '-') {
    result = a - b;
} else if (op === '*') {
    result = a * b;
} else if (op === '/') {
    result = Math.floor(a / b);
}

write(result);