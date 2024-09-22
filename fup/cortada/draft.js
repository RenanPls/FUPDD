let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let B = +input()
let T = +input()

let alt = 70
let com = 160

let areaT = alt * com

let areaF = ((B * T) * alt) / 2;

if (areaF > areaT){
    write(1)
} else if (areaF === areaT) {
    write(0)
} else if (areaF < areaT) {
    write (2)
}