let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let a = +input();
let b = +input();
let media = (a + b) / 2;

if (media >= 7) {
  write('aprovado');
} 
else if (media < 4) {
  write('reprovado');
}
else {
  let final = +input();
  let mediaFinal = (media + final)/2;

  if (mediaFinal >= 5){
    write('aprovado na final');
  } else {
    write('reprovado na final');
  }
}