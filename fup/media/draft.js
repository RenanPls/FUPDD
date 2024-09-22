let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let a = +input()
let b = +input()

let media = (a + b) / 2.0;

write(media.toFixed(1)); // .toFixed(1) para garantir que tenha casa decimal
