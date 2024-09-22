let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let a = +input();
let b = +input();
let c = +input();

let chutePrimeiro = Math.abs(a - b);
let chuteSegundo = Math.abs(a - c);

if (chutePrimeiro < chuteSegundo){
  write("primeiro");
} else if (chuteSegundo < chutePrimeiro) {
  write("segundo");
} else {
  write("empate");
}