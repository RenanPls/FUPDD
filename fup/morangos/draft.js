let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);


 let c1 = +input()
 let l1 = +input()
 let c2 = +input()
 let l2 = +input()

let a1 = c1 * l1
let a2 = c2 * l2

if (a1 > a2) {
  console.log(a1)
} else {
  console.log(a2)
}