let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let lista = input().split(" ")
let a = +lista[0];
let b = +lista[1];
let fim = b
write ("[", " ");
while(a <= fim) {
  write(a + " " + b, " ")
  a += 1;
  b -= 1;
}
write ("]")