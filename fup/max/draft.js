let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let num1 = +input()
let num2 = +input()

if (num1 < num2){
    console.log(num2)

} else {
    console.log(num1)
}
