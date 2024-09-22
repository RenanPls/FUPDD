let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let a = parseFloat(input());
let b = input().trim();
let valorReal = parseFloat(input());

if (a === valorReal) {
    write("primeiro");
} else if (b === "m" && valorReal < a) {
    write("segundo");
} else if (b === "M" && valorReal > a) {
    write("segundo");
} else {
    write("primeiro");
}