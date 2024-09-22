const { Console } = require("console");

let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let esq1 = +input()
let esq2 = +input()
let esq3 = +input()

if ((esq1 < esq2 && esq1 > esq3) || (esq1 > esq2 && esq1 < esq3)) {
    write(esq1);
} else if ((esq2 < esq1 && esq2 > esq3) || (esq2 > esq1 && esq2 < esq3)) {
    write(esq2);
} else {
    write(esq3);
}

