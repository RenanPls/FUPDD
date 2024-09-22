let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);


let n1 = +(input().trim());
let n2 = +(input().trim());

let divisaoInteira = Math.floor(n1 / n2);

let resto = n1 % n2;

let divisaoQuebrada = (n1 / n2).toFixed(2); // toFixed(2) para garantir que tenha 2 casas decimais)

write(divisaoInteira);
write(resto);
write(divisaoQuebrada);