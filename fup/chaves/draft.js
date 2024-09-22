let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let a = +input()

if (a > 0){
    write("positivo");
}
if (a < 0){
    write("negativo");
}
if (a == 0){
    write("nulo");
}