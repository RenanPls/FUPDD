let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let val1 = +input()
let val2 = +input()
let val3 = +input()

if (val1 === val2 && val2 === val3){
    write(3);
} else if (val1 === val2 || val1 === val3 || val2 === val3) {
    write(2);
} else {
    write(0);
}