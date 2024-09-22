let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let l = +input();
let r = +input();
let d = +input();

if (r > 50 && l < r && r > d) { //&& é "AND" ou "E"
    write('S');
} else {
    write('N');
}